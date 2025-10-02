"use client";
import { useState } from "react";
import Header from "../organisms/Header";
import SideBar from "../organisms/SideBar";

export default function MainLayout({ children, pageTitle }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex flex-1 flex-col">
        <Header
          pageTitle={pageTitle}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="max-w-[100vw] flex-1 overflow-y-auto bg-gradient-to-b from-[#FFF6A9] to-[#ECD8A2] px-5 py-5 md:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
