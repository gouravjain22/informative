import Data from './data'
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from './Blog.styled';
import { useSelector } from 'react-redux';
export default function Blog() {
  const data = useSelector((state)=>state.data.data)
  return (
    <>
      {data?.length  > 0 ?  <div>
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
