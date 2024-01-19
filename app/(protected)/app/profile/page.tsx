import { auth } from "@/auth";

const ProfilePage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Profile aa. Session: {JSON.stringify(session)}</h1>
    </div>
  );
};

export default ProfilePage;
