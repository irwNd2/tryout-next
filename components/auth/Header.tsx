export const Header = ({ label }: { label: string }) => {
  return (
    <div className='w-full flex flex-col gap-y-2 items-center'>
      <h1 className='text-3xl font-bold'>🔐Auth</h1>
      <p className='text-muted-background text-sm'>{label}</p>
    </div>
  );
};
