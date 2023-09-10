import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiMenu5Fill } from "react-icons/ri";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";

export default function Nav({ toggleSidebar }) {
  return (
    <nav className="h-10 w-fit m-6 px-6 space-x-6 flex items-center rounded-full bg-gray-900">
      <div>
        <span
          onClick={toggleSidebar}
          className="cursor-pointer hover:text-orange-400"
        >
          <RiMenu5Fill size={20} />
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="border-r pr-6 mr-6 border-gray-500">
          <h1 className="text-gray-200 font-bold">Dashboard</h1>
        </div>
        <div className="text-xs flex items-center space-x-6 border-r pr-6 mr-6 border-gray-500">
          <span>12 tasks</span>
          <span>4 members</span>
        </div>
        <Dropdown backdrop="blur" className="dark bg-gray-800">
          <DropdownTrigger>
            <Button variant="transparant">
              <span>
                <HiOutlineDotsHorizontal size={20} />
              </span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dropdown menu with description"
          >
            <DropdownSection title="Actions">
              <DropdownItem
                key="new"
                shortcut="⌘N"
                description="Create a new file"
              >
                New file
              </DropdownItem>
              <DropdownItem
                key="copy"
                shortcut="⌘C"
                description="Copy the file link"
              >
                Copy link
              </DropdownItem>
              <DropdownItem
                key="edit"
                shortcut="⌘⇧E"
                description="Allows you to edit the file"
              >
                Edit file
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Danger zone">
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                shortcut="⌘⇧D"
                description="Permanently delete the file"
              >
                Delete file
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
}
