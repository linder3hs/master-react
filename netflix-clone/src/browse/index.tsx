import { Avatar } from "@/common";
import { ManageProfile } from "./components";
import { UserParser } from "@/common/parser/user";

export default function BrowsePage() {
  const instance = new UserParser();
  const user = instance.getUser();

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          ¿Quién está viendo ahora?
        </h1>
        <div className="flex gap-10 flex-wrap justify-center px-20">
          <Avatar src="/images/item.png" alt="Linder" name="Linder" isHover />
        </div>
        <ManageProfile user={user} />
      </div>
    </>
  );
}
