"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { User, Settings, LayoutDashboard, Users, Library, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";

type UserType = {
  id?: string | null;
  given_name?: string | null;
  family_name?: string | null;
  picture?: string | null;
  email?: string | null;
};

export function DropMenu({ user }: Readonly<{ user: UserType }>) {
  const [loading, setLoading] = useState(false);
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
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer outline-none">
        <Avatar>
          <AvatarImage src={user.picture ?? ""} alt="User Avatar" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {user.given_name?.charAt(0).toUpperCase() ?? "?"}
            {user.family_name?.charAt(0)?.toUpperCase() ?? ""}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-2" align="end">
        <div className="flex flex-col space-y-1 p-2">
          <p className="text-sm font-medium leading-none">
            {user.given_name} {user.family_name}
          </p>
          <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="flex cursor-pointer items-center p-2 focus:bg-accent">
          <Link href="/profile">
            <User className="mr-2 size-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex cursor-pointer items-center p-2 focus:bg-accent">
          <Link href="/dashboard">
            <LayoutDashboard className="mr-2 size-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex cursor-pointer items-center p-2 focus:bg-accent">
          <Link href="/library">
            <Library className="mr-2 size-4" />
            <span>Library</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex cursor-pointer items-center p-2 focus:bg-accent">
          <Link href="/team">
            <Users className="mr-2 size-4" />
            <span>Team</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex cursor-pointer items-center p-2 focus:bg-accent">
          <Link href="/settings">
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-2" asChild>
          <LogoutLink className="w-full">
            <Button
              variant="destructive"
              onClick={handleLogout}
              disabled={loading}
              className="w-full justify-start text-white cursor-pointer hover:bg-destructive"
            >
              <LogOut className="mr-2 size-4 text-white" />
              Logout
            </Button>
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
