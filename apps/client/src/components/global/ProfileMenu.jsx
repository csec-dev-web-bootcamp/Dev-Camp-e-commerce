// "use server";

// import { Button } from "../ui/button";
import { FiUser } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaBackward, FaLanguage, FaTeamspeak, FaUser } from "react-icons/fa";
import Link from "next/link";
// import { getMe } from "@app/client/data/users";
// import Username from "../user/Username";
import { getMe } from "@app/client/data/users";
import { useEffect, useState } from "react";
import { BsPerson, BsPersonBadge } from "react-icons/bs";
import Loader from "./Loader";
import Greeting from "../user/Greeting";

export default function ProfileMenu({ children }) {
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const userName = async () => {
        setIsLoading(true);
        try {
          const user = await getMe();
          setUsername(!user.error ? user.name : username);
          setIsLoading(false);
        } catch (error) {
          return { error: message };
        }
      };
      userName();
    },
    [username]
  );
  // const user = await getMe();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-0 active:outline-0" asChild>
        <button>
          <FiUser size={30} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-10">
        <DropdownMenuLabel className="text-center font-bold text-md flex gap-3 items-center ">
          <BsPerson
            className="text-color-white p-2 bg-color-secondary rounded-full"
            size={30}
          />

          <span className="text-sm text-[#777777]">
            <Greeting name={true} />
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {username && (
            <DropdownMenuItem>
              My Account
              <DropdownMenuShortcut>
                <FaUser />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          )}
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

        {!username && (
          <DropdownMenuItem>
            <Link
              href={"/auth/login"}
              className="w-full bg-color-primary p-3 text-white text-base font-medium rounded-md hover:scale-105 transition-all ease-in-out duration-200"
            >
              Login
            </Link>
          </DropdownMenuItem>
        )}
        {username && (
          <DropdownMenuItem>
            <Link
              href={"/auth/login"}
              className="w-full bg-color-primary p-3 text-white text-base font-medium rounded-md hover:scale-105 transition-all ease-in-out duration-200"
            >
              Logout
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        {!username && (
          <DropdownMenuItem className="flex items-center justify-between text-xs">
            <small>No Account Yet?</small>
            <Link
              href={"/auth/register"}
              className="uppercase font-bold underline  "
            >
              register here
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
