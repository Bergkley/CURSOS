import { UserProps } from "../types/user";

import { useState } from "react";

import Search from "../components/Search";
import User from "../components/User";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async function (userName: string) {
    setUser(null);
    setIsLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    setIsLoading(false);

    if (res.status === 404) {
      toast.error("Usuário não encontrado");
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
    </div>
  );
};

export default Home;
