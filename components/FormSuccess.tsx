import { CheckIcon } from "@radix-ui/react-icons";

type FormSuccessProps = {
  message?: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className='bg-emerald-500/15 p-2 rounded-md flex items-center gap-x-2 text-[13px] text-emerald-500 max-w-[350px]'>
      <CheckIcon className='h-4 w-4' />
      <span>{message}</span>
    </div>
  );
};
