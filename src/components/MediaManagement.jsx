

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Pagination,
} from "@mui/material";
import { Edit as EditIcon, FilterList as FilterIcon } from "@mui/icons-material";
import email from '../assets/email.png'


const MediaManagement = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 8;

  const subscribers = [
    { id: 1, module: "NM1234", title: "New Offer", name: "Zoffi Khan", create: "05-02-2024 04:30 PM", upload: "05-02-2024 04:30 PM", status: "Uploaded" },
    { id: 2, module: "NM1235", title: "Holiday Sale", name: "Amir Khan", create: "06-02-2024 03:20 PM", upload: "06-02-2024 03:20 PM", status: "Draft" },
    { id: 3, module: "NM1236", title: "Flash Sale", name: "Ayesha Rahman", create: "07-02-2024 02:15 PM", upload: "07-02-2024 02:15 PM", status: "Scheduled" },
    { id: 4, module: "NM1237", title: "Weekend Discount", name: "Rahul Verma", create: "08-02-2024 01:10 PM", upload: "08-02-2024 01:10 PM", status: "Cancelled" },
    { id: 5, module: "NM1238", title: "Loyalty Program", name: "Nina Kapoor", create: "09-02-2024 12:05 PM", upload: "09-02-2024 12:05 PM", status: "Uploaded" },
    { id: 6, module: "NM1239", title: "Birthday Offers", name: "Zain Malik", create: "10-02-2024 11:00 AM", upload: "10-02-2024 11:00 AM", status: "Draft" },
    { id: 7, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Scheduled" },
    { id: 8, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Uploaded" },
    { id: 9, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Uploaded" },
    { id: 10, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Cancelled" },
    { id: 11, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Draft" },
    { id: 12, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Scheduled" },
    { id: 13, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Scheduled" },
    { id: 14, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Scheduled" },
    { id: 15, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Scheduled" },
    { id: 16, module: "NM1240", title: "Winter Sale", name: "Farah Khan", create: "11-02-2024 10:00 AM", upload: "11-02-2024 10:00 AM", status: "Scheduled" },
  ];

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleEditClick = (subscriberId) => {
    navigate(`/newsletter-management/subscribers/${subscriberId}/edit`);
  };

  const paginatedSubscribers = subscribers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "black",
        color: "#fff",
        width: "100vw",
        maxWidth: "74vw",
        height: "100vh",
        maxHeight: "80vh",
      }}
    >
    
      <div>
        <h2 style={{ marginTop: "-30px", fontSize: "25px" }}><img src={email} alt="" style={{width:"18px",height:"18px", marginRight:"5px",}}  /><span>Newsletter Management → Subscribers</span></h2>
      </div>

      {/* Top Buttons */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="-35px"
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#1d1d1d",
            color: "white",
            borderRadius: "5px",
            width: "229px",
            marginLeft: "10px",
            marginTop: "-10px",
            height: "30px",
            fontSize:"11px",
            fontWeight:"500",
            marginBottom:"10px",
              marginTop:"-35px"
          }}
        >
          Action on selected rows →
        </Button>
        <Box display="flex" alignItems="center">
          
          <Button
            variant="contained"
            startIcon={<FilterIcon />}
            style={{
              backgroundColor: "#1d1d1d",
              color: "white",
              borderRadius: "5px",
              marginTop: "-3px",
              height: "30px",
              fontSize:"11px",
              fontWeight:"500",
              marginBottom:"10px",
              marginTop:"-35px"
            }}
          >
            Filter by →
          </Button>
          {/* <Button
            variant="contained"
            style={{
              backgroundColor: "#1d1d1d",
              color: "white",
              borderRadius: "5px",
              marginRight: "25px",
              marginTop: "-3px",
              height: "30px",
              marginLeft: "10px",
              fontSize:"11px",
              fontWeight:"500"
            }}
            onClick={() => navigate("/new-newsletter")}
          >
            New →
          </Button> */}
          <div style={{ padding: "35px", color: "#fff", }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#1d1d1d",
            color: "white",
            borderRadius: "5px",
            height:"30px",
            marginBottom:"10px",
              marginTop:"-35px",
               fontSize:"11px",
              fontWeight:"500",
          }}
          onClick={() => navigate("/new-newsletter")}
        >
          New →
        </Button>
      </Box>
    </div>
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "black",
          borderBottom: "1px solid #1d1d1d",
          marginTop: "-10px",
          borderRadius: "10px",
          width: "100%",
          margin: "0 auto",
          maxWidth:"80vw"
        }}
      >
        <Table style={{ borderCollapse: "collapse" }}>
          <TableHead style={{ backgroundColor: "#1d1d1d", color: "white",  width:'100vw', }}>
            <TableRow>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600", padding: "15px", }}>SELECT</TableCell>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600" }}>MODULE ID</TableCell>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600" }}>TITLE</TableCell>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600" }}>CREATED BY</TableCell>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600" }}>CREATED AT</TableCell>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600" }}>UPLOAD AT</TableCell>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600" }}>STATUS</TableCell>
              <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", fontWeight: "600", }}>DETAILS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedSubscribers.map((subscriber) => (
              <TableRow key={subscriber.id}  style={{ border: "1px solid #1d1d1d", height: "36px" }}>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", padding: "6px" }}>
                  <Checkbox color="primary" style={{border:"2px solid gray", borderRadius:"5px", height:"20px", width:"20px",marginLeft: "9px",}} />
                </TableCell>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", padding: "15px",  fontSize: "13px",}}>{subscriber.module}</TableCell>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", padding: "6px",  fontSize: "13px",}}>{subscriber.name}</TableCell>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", padding: "15px",  fontSize: "13px", }}>{subscriber.title}</TableCell>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", padding: "6px",  fontSize: "13px", }}>{subscriber.create}</TableCell>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", padding: "6px", fontSize: "13px", }}>{subscriber.upload}</TableCell>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d", padding: "6px",  fontSize: "13px",}}>
                  <Button
                    variant="contained"
                    style={{
                      color:
                        subscriber.status === "Uploaded"
                          ? "green"
                          : subscriber.status === "Draft"
                          ? "purple"
                          : subscriber.status === "Scheduled"
                          ? "blue"
                          : "red",
                      backgroundColor: "black",
                      border:
                        subscriber.status === "Uploaded"
                          ? "1px solid green"
                          : subscriber.status === "Draft"
                          ? "1px solid purple"
                          : subscriber.status === "Scheduled"
                          ? "1px solid blue"
                          : "1px solid red",
                      borderRadius: "10px",
                      height: "28px",
                      fontSize:"12px"
                      
                    }}
                  >
                    {subscriber.status}
                  </Button>
                </TableCell>
                <TableCell style={{ color: "white", borderBottom: "1px solid #1d1d1d",padding:"10px", }}>
                  <Button onClick={() => handleEditClick(subscriber.id)}>
                    <EditIcon style={{ color: "white",fontSize: "16px" }} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Bottom Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Typography style={{ color: "gray" }}>
          Showing {paginatedSubscribers.length} of {subscribers.length} Entries
        </Typography>
        <Pagination
          count={100}
          page={currentPage}
          onChange={handlePageChange}
          color="standard"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
            "& .Mui-selected": {
              backgroundColor: "#1d1d1d",
              color: "white",
              border:"1px solid #1d1d1d",
              borderRadius:"10px"
            },
          }}
        style={{border:"1px solid #1d1d1d", borderRadius:"10px", marginRight:"20px"}} />
      </Box>
    </div>
  );
};

export default MediaManagement;
