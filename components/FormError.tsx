import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type FormErrorProps = {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className='bg-destructive/15 p-2 rounded-md flex items-center gap-x-2 text-[13px] text-destructive max-w-[350px]'>
      <ExclamationTriangleIcon className='h-4 w-4' />
      <span>{message}</span>
    </div>
  );
};
