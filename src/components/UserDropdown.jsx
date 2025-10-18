import { useAuth } from "@/hooks/useAuth";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function UserDropdown() {

  const {replace} = useRouter();
  const {logout, user} = useAuth();

  const handleLogout = () => {
    replace("/login");
    logout();
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger className="cursor-pointer">
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            // description={`${user?.userType?.split().map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || "User"}`}
            // name={`${user?.firstName || "User"} ${user?.lastName || ""}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{`@${user?.firstName?.toLowerCase() || "User"}${user?.lastName?.toLowerCase() || ""}`}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
