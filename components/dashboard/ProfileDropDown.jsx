import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import React from "react";

export default function ProfileDropDown() {
  return (
    <DropdownMenu aria-label="User Actions" variant="flat">
      <DropdownItem key="profile" className="h-14 gap-2">
        <p className="font-bold">Signed in as</p>
        <p className="font-bold">@tonyreichert</p>
      </DropdownItem>
      <DropdownItem key="settings">My Settings</DropdownItem>
      <DropdownItem key="team_settings">Team Settings</DropdownItem>
      <DropdownItem key="analytics">Analytics</DropdownItem>
      <DropdownItem key="system">System</DropdownItem>
      <DropdownItem key="configurations">Configurations</DropdownItem>
      <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
      <DropdownItem key="logout" color="danger">
        Log Out
      </DropdownItem>
    </DropdownMenu>
  );
}
