'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <form
        className="w-[450px] rounded-md border border-[var(--primary-gray)] bg-white pb-[45px] pl-[48px] pr-[50px] pt-[39px]"
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
            <Label labelContent="Password" htmlFor="login-password" />
            <Input id="login-password" type="password" />
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
