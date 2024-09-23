import  { useState } from 'react'
import Search from '../components/Search';

import {UserProps} from '../types/user';
import User from '../components/User';


function Home() {
    const [user,setUser] = useState<UserProps | null>(null);
    
    const loadUser = async (username: string) => {
        const res = await fetch(`https://api.github.com/users/${username}`);

        const data = await res.json();

        const {avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
        setUser(userData);
    }

  return (
    <div>
      <Search  loadUser={loadUser}/>
       {user && <User {...user}/>  }	
      </div>
  )
}

export default Home