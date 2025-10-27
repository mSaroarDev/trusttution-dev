"use client";
import { useGetAService, useRemoveTutorFromService } from "@/api/services/services.hooks";
import PrimaryModal from "@/components/PrimaryModal";
import { Spinner } from "@heroui/react";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { LuUserRoundPlus } from "react-icons/lu";
import TutorAddToServiceForm from "./TutorAddToServiceForm";
import { BsTrash3Fill } from "react-icons/bs";
import { showConfirmModal } from "@/helpers/showConfirmModal";
import { showToaster } from "@/helpers/useToaster";
import { handleErrorMessage } from "@/helpers/handleErrorMessage";
import { useAuth } from "@/hooks/useAuth";
import PrimaryButton from "@/components/ui/PrimaryButton";
import BookAppointmentForm from "./BookAppointmentForm";


const ServiceDetails = ({ data, setShowNewServiceModal }) => {
  const { data: serviceData, isPending } = useGetAService(data?.id);
  const service = serviceData?.data;

  const { mutateAsync: removeTutor } = useRemoveTutorFromService();
  const [addTutorModalOpen, setAddTutorModalOpen] = useState(false);

  const { isTutor, isStudent } = useAuth();

  const [bookingModal, setBookingModal] = useState(false);

  const handleRemove = (tutorId) => {
    showConfirmModal({
      title: "Remove Tutor from Service",
      text: "Are you sure you want to remove this tutor from the service?",
      func: async () => {
        try {
          const res = await removeTutor({
            serviceId: service?.id,
            data: {
              contractor: tutorId
            }
          });

          if (res?.success) {
            showToaster("success", "Tutor removed from service successfully.");
          }
        } catch (error) {
          showToaster("error", handleErrorMessage(error) || "Failed to remove tutor from service.");
        }
      }
    })
  };

  if (isPending) {
    return (
      <div className="h-14 w-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  };

  return (
    <div className="space-y-4">
      {isTutor && (
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => {
              setShowNewServiceModal(true)
            }}
            className="more-action-button flex items-center gap-1 px-3"
          >
            <BiSolidEdit size={16} />
            <span>Edit Service</span>
          </button>

          <button
            onClick={() => {
              setAddTutorModalOpen(true)
            }}
            className="more-action-button flex items-center gap-1 px-3 bg-primary/10 text-primary"
          >
            <LuUserRoundPlus size={18} />
            <span>Add Tutor to Service</span>
          </button>
        </div>
      )}

      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{service?.name}</h3>
        <p className="text-sm text-gray-600">{service?.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <p><span className="font-medium">Charge Rate:</span> ${service?.dft_charge_rate}/hour</p>
        <p><span className="font-medium">Status:</span> {service?.status}</p>
        <p><span className="font-medium">Created:</span> {new Date(service?.created).toLocaleDateString()}</p>
        <p><span className="font-medium">Branch Tax:</span> {service?.branch_tax_setup}</p>
        <p><span className="font-medium">Contractor Tax:</span> {service?.contractor_tax_setup}</p>
        <p><span className="font-medium">Bookable:</span> {service?.is_bookable ? "Yes" : "No"}</p>
      </div>

      {service?.desired_skills?.length > 0 && (
        <div>
          <h4 className="font-medium mb-1">Desired Skills</h4>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            {service.desired_skills.map((skill) => (
              <li key={skill.id}>
                {skill.subject.name} ({skill.qual_level.name})
              </li>
            ))}
          </ul>
        </div>
      )}

      {service?.rcrs?.length > 0 && (
        <div>
          <h4 className="font-medium mb-1">Recipients</h4>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            {service.rcrs.map((r, i) => (
              <li key={i}>{r.recipient_name} (Client: {r.paying_client_name})</li>
            ))}
          </ul>
        </div>
      )}

      {service?.conjobs?.length > 0 && (
        <div>
          <h4 className="font-medium mb-1">Assigned Tutors/Contractors</h4>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            {service.conjobs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {c.name} (${c.pay_rate})
                {isTutor && (
                  <BsTrash3Fill onClick={() => handleRemove(c?.contractor)} size={16} className="cursor-pointer -mt-1" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isStudent && (
        <div>
          <PrimaryButton onPress={()=> setBookingModal(true)} className="w-full mt-5">Book Appointment</PrimaryButton>
        </div>
      )}

      {addTutorModalOpen && (
        <>
          <PrimaryModal
            isOpen={addTutorModalOpen}
            onOpenChange={() => setAddTutorModalOpen(false)}
            size="2xl"
            title="Add Tutor to Service"
          >
            <TutorAddToServiceForm
              serviceId={service?.id}
              setAddTutorModalOpen={setAddTutorModalOpen}
            />
          </PrimaryModal>
        </>
      )}

      {bookingModal && (
        <PrimaryModal
          isOpen={bookingModal}
          onOpenChange={() => setBookingModal(false)}
          size="xl"
          title="Book Appointment"
        >
          <BookAppointmentForm />
        </PrimaryModal>
      )}
    </div>
  );
};

export default ServiceDetails;
