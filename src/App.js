import logo from './assets/huxli_logo.svg';
import './App.css';
import {Paper,Typography} from '@mui/material';
import React, { useState } from 'react';
import File1 from './File1.js';
import File2 from './File2.js';

function App() {
  const [hover, setHover] = useState(false);  // State to handle hover
  const [hover2, setHover2] = useState(false);  // State to handle hover
  const [hover3, setHover3] = useState(false);  // State to handle hover
  const [hover4, setHover4] = useState(false);  // State to handle hover
  const [hover5, setHover5] = useState(false);  // State to handle hover
  const [hover6, setHover6] = useState(false);  // State to handle hover

  return (
    <div>
      {/* <FilePractice/> */}
      <File1/>
      {/* <File2/> */}
    </div>


  );
}

export default App;
