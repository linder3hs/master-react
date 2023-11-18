import { Avatar, ProfileSupabase } from "@/common";
import { ManageProfile } from "./components";
import { user } from "@/common/parser/user";
import { getDataFromTable } from "@/lib/supabase/server";

export default async function BrowsePage() {
  const userData = user.getUser();

  const { error, data: profiles } = await getDataFromTable<ProfileSupabase>(
    "profiles",
    "user_id",
    userData.id
  );

  return (
    <>
      {error ? (
        <>
          <h1>{error.message}</h1>
        </>
      ) : (
        <>
          <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl">
              ¿Quién está viendo ahora?
            </h1>
            <div className="flex gap-10 flex-wrap justify-center px-20">
              {profiles?.map((profile) => (
                <Avatar
                  key={profile.id}
                  src={profile.avatar}
                  alt={profile.name}
                  name={profile.name}
                  isHover
                />
              ))}
            </div>
            <ManageProfile user={userData} />
          </div>
        </>
      )}
    </>
  );
}
