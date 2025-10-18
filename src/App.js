
import './App.css';
import Navbar from './Component/Navbar';
import Blog from './Component/Blog'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/Data/action';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const getaction = ()=>{
    return dispatch(fetchData())
  }
  useEffect(()=>{
    getaction();
  },[])
  return (
    <>
    <Navbar title="What is the reason"></Navbar>
    <div className='container'>
      <br></br>
    </div>
    <Blog ></Blog>
    </>
  );
}

export default App;
