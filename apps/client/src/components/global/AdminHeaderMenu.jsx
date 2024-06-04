import * as React from "react";
import { MdManageAccounts } from "react-icons/md";
import { GiFemaleVampire } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { logout } from "@app/client/data/auth";
import { FaSignOutAlt } from "react-icons/fa";
import Greeting from "../user/Greeting";

export default function CategiesMenu() {
  const handleLogout = async () => {
    const result = await logout();
    if (result.message) {
      // Redirect to the login page or home page after logout
      router.push("/");
    } else {
      // Handle logout error if necessary
      console.error(result.error);
    }
  };
  // const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-0 active:outline-0" asChild>
        <Button
          variant="outline"
          className="border-color-primary border active:outline-0 focus:outline-0 border-dashed outline-none"
        >
          <div className="flex items-center justify-center flex-col">
            <Greeting fullName={true} />
            <span className="text-sm text-color-body">ADMIN</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-10 shadow-md">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FaSignOutAlt />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
