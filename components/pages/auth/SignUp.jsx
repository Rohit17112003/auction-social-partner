"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useState } from "react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
  
  return (
    <section className="h-auto bg-gradient-to-b from-[#FDF3A4] to-[#E7AF0E]">
      <div className="flex flex-col items-center gap-1 pt-4">
        <Image
          className="h-32 w-32 bg-cover"
          src="/image/icon/trangle.svg"
          alt="triangle"
          width={100}
          height={100}
        />
        <p className="mt-1 text-xl font-medium tracking-wide">
          Winning Bids, Helping Hands.
        </p>
        <h2 className="text-2xl font-bold uppercase">vendor sign in</h2>
      </div>
      <form
        className="mx-auto grid gap-x-20 gap-y-6 px-5 py-10 md:w-8/12 lg:grid-cols-2"
        action=""
      >
        <Input
          type="text"
          name="vendorName"
          placeholder="Vendor Name"
          icon="ri-user-3-line"
        />
        <Input
          type="text"
          name="managerName"
          placeholder="Manager/Owner Name"
          icon="ri-user-settings-line"
        />
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Number"
          icon="ri-phone-line"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          icon="ri-mail-line"
        />
        <Input
          type="text"
          name="aadhar"
          placeholder="Aadhar No."
          icon="ri-id-card-line"
        />
        <Input
          type="text"
          name="pan"
          placeholder="PAN No."
          icon="ri-profile-line"
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          icon="ri-map-pin-line"
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          icon="ri-home-4-line"
        />
        <Input
          type="text"
          name="category"
          placeholder="Category"
          icon="ri-list-check-line"
        />
        <Input
          type="text"
          name="bankName"
          placeholder="Bank Name"
          icon="ri-bank-line"
        />
        <Input
          type="text"
          name="bankAccountNumber"
          placeholder="Bank No."
          icon="ri-bank-card-line"
        />
        <Input
          type="text"
          name="ifsc"
          placeholder="IFSC Code"
          icon="ri-qr-scan-2-line"
        />
        <Input
          type="text"
          name="gst"
          placeholder="GST No."
          icon="ri-file-text-line"
        />
        <Input
          type="text"
          name="referralCode"
          placeholder="Referral Code ex-VBG_543"
          icon="ri-refund-2-line"
        />
      <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                icon="ri-lock-line"
                className="pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400 text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
              </button>
            </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1" />
          <p className="text-[0.9rem]">
            I have read and accept the{" "}
            <span className="text-primary">Terms</span> and{" "}
            <span className="text-primary">Privacy Policy</span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 md:justify-start">
          <Link href="/" className="block">
            <Button
              style="w-36 lg:col-span-2 bg-white text-text text-[1rem]"
              label="Sign Up"
            />
          </Link>
          <Link
            href="/auth/signin"
            className="hover:text-primary cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
