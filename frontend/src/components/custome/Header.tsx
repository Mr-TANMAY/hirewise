import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between shadow-md p-3 px-5">
      <img src="/logo.svg" alt="hirewise logo" height={100} width={100} />

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant={"outline"}>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className="bg-[#9f5bff] hover:bg-[#411184]">
            get started
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
