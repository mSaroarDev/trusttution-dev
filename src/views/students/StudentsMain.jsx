"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { studentsBreadTree } from "@/helpers/breadCrumbs";
import { GoPlus } from "react-icons/go";
import Datatable from "react-data-table-component";
import { students } from "@/data__delete/students";
import { studentsColumns } from "@/helpers/tableColumns/studentsColumns";

const StudentsMain = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <BreadcrumbsComponent breadTree={studentsBreadTree} />

        <PrimaryButton startContent={<GoPlus size={18} />} color="primary">
          Add New Lesson
        </PrimaryButton>
      </div>

      <div className="mt-5">
        <Datatable 
          columns={studentsColumns()}
          data={students}
        />
      </div>
    </>
  );
};

export default StudentsMain;