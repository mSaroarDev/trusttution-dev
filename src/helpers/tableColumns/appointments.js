import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { HiTrash } from "react-icons/hi";
import { MdOutlineMoreVert } from "react-icons/md";

export const appointmentsColumns = () => [
  {
    name: "#ID",
    selector: (row) => row.appointmentId,
    sortable: true,
    width: "120px",
  },
  {
    name: "Student Name",
    cell: (row) => (
      <div className="flex items-center gap-2">
        <Avatar
          size="sm"
          src={`https://ui-avatars.com/api/?name=${row?.first_name}+${row?.last_name}`}
          alt={`${row?.first_name} ${row?.last_name}`}
          className="flex-shrink-0"
        />
        <div>
          <h3 className="font-medium">{row?.studentName} {row?.last_name}</h3>
          <p className="text-xs line-clamp-1">{row?.email}</p>
        </div>
      </div>
    ),
  },
  {
    name: "Subject",
    selector: (row) => row.Subject,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Time",
    cell: (row) => (
      <span>
        {row.startTime} - {row.endTime}
      </span>),
  },
  {
    name: "Mobile Number",
    selector: (row) => row.mobileNumber,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Actions",
    width: "100px",
    cell: () => (
      <Dropdown>
        <DropdownTrigger>
          <button className="more-action-button">
            <MdOutlineMoreVert size={18} />
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
          <DropdownItem
            key="new"
            shortcut="⌘N"
            startContent={<HiTrash size={18} />}
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            shortcut="⌘C"
            startContent={<HiTrash size={18} />}
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            shortcut="⌘⇧E"
            startContent={<HiTrash size={18} />}
          >
            Edit file
          </DropdownItem>
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            startContent={<HiTrash size={18} />}
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
]