import { useState } from 'react';
import TableComponent from "./components/TableComponent"
import ChartsComponent from "./components/ChartsComponent"
import CardComponent from './components/CardComponent';
import './App.css';

function App() {


  return (
    <>
      <>
        <div className="main-div">
          <div className='left-div'>
            <image src = "https://prowiz.io/wp-content/uploads/2024/02/ProWiz-Logo-e1708025671976.png.webp"/>
            <button>Dashbord</button>
            <div class="list">Camera view</div>
            <div class="list">Event Log</div>
          </div>
          <div className='right-div'>
            <div className='navbar'>
              KPI Tracker
            </div>
            <div className='container'>
              <CardComponent/>
              <ChartsComponent/>
              <TableComponent/>
            </div>
          </div>


        </div>
        </>
    </>
  )
}

export default App
