'use client';

import { useGetAccounts } from '@/features/accounts/api/use-get-accounts';
import React from 'react';

export default function Home() {
  const accountsQuery = useGetAccounts();

  return (
    <div>{accountsQuery.data?.map((account) => <div key={account.id}>{account.name}</div>)}</div>
  );
}
