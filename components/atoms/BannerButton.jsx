"use client";
import Link from "next/link";

const BannerButton = ({ label, route, title }) => {
  return (
    <div className="bg-lightyellow text-light flex w-full items-center md:gap-6 gap-3 rounded-xl p-4 md:p-5">
      <Link href={route}>
        <i className="ri-arrow-left-line ri-lg"></i>
      </Link>
      <div>
        <p className="text-lg font-semibold md:text-xl">{label}</p>
        <p className="text-sm font-medium tracking-wide md:text-[0.9rem] md:pr-80">{title}</p>
      </div>
    </div>
  );
};

export default BannerButton;
