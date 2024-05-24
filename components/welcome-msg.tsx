'use client';

import { useUser } from '@clerk/nextjs';
import React from 'react';

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="mb-4 space-y-2">
      <h2 className="text-2xl font-medium text-white lg:text-4xl">
        Welcome Back{isLoaded ? ', ' : ' '}
        {user?.firstName} 👋
      </h2>
      <p className="text-sm text-[#89b6fd] lg:text-base">This is your Financial Overview Report</p>
    </div>
  );
};
