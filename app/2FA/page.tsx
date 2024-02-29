'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <form
        className="w-[450px] rounded-md border border-[var(--primary-gray)] bg-white pb-[45px] pl-[48px] pr-[50px] pt-[39px]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col items-center gap-[18px]">
          <p className="text-[24px] font-bold text-[var(--text-blue)]">
            Enter verification code
          </p>
          <p className="text-center text-[14px]">
            Check your authentication app and
            <br /> enter the digit code to verify.
          </p>
        </div>

        <div className="mb-[31px] mt-[37px] grid gap-[7px]">
          <Input
            id="otp"
            placeholder="Enter verification code"
            className="rounded-[10px] border border-[var(--primary-gray)] px-[9px] py-[18px] text-[16px]"
          />
        </div>

        <div className="grid gap-[10px]">
          <Button buttonContent="Verify" />
          <Button buttonContent="Cancel" variant="outline" />
          <Link
            href="/"
            className="mx-auto mt-[31px] text-center text-[14px] text-[var(--primary-blue)]"
          >
            Lost your device with an authenticator?
          </Link>
        </div>
      </form>
    </main>
  );
}
