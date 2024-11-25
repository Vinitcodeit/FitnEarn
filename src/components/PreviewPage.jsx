import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button,Typography } from "@mui/material";
import email from "../assets/email.png";

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { newsletter } = location.state || {};
  

  if (!newsletter) {
    return (
      <Box
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <h1>No Newsletter Found</h1>
      </Box>
    );
  }

  return (
    <>
    <div style={{ backgroundColor:"black", border:"1px solid black"}}>
    <Typography
          variant="h5"
          style={{
            marginBottom: "30px",
            color: "white",
            fontSize: "20px",
            marginLeft: "40px",
            marginTop:"20px"

          }}
        >
          <img
            src={email}
            alt="Email Icon"
            style={{ height: "20px", width: "20px", marginRight: "10px" }}
          />
          <span style={{marginRight:"500px"}}>Newsletter Management → New → Layout</span>
        </Typography>
    </div>
        <div style={{backgroundColor:"black", height:"110vh" ,}}>
        <Box
      style={{
        backgroundColor: "black",
        color: "white",
        height:"100vh",
        padding: "19px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
         border:"1px solid gray",
         width:"70vw",
         marginLeft:"30px",
         borderRadius:"10px",
      }}
    >
    

      <div style={{border:"1px solid gray", marginBottom:"40px", paddingTop:"20px", height:"60px", width:"100vw", maxWidth:"72.5vw", borderTop:"none", borderRight:"none", borderLeft:"none", marginTop:"-20px" }}>
      <Button
        variant="outlined"
        style={{
          color: "white",
          borderColor: "white",
          marginBottom: "22px",
          marginRight:"600px", 
          marginLeft:"24px"
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      </div>
      <img
        src={newsletter.image}
        alt={newsletter.title}
        style={{
          maxWidth: "100%",
          height: "500px",
          
          borderRadius: "10px",
        }}
      />
    </Box>
        </div>
    </>
  );
};

export default PreviewPage;
