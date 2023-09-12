import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiMenu5Fill } from "react-icons/ri";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection,
} from "@nextui-org/react";

export default function Nav({ toggleSidebar }) {
  return (
    <nav className="w-full md:w-fit p-6">
      <div className="h-10 w-full px-4 space-x-4 flex items-center justify-between md:justify-start rounded-full bg-gray-900">
        <div>
          <span onClick={toggleSidebar} className="cursor-pointer hover:text-orange-400">
            <RiMenu5Fill size={20} />
          </span>
        </div>
        <div className="w-full flex items-center justify-start space-x-4">
          <h1 className="text-gray-200 font-bold">Dashboard</h1>
          <div className="hidden md:flex text-xs items-center space-x-4 px-4 border-x border-gray-500">
            <span>12 tasks</span>
            <span>4 members</span>
          </div>
        </div>
        <Dropdown className="dark bg-gray-800">
          <DropdownTrigger>
            <Button isIconOnly color="danger" aria-label="menu" variant="transparant">
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
