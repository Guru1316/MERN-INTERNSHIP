import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchSeriesData = async() => {
      const localData = localStorage.getItem("mySeriesData");
      if (localData) 
      {
        setData(JSON.parse(localData));
      } 
      else 
      {
        try
        {
          const response = await fetch("http://localhost:5173/SeriesData.json");
          const fetchData = await response.json();
          setData(fetchData);
          localStorage.setItem("mySeriesData", JSON.stringify(fetchData));
        }
        catch(err)
        {
          console.log(err);
        }}
      }
    fetchSeriesData();
  }, []);

  return (
    <div className='App'>
      <Header></Header>
      <Outlet context={{data, setData}}></Outlet>
    </div>
  )
}

export default App