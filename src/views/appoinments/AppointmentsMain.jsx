"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { appointmentsBreadTree } from "@/helpers/breadCrumbs";
import { GoPlus } from "react-icons/go";
import StatsCard from "./StatsCard";
import DataTable from "react-data-table-component";
import { appointmentsColumns } from "@/helpers/tableColumns/appointments";
import { appointments } from "@/data__delete/appointments";

const AppointmentsMain = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <BreadcrumbsComponent breadTree={appointmentsBreadTree} />

        <PrimaryButton startContent={<GoPlus size={18} />} color="primary">
          Create Appointment
        </PrimaryButton>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>

      <div>
        <DataTable
          columns={appointmentsColumns()}
          data={appointments}
        />
      </div>
    </>
  );
};

export default AppointmentsMain;