import {useEffect, useState} from 'react'
import Data from './data'
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from './Blog.styled';

export default function Blog() {
const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://informativedb.onrender.com/informative');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
  return (
    <>
      {data?.length  == 0 ?  <div>
            {
                data?.map((curData) =>{
                    return   <Data key={curData.id} {...curData}/>
                })
            }   
          
        </div>: <Container >
           <CircularProgress size="3rem" /></Container>}
    </> 
  )
}
