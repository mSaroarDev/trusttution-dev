"use client";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";

const TutorCard = ({ data }) => {
  const { push } = useRouter();

  return (
    <>
      <div onClick={() => push(`/dashboard/browse-tutors/${data?.id}`)} className="cursor-pointer border-b border-slate-100 py-5 px-6 flex items-start justify-between hover:bg-slate-100">
        <div className="flex items-start gap-5">
          <Avatar
            size="lg"
            src={`https://ui-avatars.com/api/?name=${"john"}+${"doe"}`}
            alt={``}
            className="shrink-0"
          />
          <div>
            <h3 className="font-medium text-lg">
              <span className="font-semibold uppercase">
                {data?.first_name}
              </span>
              {" "}
              <span className="uppercase font-light">
                {data?.last_name}
              </span>
            </h3>
            <p className="line-clamp-1">Teacher at sciencelab</p>
            <p className="line-clamp-1">Chemistry</p>

            <div className="mt-3 flex items-center gap-5">
              <p className="text-sm">Rate: <span className="font-semibold">$25/hr</span></p>
              <p className="text-sm">Taught: <span className="font-semibold">252 hrs</span></p>
            </div>

            <PrimaryButton onClick={() => push(`/dashboard/browse-tutors/${data?.id}`)} variant="bordered" className="mt-4 px-4 py-2 text-sm">
              View Profile and Pricing plan
            </PrimaryButton>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <h3 className="text-4xl font-semibold text-green-700">4.5</h3>
            <div>
              <p className="-mb-2 mt-1">457</p>
              <p>sessions</p>
            </div>
          </div>
          <button className="flex items-center gap-2 mt-1 text-sm text-primary-600 underline">
            <FaRegPaperPlane size={16} className="shrink-0" />
            <span>Send Message</span>
          </button>
          <button className="flex items-center gap-2 mt-1 text-sm text-black-600 underline">
            <MdOutlineCall size={16} className="shrink-0" />
            <span>Show Number</span>
          </button>
          <button className="flex items-center gap-2 mt-1 text-sm text-red-600 underline">
            <IoCalendarNumberOutline size={16} className="shrink-0" />
            <span>Request Live Session</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TutorCard;