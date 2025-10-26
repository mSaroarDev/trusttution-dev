import { useGetAService } from "@/api/services/services.hooks";
import { Spinner } from "@heroui/react";
import { BiSolidEdit } from "react-icons/bi";
import { BsTrash3Fill } from "react-icons/bs";

const ServiceDetails = ({ data, setShowNewServiceModal }) => {
  const { data: serviceData, isPending } = useGetAService(data?.id);
  const service = serviceData?.data;

  if (isPending) {
    return (
      <div className="h-14 w-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={()=> {
            setShowNewServiceModal(true)
          }}
          className="more-action-button flex items-center gap-1"
        >
          <BiSolidEdit size={18} />
          <span>Edit Service</span>
        </button>
      </div>

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
          <h4 className="font-medium mb-1">Contractors</h4>
          <ul className="list-disc ml-4 text-sm text-gray-700">
            {service.conjobs.map((c, i) => (
              <li key={i}>{c.name} ({c.contractor_permissions})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
