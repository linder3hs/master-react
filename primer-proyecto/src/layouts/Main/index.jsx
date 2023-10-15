import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="p-6 max-w-md m-auto">
        <Outlet />
      </div>
    </>
  );
}
