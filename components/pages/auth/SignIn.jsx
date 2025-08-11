"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main>
      <section className="fixed grid h-screen w-full bg-gradient-to-b from-[#fff6a9c4] to-[#ecd8a2c4] lg:grid-cols-2">
        <div className="flex flex-col items-center gap-1 px-5 py-10">
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
          <h2 className="mb-3 text-2xl font-bold uppercase">vendor sign in</h2>

          <form className="space-y-4 lg:w-[70%] w-full">
            <Input type="text" name="name" placeholder="Name" icon="ri-user-line" />
            <Input type="text" name="number" placeholder="Number" icon="ri-phone-line" />
            <Input type="email" name="email" placeholder="Email" icon="ri-mail-line" />

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

            <div className="flex justify-between md:justify-end gap-4 items-center">
              <Link href="/auth/signup" className="hover:text-primary cursor-pointer">
                Sign Up
              </Link>

              <Link href="/" className="block">
                <Button
                  style="w-36 lg:col-span-2 bg-white text-text text-[1rem]"
                  label="Sign In"
                />
              </Link>
            </div>
          </form>
        </div>

        <div className="hidden h-screen items-center justify-center bg-gradient-to-b from-[#0078D4] to-[#3D48B7] lg:flex">
          <div className="relative h-[80%] w-[70%] rounded-xl border border-white/40 bg-white/30 p-10 backdrop-blur backdrop-brightness-95">
            <Image
              className="absolute bottom-16 -left-8 h-16 w-16 object-cover"
              src="/image/icon/lightning.png"
              alt="lightning"
              width={100}
              height={100}
            />
            <Image
              className="absolute right-0 bottom-0 h-[85%] object-cover"
              src="/image/man.png"
              alt="man"
              width={1200}
              height={1200}
            />
            <h2 className="w-[80%] text-3xl font-semibold text-white">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
