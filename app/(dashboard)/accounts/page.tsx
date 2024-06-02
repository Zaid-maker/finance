'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { Plus } from 'lucide-react';
import React from 'react';
import { Payment, columns } from './columns';
import { DataTable } from '@/components/data-table';

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  // ...
];

const AccountsPage = () => {
  const newAccount = useNewAccount();

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">Accounts Page</CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className="mr-2 size-4" />
            Add new
          </Button>
        </CardHeader>
        <DataTable columns={columns} data={data} />
      </Card>
    </div>
  );
};

export default AccountsPage;
