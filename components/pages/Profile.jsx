"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

const Profile = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <section className="font-poppins mx-auto max-w-6xl py-6">
      {/* Page Header */}
      <h1 className="text-dark font-urbanist mb-8 text-3xl font-bold">
        My Profile
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Sidebar Card */}
        <div className="bg-light flex flex-col items-center rounded-xl p-6 shadow-lg">
          {/* Profile Image */}
          <div className="relative">
            {image ? (
              <Image
                src={image}
                alt="Profile"
                width={140}
                height={140}
                className="border-primary h-36 w-36 rounded-full border-4 object-cover shadow-md"
              />
            ) : (
              <div className="border-extralightgray bg-lightgray text-secondary font-urbanist flex h-36 w-36 items-center justify-center rounded-full border-4 text-sm">
                Upload
              </div>
            )}
            {image && (
              <button
                onClick={removeImage}
                className="bg-red text-light absolute top-2 right-2 rounded-full p-1 shadow-md"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>

          {/* Upload Button */}
          <label className="bg-primary text-light hover:bg-tertiary font-plusjakarta mt-5 cursor-pointer rounded-md px-5 py-2 text-sm font-medium transition">
            Change Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Basic Info */}
          <div className="mt-6 text-center">
            <h2 className="text-dark font-urbanist text-xl font-semibold">
              Rohit Rana
            </h2>
            <p className="text-secondary font-nunito text-sm">
              Social Partner
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-light rounded-xl p-8 shadow-lg md:col-span-2">
          {/* Personal Info */}
          <h2 className="text-text border-extralightgray font-plusjakarta mb-6 border-b pb-3 text-xl font-semibold">
            Personal Information
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-secondary text-sm">Full Name</label>
              <input
                type="text"
                defaultValue="Rohit Rana"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-secondary text-sm">Email</label>
              <input
                type="email"
                defaultValue="rohit@example.com"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-secondary text-sm">Phone</label>
              <input
                type="text"
                defaultValue="+91 9876543210"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-secondary text-sm">Social Name</label>
              <input
                type="text"
                defaultValue="Cyberize Pvt Ltd"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
          </div>

          {/* Auction Info */}
          <h2 className="text-text border-extralightgray font-plusjakarta mt-8 mb-6 border-b pb-3 text-xl font-semibold">
            Auction Partner Information
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-secondary text-sm">Commission Rate</label>
              <input
                type="text"
                defaultValue="10%"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-secondary text-sm">Role</label>
              <input
                type="text"
                defaultValue="Social Partner"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-secondary text-sm">Joined Date</label>
              <input
                type="date"
                defaultValue="2024-01-15"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-secondary text-sm">Total Auctions</label>
              <input
                type="text"
                defaultValue="25"
                className="border-extralightgray focus:outline-primary font-nunito mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 flex justify-end">
            <button className="bg-green text-light hover:bg-darkgreen font-urbanist flex items-center gap-2 rounded-md px-8 py-3 font-medium shadow-md transition">
              <Pencil size={18} />
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
