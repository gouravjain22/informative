
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
      const fetchData = async () => {
      try {
        const response = await fetch('https://informativedb.onrender.com/');
        const data = await response.json();
        console.log(data); // Process your API data here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
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
