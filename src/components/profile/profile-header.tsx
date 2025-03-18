"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, BellOff, Edit } from "lucide-react";
import { useState } from "react";
import { UserType } from "@/types/user-type";
import { Skeleton } from "../ui/skeleton";

interface ProfileHeaderProps {
  user: UserType;
}

export function ProfileHeader({ user }: Readonly<ProfileHeaderProps>) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const displayName = `${user?.given_name ?? ""} ${user?.family_name ?? ""}`.trim() || "User";
  const avatarFallback = user?.given_name?.charAt(0).toUpperCase() ?? "?";

  if (!user) {
    return (
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
          <Skeleton className="h-32 w-32 border-4 border-background" />
          <div className="flex-1 pt-4 md:pt-0">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
        <div className="mt-8">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Cover Image (Placeholder for now) */}
      <div className="h-48 md:h-64 w-full bg-muted overflow-hidden">
        <img src={"/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative -mt-16 md:-mt-24 mb-8 flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
          {/* Avatar */}
          <div className="z-10">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={user?.picture ?? ""} alt={displayName} />
              <AvatarFallback className="text-4xl">{avatarFallback}</AvatarFallback>
            </Avatar>
          </div>

          {/* User Info */}
          <div className="flex-1 pt-4 md:pt-0">
            <h1 className="text-2xl md:text-3xl font-bold">{displayName}</h1>
            <p className="text-muted-foreground">{user?.email ?? "No email available"}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4 md:mt-0 self-end">
            <Button
              variant={isFollowing ? "destructive" : "default"}
              size="sm"
              onClick={toggleFollow}
              className="rounded-full"
            >
              {isFollowing ? (
                <>
                  <BellOff className="mr-2 h-4 w-4" />
                  <p className="text-black font-semibold">Following</p>
                </>
              ) : (
                <>
                  <Bell className="mr-2 h-4 w-4" />
                  <p
                    className={`${
                      isFollowing ? "text-white" : "text-muted-foreground"
                    } font-semibold`}
                  >
                    Follow
                  </p>
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Bio (Placeholder for now) */}
        <div className="mb-8">
          <p className="text-base max-w-2xl leading-relaxed">This user has no bio yet.</p>
          <p className="text-sm text-muted-foreground mt-2">Joined recently</p>
        </div>
      </div>
    </div>
  );
}
