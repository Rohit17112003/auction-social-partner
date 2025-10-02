"use client";
import Link from "next/link";
import { useState } from "react";

const DashboardLink = ({
  active = false,
  label = "Label",
  heroIcon,
  subMenu = [],
  route = "#",
  handleClick = () => {},
}) => {
  const [isSubMenOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-2">
      <li
        onClick={handleClick}
        className="flex w-full items-center justify-between"
      >
        <Link
          href={route}
          onClick={toggleSubMenu}
          className={`${
            active
              ? "bg-[#0078D417] text-[#0078D4]"
              : "bg-transparent text-[#4D525F]"
          } font-urbanist flex w-full flex-row items-center justify-between rounded-md px-3 py-2.5 transition-all duration-200 hover:bg-[#0078D417]/40 hover:text-[#0078D4]/70`}
        >
          <span className="flex items-center gap-1.5 text-[1.05rem]">
            <i className={`${heroIcon} ri-lg`}></i>
            <span className="font-urbanist font-semibold capitalize">
              {label}
            </span>
          </span>
          {subMenu.length > 0 && (
            <span className="text-lg font-semibold capitalize">
              <i
                className={` ${active ? "text-[#4D525F]" : "text-[#4D525F]"} ${
                  isSubMenOpen
                    ? "ri-arrow-down-s-line"
                    : "ri-arrow-right-s-line"
                } ri-lg`}
              ></i>
            </span>
          )}
        </Link>
      </li>
      {subMenu.length > 0 && (
        <div className={`flex-col gap-1 ${isSubMenOpen ? "flex" : "hidden"}`}>
          {subMenu.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="ms-4 flex w-[85%] flex-row items-center rounded-md px-3 py-2.5 text-[#4D525F] transition-all duration-200 hover:bg-[#0078D417]/40 hover:text-[#0078D4]/70"
            >
              <span>
                <i className={`${item.icon} ri-lg`}></i>
              </span>
              <span className="text-sm font-medium capitalize">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardLink;
