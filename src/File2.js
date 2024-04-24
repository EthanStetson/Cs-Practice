import logo from './assets/huxli_logo.svg' 

import {Paper,Typography} from '@mui/material';
import {React,useState} from 'react';

function File2() {
  return (
  // Huxli Top /
  <div style={{display:'flex',flexDirection:'row',}}>
        {/* Logo */}
        <img src={logo} style={{
          width:"40px",
          height:"43.6px",
          marginLeft:"2%",
          marginTop:"01%",
          justifyContent:'left',
          alignItems:'left',
          display:"flex",
          flexDirection:"row"
        }}/>
    <Typography style={{
      width:"45px",
      height:"25px",
      marginLeft:"8%",
      marginTop:"0%",
      display:"flex",
      justifyContent:"left",
      fontSize:"28px",
      fontStyle:"Nunito",
      background:"2A2A2A",
    }}>
      Huxli   
    </Typography>
  </div>
      );
    }
  
  export default File2;