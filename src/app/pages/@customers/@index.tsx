import { DataTable, columns } from '@components/table';
import { useCustomer } from '@hooks/use-customer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/customers/')({
  component: Customers,
});

export default function Customers() {
  const { customers, isLoading, error } = useCustomer();
  return (
    <>
      {isLoading && <DataTable columns={columns} data={[]} />}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && <DataTable columns={columns} data={customers ?? []} />}
    </>
  );
}
