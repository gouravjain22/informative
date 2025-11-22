import Data from './data'
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from './Blog.styled';
import { useSelector } from 'react-redux';
export default function Blog() {
  const data = useSelector((state)=>state.data.data)
  function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
  return (
    <>
      {data?.length  > 0 ?  <div>
            {
                shuffleArray(data)?.map((curData) =>{
                    return   <Data key={curData.id} {...curData}/>
                })
            }   
          
        </div>: <Container >
           <CircularProgress size="3rem" /></Container>}
    </> 
  )
}
