import { Header } from '@/components/header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="px-3 lg:px-14">{children}</div>;
    </>
  );
};

export default DashboardLayout;
