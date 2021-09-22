import axios from "axios";
import { useState, useEffect } from 'react'
import Posts from './components/Posts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function App() {

  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    
    const getPosts = async () => {
      try{

        const response = await axios.get('https://dummyapi.io/data/v1/user?limit=50',{
          headers: {
            'app-id': '613e64e2748b558d779ce190'
          }
        });
        console.log(response.data.data)
        setPosts(response.data.data);
        setStatus("idle");     

      }catch(error){
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <>
  {status === "loading" ?  <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> : <Posts posts={posts}/>}
    
    </>
  );
}

export default App;

