import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" alt="Logo" height={28} width={28} />
        <p className="ml-2.5 text-2xl font-semibold text-white ">Finance</p>
      </div>
    </Link>
  );
};
