"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { appointments } from "@/data__delete/appointments";
import { earningsBreadTree } from "@/helpers/breadCrumbs";
import { appointmentsColumns } from "@/helpers/tableColumns/appointments";
import DataTable from "react-data-table-component";
import StatsCard from "../appoinments/StatsCard";

const EarningsMain = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <BreadcrumbsComponent breadTree={earningsBreadTree} />
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

export default EarningsMain;