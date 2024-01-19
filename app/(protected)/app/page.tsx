import { signOut } from "@/auth";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button
          type='submit'
          className='px-4 py-2 bg-red-500 text-white rounded-lg'
        >
          Keluar
        </button>
      </form>
    </div>
  );
};

export default DashboardPage;
