import logo from './assets/huxli_logo.svg';
import './App.css';
import {Paper,Typography} from '@mui/material';
import React, { useState } from 'react';

function File1() {
  const [hover, setHover] = useState(false);  // State to handle hover
  const [hover2, setHover2] = useState(false);  // State to handle hover
  const [hover3, setHover3] = useState(false);  // State to handle hover
  const [hover4, setHover4] = useState(false);  // State to handle hover
  const [hover5, setHover5] = useState(false);  // State to handle hover
  const [hover6, setHover6] = useState(false);  // State to handle hover

  return (
    <div className="App" style={{
      background:"#ddddff",
      width:"100%",
      height:"15vh",
      marginTop:"0%",
      display:'flex',
      flexDirection:'column',
    }}>
      {/*color boarder */}
      <div style={{
        width:"100%",
        height:"1px",
        justifyContent:'center',
      }}/>
      {/*Huxli Logo */}
      <img src={logo}style={{
          width:"40px",
          height:"44px",
          marginLeft:"48%",
          marginTop:'10%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}/>
        {/*Huxli textBox */}
      <Typography style={{
          marginLeft:"0%",
          marginTop:"5%",
          display:"flex",
          fontSize:'40px',
          justifyContent:'center',
        }}>
          Huxli is in open beta
        </Typography>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",}}>
      {/*box1*/}
      <Paper
      onMouseEnter={() => setHover(true)}  // Set hover to true when mouse enters
      onMouseLeave={() => setHover(false)} // Set hover to false when mouse leaves
      style={{
        width:"458px",
        height:"123px",
        background: hover ? "#cccccc" : "#aaaaaa",  // Change background color on hover  
        marginTop:"8%",
        boxShadow: hover ? "4.5px 8px 3px 0px #444444": "4.5px 6px 3px 0px #444444",
        border:"1px solid #000000",
        justifyContent:"center",
        alignItems:"center",
        display:"flex", 
        flexDirection:"row",
        transform: hover ? "scale(1.025)" : "scale(1.0)",
        transition: "transform 0.3s ease",
      }}>
        {/*box1 circle*/}
        <Paper style={{
        width:"75px",
        height:"35px",
        background:"#aa00aa",
        marginLeft:"8%",
        marginTop:".25%",
        boxShadow:"4.5px 6px 3px 0px #444444",
        border:"1px solid #000000",
        justifyContent:"left",
        alignItems:"left",
        display:"flex", 
        flexDirection:"row",
        borderRadius:"100px"  
      }}>
        {/*Huxli Logo */}
        <img src={logo}style={{
          width:"80%",
          height:"80%",
          marginLeft:"10%",
        }}/>
        {/*box1 text */}
      </Paper>
        <Typography style={{
          marginLeft:"3%",
          display:"flex",
        }}>
          It may occasionally generate incorect or misleading information,or produce offensive or biased content.
        </Typography>

      </Paper>
      {/*row2 Left*/}
      <div style={{display:'flex',flexDirection:'row',paddingLeft:'5%',}}> 
        <Paper
        onMouseEnter={() => setHover2(true)}  // Set hover to true when mouse enters
        onMouseLeave={() => setHover2(false)} // Set hover to false when mouse leaves
        style={{
          width:"200px",
          height:"75px",
          background: hover2 ? "#cccccc" : "#aaaaaa",  // Change background color on hover  
          marginLeft:"0%",      
          marginTop:"4%",
          boxShadow: hover2 ? "4.5px 8px 3px 0px #444444": "4.5px 6px 3px 0px #444444",
          border:"1px solid #000000",
          justifyContent:"center",
          alignItems:"center",
          display:"flex", 
          flexDirection:"row",
          transform: hover2 ? "scale(1.025)" : "scale(1.0)",
          transition: "transform 0.3s ease",
          cursor:'Help',
        }}>
          <Typography style={{
            marginLeft:"5%",
            display:"flex",
            fontFamily:"Nunito",
          }}>
            Left
          </Typography>
        </Paper>
        {/*row2 Right */}
        <Paper
        onMouseEnter={() => setHover3(true)}  // Set hover to true when mouse enters
        onMouseLeave={() => setHover3(false)} // Set hover to false when mouse leaves
        style={{
          width:"200px",
          height:"75px",
          background: hover3 ? "#B0BAEC" : "#8600ff",  // Change background color on hover  
          marginLeft:"1%",      
          marginTop:"4%",
          boxShadow: hover3 ? "4.5px 8px 3px 0px #444444": "4.5px 6px 3px 0px #444444",
          border:"1px solid #000000",
          justifyContent:"center",
          alignItems:"center",
          display:"flex", 
          flexDirection:"row",
          transform: hover3? "scale(1.025)" : "scale(1.0)",
          transition: "transform 0.3s ease",
          cursor:'Crosshair',
        }}>
             <Typography style={{
            marginLeft:"8%",
            display:"flex",
            fontFamily:"Nunito",
          }}>
            Right
          </Typography>
          </Paper>
      </div>
      {/*box4 Green Text */}
      <Paper
      onMouseEnter={() => setHover4(true)}  // Set hover to true when mouse enters
      onMouseLeave={() => setHover4(false)} // Set hover to false when mouse leaves
      style={{
        width:"458px",
        height:"123px",
        background: hover4 ? "#cccccc" : "#C4ECB0",  // Change background color on hover  
        marginLeft:"0%",      
        marginTop:"2.5%",
        boxShadow: hover4 ? "4.5px 8px 3px 0px #444444": "4.5px 6px 3px 0px #444444",
        border:"1px solid #000000",
        justifyContent:"center",
        alignItems:"center",
        display:"flex", 
        flexDirection:"row",
        transform: hover4 ? "scale(1.025)" : "scale(1.0)",
        transition: "transform 0.3s ease",
        cursor:'not-allowed',
      }}>
       <Typography style={{
            marginLeft:"25%",
            display:"flex",
            fontFamily:"Nunito",
            fontSize:"18px",
          }}>
            Use it ethiclly. Huxli is a powerful tool for learning when used with the right intentions.
          </Typography>
        </Paper>
        {/*row5 Back*/}
      <div style={{display:'flex',flexDirection:'row',paddingLeft:'5%',}}> 
        <Paper
        onMouseEnter={() => setHover5(true)}  // Set hover to true when mouse enters
        onMouseLeave={() => setHover5(false)} // Set hover to false when mouse leaves
        style={{
          width:"115px",
          height:"40px",
          background: hover5 ? "#FFFFFF" : "#FFFFFF",  // Change background color on hover  
          marginLeft:"0%",      
          marginTop:"5%",
          boxShadow: hover5 ? "4.5px 8px 3px 0px #444444": "4.5px 6px 3px 0px #444444",
          border:"1px solid #000000",
          justifyContent:"center",
          alignItems:"center",
          display:"flex", 
          flexDirection:"row",
          transform: hover5 ? "scale(1.025)" : "scale(1.0)",
          transition: "transform 0.3s ease",
          cursor:'Help',
        }}>
          <Typography style={{
            marginLeft:"5%",
            display:"flex",
            fontFamily:"Nunito",
          }}>
            Back
          </Typography>
        </Paper>
        {/*row5 Start */}
        <Paper
        onMouseEnter={() => setHover6(true)}  // Set hover to true when mouse enters
        onMouseLeave={() => setHover6(false)} // Set hover to false when mouse leaves
        style={{
          width:"115px",
          height:"40px",
          background: hover6 ? "#C4ECB0" : "#C4ECB0",  // Change background color on hover  
          marginLeft:"0%",      
          marginTop:"5%",
          boxShadow: hover6 ? "4.5px 8px 3px 0px #444444": "4.5px 6px 3px 0px #444444",
          border:"1px solid #000000",
          justifyContent:"center",
          alignItems:"center",
          display:"flex", 
          flexDirection:"row",
          transform: hover6? "scale(1.025)" : "scale(1.0)",
          transition: "transform 0.3s ease",
          cursor:'Crosshair',
        }}>
             <Typography style={{
            marginLeft:"8%",
            display:"flex",
            fontFamily:"Nunito",
          }}>
            Start
          </Typography>
          </Paper>
      </div>
      </div>

    </div>
  );
}

export default File1;
