import { CiSettings } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineDashboard, MdOutlineTerminal } from "react-icons/md";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="w-screen h-screen">
      <div className="flex">
        <div className="h-screen w-64 bg-sidebar">
          <div className="flex flex-col gap-1 p-5 border-b border-white/10">
            <h1 className="font-bold text-lg text-white">IARA</h1>
            <span className="text-[#8590a4]">Identity & Access</span>
          </div>
          <div className="flex flex-col py-5 gap-10">
            <div className="flex items-center gap-3 py-2 px-5 hover:bg-white/5 hover:cursor-pointer">
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#8590a4] text-xs font-semibold py-2 px-5">
                MANAGE
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 py-2 px-5 hover:bg-white/5 hover:cursor-pointer">
                  <FiUsers />
                  <span>Users</span>
                </div>
                <div className="flex items-center gap-3 py-2 px-5 hover:bg-white/5 hover:cursor-pointer">
                  <FaRegNewspaper />
                  <span>Profiles</span>
                </div>
                <div className="flex items-center gap-3 py-2 px-5 hover:bg-white/5 hover:cursor-pointer">
                  <LuShieldCheck />
                  <span>Roles</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#8590a4] text-xs font-semibold py-2 px-5">
                CONFIGURE
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 py-2 px-5 hover:bg-white/5 hover:cursor-pointer">
                  <MdOutlineTerminal />
                  <span>Applications</span>
                </div>
                <div className="flex items-center gap-3 py-2 px-5 hover:bg-white/5 hover:cursor-pointer">
                  <CiSettings />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
