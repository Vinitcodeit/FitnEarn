

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

const NewsLetterManagement = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 8;

  const subscribers = [
    { id: 1, name: "Lokesh Yadav", email: "abc@gmail.com", status: "Active" },
    { id: 2, name: "Chutki", email: "abc@gmail.com", status: "Active" },
    { id: 3, name: "Zoffi Khan", email: "abc@gmail.com", status: "Active" },
    { id: 4, name: "Nikita Jain", email: "abc@gmail.com", status: "Inactive" },
    { id: 5, name: "Vidya Shet", email: "abc@gmail.com", status: "Inactive" },
    { id: 6, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 7, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 8, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 9, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 10, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 11, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 12, name: "Vidushi Pal", email: "abc@gmail.com", status: "Inactive" },
    { id: 13, name: "Vidushi Pal", email: "abc@gmail.com", status: "Inactive" },
    { id: 14, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 15, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
    { id: 16, name: "Vidushi Pal", email: "abc@gmail.com", status: "Active" },
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
        <h2 style={{ marginTop: "-30px", fontSize: "20px" }}>
          Newsletter Management → Subscribers
        </h2>
      </div>

      {/* Top Buttons */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="20px"
      >
        {/* Left Button */}
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
            fontWeight:"500"
          }}
        >
          Action on selected rows →
        </Button>

        {/* Right Buttons */}
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
              marginRight:"30px"
            }}
          >
            Filter by →
          </Button>
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
        }}
      >
        <Table style={{ borderCollapse: "collapse" }}>
          <TableHead style={{ backgroundColor: "#1d1d1d", color: "white" }}>
            <TableRow>
              {["Select", "User Name", "Email ID", "Status", "Actions"].map(
                (header) => (
                  <TableCell
                    key={header}
                    style={{
                      color: "white",
                      borderBottom: "1px solid #1d1d1d",
                      fontWeight: "600",
                      padding: "15px",
                    }}
                  >
                    {header}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedSubscribers.map((subscriber) => (
              <TableRow
                key={subscriber.id}
                style={{ border: "1px solid #1d1d1d", height: "36px" }}
              >
                <TableCell style={{ borderBottom: "1px solid #1d1d1d", padding: "6px" }}>
                  <Checkbox
                    color="primary"
                    style={{
                      border: "2px solid gray",
                      borderRadius: "5px",
                      height: "20px",
                      width: "20px",
                      marginLeft: "9px",
                    }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    borderBottom: "1px solid #1d1d1d",
                    padding: "15px",
                    fontSize: "13px",
                  }}
                >
                  {subscriber.name}
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    borderBottom: "1px solid #1d1d1d",
                    padding: "6px",
                    fontSize: "12px",
                  }}
                >
                  {subscriber.email}
                </TableCell>
                <TableCell style={{ borderBottom: "1px solid #1d1d1d", padding: "6px" }}>
                  <Button
                    variant="contained"
                    style={{
                      color:
                        subscriber.status === "Draft"
                          ? "purple"
                          : subscriber.status === "Scheduled"
                          ? "blue"
                          : subscriber.status === "Active"
                          ? "green"
                          : "red",
                      backgroundColor: "black",
                      border:
                        subscriber.status === "Draft"
                          ? "1px solid purple"
                          : subscriber.status === "Scheduled"
                          ? "1px solid blue"
                          : subscriber.status === "Active"
                          ? "1px solid green"
                          : "1px solid red",
                      borderRadius: "10px",
                      height: "28px",
                      fontSize: "12px",
                    }}
                  >
                    {subscriber.status}
                  </Button>
                </TableCell>
                <TableCell style={{ borderBottom: "1px solid #1d1d1d", padding: "6px", }}>
                  <Button onClick={() => handleEditClick(subscriber.id)}>
                    <EditIcon style={{ color: "white", fontSize: "16px" }} />
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
          style={{
            border: "1px solid #1d1d1d",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        />
      </Box>
    </div>
  );
};

export default NewsLetterManagement;

