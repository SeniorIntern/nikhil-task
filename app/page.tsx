'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import OpenEye from '@/public/eye.png';
import Logo from '@/public/logo.png';
import { EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <form
        className="w-[450px] rounded-[20px] border border-[var(--primary-gray)] bg-white pb-[45px] pl-[48px] pr-[50px] pt-[39px]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-[46px] flex flex-col items-center gap-[17px]">
          <Image alt="Your Logo" src={Logo} width={184} height={50} />
          <p className="text-[20px] font-bold text-[var(--text-blue)]">
            Log in to your account
          </p>
        </div>

        <div className="mb-[37px] grid gap-[22px]">
          <div className="grid gap-[7px]">
            <Label labelContent="Email" htmlFor="login-email" />
            <Input id="login-email" />
          </div>

          <div className="grid gap-[7px]">
            <Label
              labelContent="Password"
              htmlFor="login-password"
              className="w-full pr-[40px]"
            />
            <div className="relative">
              <Input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                className="w-full rounded-[10px] border border-[var(--primary-gray)] px-[9px] py-[18px]"
              />
              {showPassword ? (
                <Image
                  alt="Open eye"
                  src={OpenEye}
                  className="absolute right-[15px] top-[50%] translate-y-[-50%] cursor-pointer"
                  onClick={handleTogglePassword}
                />
              ) : (
                <EyeOff
                  size="18"
                  className="absolute right-[15px] top-[50%] translate-y-[-50%] cursor-pointer"
                  onClick={handleTogglePassword}
                />
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-[14px]">
          <Button buttonContent="Sign in" />
          <Link
            href="/forgot-password"
            className="text-center text-[14px] text-[var(--primary-blue)]"
          >
            Forgot your password?
          </Link>
        </div>
      </form>
    </main>
  );
}
