import { useState } from "react";
import nav from "@/public/database/nav.json";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import DashboardLink from "../atoms/DashboardLink";
import LogoutModal from "../pages/LogOut"; 

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = nav;

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirm = () => {
    router.replace("/auth/signin");
    setShowLogoutModal(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 transform bg-white  transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-[270px] md:w-[20.5%] `}
      >
        <nav className="flex h-full flex-col gap-7 py-4">
          <div className="flex px-4">
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">LOGO</h1>
            </Link>
          </div>

          <ul className="vertical-scrollbar scrollbar-hidden flex h-full w-full flex-col gap-2 overflow-y-auto px-4">
            <div className="flex w-full flex-col gap-2">
              {navigation.map((item, index) => {
                const { route, label, icon, subMenu } = item;
                return (
                  <DashboardLink
                    key={index}
                    active={path === route}
                    route={route}
                    label={label}
                    heroIcon={icon}
                    handleClick={() => setIsSidebarOpen(false)}
                    subMenu={subMenu}
                  />
                );
              })}

              <DashboardLink
                route="#"
                label="Log out"
                heroIcon="ri-logout-circle-line"
                handleClick={() => setShowLogoutModal(true)}
              />
            </div>
          </ul>
        </nav>
      </div>

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
};

export default SideBar;
