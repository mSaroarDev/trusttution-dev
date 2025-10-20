import PrimaryButton from "@/components/ui/PrimaryButton";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
// import convertToBanglaNumber from "../../../utils/convertNumbertoBangla";
// import { detectChar } from "../../../utils/detectChar";
import { TiStopwatch } from "react-icons/ti";

const LessonCard = ({ data, isLogged = false}) => {

  return (
    <>
      <Link
        href={isLogged ? `/user/courses/${data?._id}` : `/course/details/${data?._id}`}
        className="px-2 pt-2 rounded-xl bg-white dark:bg-controlled border-[1px] border-slate-200 dark:border-gray-900 hover:shadow-md transition-all duration-150 flex flex-col h-full"
      >
        <figure>
          {/* <img
            src={data?.image}
            alt={data?.name}
            className="w-full h-[180px] md:h-[150px] rounded-md object-cover"
          /> */}
        </figure>
        <div className="p-4 hind-siliguri-regular flex flex-col flex-1">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              {/* <RenderStatus status={data?.status} /> */}
            </div>

            <h1 className={`font-semibold text-base mt-3`}>
              What is Lorem Ipsum?
            </h1>
          </div>

          <div className="mt-2">
            <p className="hind-siliguri-bold mb-3 flex items-center gap-2">
              <TiStopwatch className="w-4 h-4" /> 
              <span>
                40 min
              </span>
            </p>
          
            <div className="pt-2">
              <PrimaryButton endContent={<MdOutlineArrowForward size={18} />} color="primary" className="w-full px-3 py-1 rounded-md font-medium ms-auto">
                View Details
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LessonCard;