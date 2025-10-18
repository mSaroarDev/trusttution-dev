import BreadcrumbsComponent from "@/components/Breadcrumbs";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { studentsBreadTree } from "@/helpers/breadCrumbs";
import { GoPlus } from "react-icons/go";

const StudentsMain = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <BreadcrumbsComponent breadTree={studentsBreadTree} />

        <PrimaryButton startContent={<GoPlus size={18} />} color="primary">
          Add New Lesson
        </PrimaryButton>
      </div>
    </>
  );
};

export default StudentsMain;