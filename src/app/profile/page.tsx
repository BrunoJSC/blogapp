"use client";

import { ProfileHeader } from "@/components/profile/profile-header";
import { UserType } from "@/types/user-type";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function ProfilePage() {
  const { user } = useKindeAuth();
  return (
    <div className="min-h-screen bg-background">
      <ProfileHeader user={user as UserType} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {/* <ProfileContent user={mockUserData} articles={mockArticles} /> */}
          </div>
          <div className="w-full lg:w-1/3">{/* <ProfileSidebar user={mockUserData} /> */}</div>
        </div>
      </div>
    </div>
  );
}
