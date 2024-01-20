import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./CardWrapper";

export const ErrorForm = () => {
  return (
    <CardWrapper
      headerLabel='Uh oh!'
      backButtonHref='/login'
      backButtonLabel='Kembali ke halaman login'
    >
      <div className='flex justify-center items-center gap-2'>
        <ExclamationTriangleIcon className='w-6 h-6 text-red-500' />
        <p>Terjadi kesalahan saat mengirim data. Silahkan coba lagi.</p>
      </div>
    </CardWrapper>
  );
};
