import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import { HiMiniUserPlus } from "react-icons/hi2";
import avatarPlaceholder from "@/assets/images/placeholder.png";
import { useState } from "react";
import PrimaryModal from "@/components/PrimaryModal";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import { showToaster } from "@/helpers/useToaster";
import { handleErrorMessage } from "@/helpers/handleErrorMessage";

const TutorCard = ({
  data,
  addToService,
  serviceId,
  isAdding,
  setAddTutorModalOpen
}) => {
  const [payRate, setPayRate] = useState(null);
  const handleAddTutor = async () => {
    try {
      const res = await addToService({
        serviceId,
        data: {
          contractor: data?.id,
          pay_rate: payRate,
        }
      });

      if (res?.success) {
        showToaster("success", res?.message || "Tutor added successfully");
        setPayRate(null);
        setShowAddInfoModal(false);
        setAddTutorModalOpen(false);
      }
    } catch (error) {
      showToaster("error", handleErrorMessage(error));
    }
  };

  const [showAddInfoModal, setShowAddInfoModal] = useState(false);

  return (
    <>
      <div className="flex items-center p-2 rounded-sm border border-primary/40 gap-3 mb-1">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative overflow-hidden rounded-sm">
            <Image
              src={avatarPlaceholder}
              fill
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="font-medium">
              {data?.first_name} {data?.last_name}
            </h4>
            <p className="text-sm text-gray-600">
              {data?.email}
            </p>
          </div>
        </div>

        <PrimaryButton
          color="primary"
          startContent={<HiMiniUserPlus size={18} />}
          className="ml-auto"
          onPress={() => setShowAddInfoModal(true)}
        >
          Add Tutor
        </PrimaryButton>
      </div>

      {showAddInfoModal && (
        <PrimaryModal
          isOpen={showAddInfoModal}
          onOpenChange={() => setShowAddInfoModal(false)}
          size="md"
          title="Add Tutor to Service"
        >
          <div className="space-y-4">
            <p>Are you sure you want to add <strong>{data?.first_name} {data?.last_name}</strong> to this service?</p>

            <div>
              <Label>Pay rate (per hour)</Label>
              <Input
                type="number"
                placeholder="Enter pay rate for this tutor"
                className="mt-1"
                value={payRate || ""}
                onChange={(e) => setPayRate(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-end gap-2">
              <PrimaryButton
                variant="outline"
                onPress={() => setShowAddInfoModal(false)}
              >
                Cancel
              </PrimaryButton>

              <PrimaryButton
                color="primary"
                onPress={handleAddTutor}
                isLoading={isAdding}
                isDisabled={!payRate}
              >
                Confirm Add
              </PrimaryButton>
            </div>
          </div>
        </PrimaryModal>
      )}
    </>
  );
};

export default TutorCard;