import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return <div>Profiel</div>;
};

export default ProfilePage;
