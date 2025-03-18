"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { LoginLink, LogoutLink, RegisterLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { ArrowRightFromLine, User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { DropMenu } from "./drop-menu";

export function Header() {
  const [loading, setLoading] = useState(true);
  const { user } = useKindeAuth();

  const handleLogout = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="px-4 py-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">Blog</h1>
      </Link>

      {user ? (
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/dashboard"></Link>
            </li>
            <li>
              <ModeToggle />
            </li>
            <li>
              <DropMenu user={user} />
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Button className="gap-2 px-4" asChild>
                <LoginLink className="font-semibold">
                  <ArrowRightFromLine size={10} />
                  Login
                </LoginLink>
              </Button>
            </li>
            <li>
              <Button variant="outline" asChild>
                <RegisterLink className="font-semibold">Register</RegisterLink>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
