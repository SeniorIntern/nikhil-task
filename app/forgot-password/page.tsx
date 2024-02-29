'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <form
        className="w-[450px] rounded-[20px] border border-[var(--primary-gray)] bg-white pb-[45px] pl-[48px] pr-[50px] pt-[39px]"
        onSubmit={(e) => {
          e.preventDefault();
          router.push('/change-password');
        }}
      >
        <div className="mb-[46px] flex flex-col items-center gap-[17px]">
          <Image alt="Your Logo" src={Logo} width={184} height={50} />
          <p className="text-[20px] font-bold text-[#2A3E8F]">
            Forgot your Password?
          </p>
        </div>

        <div className="mb-[36px] grid gap-[7px]">
          <Label labelContent="Email" htmlFor="reset-email" />
          <Input id="login-email" />
        </div>

        <div className="grid gap-[14px]">
          <Button buttonContent="Reset my password" type="submit" />
          <span className="text-center text-[14px]">
            Already have an account?&nbsp;
            <Link href="/" className="text-[var(--primary-blue)]">
              Login{' '}
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
}
