import React from "react";
import { useParams } from "react-router-dom";
import { TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserDetailsForm = () => {
  const { subscriberId } = useParams(); // Get the subscriber ID from the route params

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "black",
          maxHeight: "90vh",
          marginTop: "-15px",
        }}
      >
        <h3 style={{ margin: "20px 0 30px 80px" , color: "white", fontWeight: "700", paddingTop:"20px" }}>
          Newsletter Management → Subscribers → User Details
        </h3>
        <div
          style={{
            padding: "20px",
            color: "#fff",
            border: "1px solid gray",
            borderRadius: "8px",
            height: "100vh",
            maxHeight: "67vh",
            width: "100vw",
            maxWidth: "72vw",
            marginLeft: "20px",
            backgroundColor: "black",
            marginTop:"40px",
          }}
        >
          <h3
            style={{
              borderBottom: "1px solid gray",
              width: "100vw",
              maxWidth: "73.3vw",
              marginBottom: "10px",
              padding: "10px 0 10px 20px",
              marginLeft: "-20px",
              display:"flex",
              justifyContent: "space-between",
              marginTop:"5px",
            }}
          >
            User Details
            <MoreHorizIcon style={{color:"white", marginRight:"60px"}} />
          </h3>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "400px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  justifyContent: "start",
                  display: "flex",
                  marginLeft: "5px",
                }}
              >
                <label
                  style={{ width: "100px", fontSize: "18px", marginTop: "5px" }}
                >
                  User Name :
                </label>
                <input
                  style={{
                    color: "white",
                    marginLeft: "10px",
                    backgroundColor: "#1d1d1d",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    width: "200px",
                    padding: "8px",
                  }}
                  variant="outlined"
                  defaultValue="Nikita Jain"
                />
              </div>
              <div
                style={{
                  justifyContent: "end",
                  display: "flex",
                  marginLeft: "350px",
                  gap: "10px",
                }}
              >
                <label
                  style={{ width: "90px", fontSize: "18px", marginTop: "5px" }}
                >
                  E-mail ID :
                </label>
                <input
                  style={{
                    color: "white",
                    backgroundColor: "#1d1d1d",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    width: "200px",
                    padding: "5px",
                  }}
                  variant="outlined"
                  defaultValue="abc@email.com"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "right",
                gap: "40px",
                marginTop: "250px",
                marginLeft: "900px",
              }}
              variant="contained"
              color="black"
            >
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "30px",
                  height: "30px",
                }}
              >
                Edit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetailsForm;
