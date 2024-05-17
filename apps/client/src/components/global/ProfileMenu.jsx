// "use server";
import { Button } from "../ui/button";
import { FiUser } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaBackward, FaLanguage, FaTeamspeak, FaUser } from "react-icons/fa";
import Link from "next/link";
import { getMe } from "@app/client/data/users";

export default function ProfileMenu() {
  // const user = await getMe();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-0 active:outline-0" asChild>
        <button>
          <FiUser size={30} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-10">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>
              <FaUser />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Intiate Return
            <DropdownMenuShortcut>
              <FaBackward />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Support
            <DropdownMenuShortcut>
              <FaTeamspeak />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Language
            <DropdownMenuShortcut>
              <FaLanguage />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link
            href={"/auth/login"}
            className="w-full bg-color-primary p-3 text-white text-base font-medium rounded-md hover:scale-105 transition-all ease-in-out duration-200"
          >
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-between text-xs">
          <small>No Account Yet?</small>
          <Link
            href={"/auth/register"}
            className="uppercase font-bold underline  "
          >
            register here
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
