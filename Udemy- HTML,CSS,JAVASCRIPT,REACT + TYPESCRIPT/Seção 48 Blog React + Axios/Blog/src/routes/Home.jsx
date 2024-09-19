import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async() =>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

            const data = response.data;

            
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home
