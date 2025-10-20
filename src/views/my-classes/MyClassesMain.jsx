"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { classData } from "@/data__delete/classes";
import { myClassesBreadTree } from "@/helpers/breadCrumbs";
import { classesColumns } from "@/helpers/tableColumns/classesColumngs";
import DataTable from "react-data-table-component";
import { MdOutlineExplore } from "react-icons/md";

const MyClassesMain = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <BreadcrumbsComponent breadTree={myClassesBreadTree} />

        <PrimaryButton startContent={<MdOutlineExplore size={18} />} color="primary">
          Browse Classes
        </PrimaryButton>
      </div>

      <div className="mt-5">
        <DataTable
          columns={classesColumns()}
          data={classData}
        />
      </div>
    </>
  );
};

export default MyClassesMain;