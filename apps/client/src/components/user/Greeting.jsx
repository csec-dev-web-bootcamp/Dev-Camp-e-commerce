import React, { useEffect, useState } from "react";
import Loader from "../global/Loader";
import { getMe } from "@app/client/data/users";

export default function Greeting({ email = false, name = false }) {
  const [username, setUsername] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const namee = user();

  useEffect(function () {
    const userName = async () => {
      try {
        setIsLoading(true);
        const user = await getMe();
        setUsername(
          !user.error && name
            ? user.name
            : !user.error && email
            ? user.email
            : username
        );
        setIsLoading(false);
      } catch (error) {
        return { error };
      }
    };
    userName();
  }, []);
  return (
    <div>
      {name && (
        <span>
          {isLoading ? (
            <Loader size={40} color={"black"} />
          ) : (
            username && username.charAt(0).toUpperCase() + username.slice(1)
          )}
        </span>
      )}
      {email && (
        <span>
          {isLoading ? (
            <Loader size={40} color={"black"} />
          ) : (
            username && username.email
          )}
        </span>
      )}
    </div>
  );
}
