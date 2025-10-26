import PrimaryModal from "@/components/PrimaryModal";
import RenderStatus from "@/components/RenderStatus";
import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import ServiceDetails from "./ServiceDetails";

const LessonCard = ({ data, setShowNewServiceModal, setEditableService }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div
        className="px-2 pt-2 rounded-xl bg-white dark:bg-controlled border border-slate-200 dark:border-gray-900 hover:shadow-md hover:scale-[102%] transition-all duration-150 flex flex-col h-full cursor-pointer"
        onClick={() => {
          setShowModal(true)
          setSelectedService(data);
          setEditableService(data)
        }}
      >
        <div className="p-4 hind-siliguri-regular flex flex-col flex-1">
          <div className="flex-1">
            <div className="flex items-start gap-2">
              <div className="bg-brand/10 w-14 h-14 shrink-0 rounded-sm"></div>
              <div>
                <h1 className={`font-medium line-clamp-2`}>
                  {data?.name}
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="pt-2 mt-3">
              <div className="text-xl flex items-center justify-between">
                <p>${data?.dft_charge_rate}<span className="text-sm">/hour</span></p>
                <div className="flex items-center gap-2">
                  <RenderStatus status={data?.status} />
                  <button
                    onClick={() => {
                      setShowModal(true)
                      setSelectedService(data)
                    }}
                    className="more-action-button"
                  >
                    <IoChevronForwardOutline size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <PrimaryModal
          isOpen={showModal}
          onOpenChange={() => setShowModal(false)}
          showFooter
          size="3xl"
          title="Service Details"
        >
          <ServiceDetails
            data={selectedService}
            setShowNewServiceModal={setShowNewServiceModal}
          />
        </PrimaryModal>
      )}
    </>
  );
};

export default LessonCard;