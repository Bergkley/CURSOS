import { userState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackBtn from '../components/BackBtn';

const Repos = () => {
    const { username } = useParams();

  return (
    <div>
        <BackBtn />
        Repos
    </div>
  )
}

export default Repos