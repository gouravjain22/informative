
import './App.css';
import Navbar from './Component/Navbar';
import Blog from './Component/Blog'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/Data/action';
import { useEffect,useRef } from 'react';

function App() {
  const effectRan = useRef(false);
  const dispatch = useDispatch()
  const getaction = ()=>{
    return dispatch(fetchData())
  }
  useEffect(()=>{
  if (effectRan.current === false) {
    getaction();
    effectRan.current = true;
  }
},[]);
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
