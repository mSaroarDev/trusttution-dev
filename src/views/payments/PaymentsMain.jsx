"use client";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import { appointments } from "@/data__delete/appointments";
import { paymentsBreadTree } from "@/helpers/breadCrumbs";
import { appointmentsColumns } from "@/helpers/tableColumns/appointments";
import DataTable from "react-data-table-component";

const PaymentsMain = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <BreadcrumbsComponent breadTree={paymentsBreadTree} />
      </div>

      <div className="mt-5">
        <DataTable
          columns={appointmentsColumns()}
          data={appointments}
        />
      </div>
    </>
  );
};

export default PaymentsMain;