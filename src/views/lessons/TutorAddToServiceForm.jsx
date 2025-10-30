import { useAddTutorToService } from "@/api/services/services.hooks";
import { useGetTutors } from "@/api/tutors/tutors.hooks";
import Input from "@/components/ui/input";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Spinner } from "@heroui/react";
import { CgSearch } from "react-icons/cg";
import TutorCard from "./TutorCard";

const TutorAddToServiceForm = ({serviceId, setAddTutorModalOpen}) => {
  const { data: tutors, isPending } = useGetTutors();
  const {mutateAsync: addToService, isPending: isAdding} = useAddTutorToService();

  return (
    <>
      <div className="flex w-full items-center gap-1">
        <Input className="flex-1" />
        <PrimaryButton
          color="primary"
          startContent={<CgSearch size={18} />}
        >
          Search
        </PrimaryButton>
      </div>

      <div className="mt-3 max-h-full overflow-y-auto space-y-2">
        {isPending ? (
          <>
            <Spinner size="lg" />
          </>
        ) : tutors?.data?.map((tutor, index)=> (
          <TutorCard 
            key={index} 
            data={tutor} 
            addToService={addToService}
            serviceId={serviceId}
            isAdding={isAdding}
            setAddTutorModalOpen={setAddTutorModalOpen} 
          />
        ))}
      </div>
    </>
  );
};

export default TutorAddToServiceForm;