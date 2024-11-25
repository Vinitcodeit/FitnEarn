
// import React from "react";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   ListItemIcon,
//   Divider,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupIcon from "@mui/icons-material/Group";
// import LiveTvIcon from "@mui/icons-material/LiveTv";
// import EmailIcon from "@mui/icons-material/Email";
// import logo from "../assets/logo.png";
// import VideocamIcon from '@mui/icons-material/Videocam';
// import CollectionsIcon from '@mui/icons-material/Collections';
// import ImportContactsIcon from '@mui/icons-material/ImportContacts';
// import BackpackIcon from '@mui/icons-material/Backpack';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

// const Sidebar = () => {
//   // Add an 'icon' property to each link
//   const links = [
//     { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon style={{ color: "white" }} /> },
//     { name: "Coach Management", path: "/coach-management", icon: <GroupIcon style={{ color: "white" }} /> },
//     { name: "Live Session Management", path: "/live-session-management", icon: <LiveTvIcon style={{ color: "white" }} /> },
//     { name: "Newsletter Management", path: "/newsletter-management", icon: <EmailIcon style={{ color: "white" }} /> },
//     { name: "Workout video Management", path: "/video-management", icon: <VideocamIcon style={{ color: "white" }} /> },
//     { name: "Posts Management", path: "/posts-management", icon: <CollectionsIcon style={{ color: "white" }} /> },
//     { name: "Blog Management", path: "/blog-management", icon: <ImportContactsIcon style={{ color: "white" }} /> },
//     { name: "Booking Management", path: "/booking-management", icon: <BackpackIcon style={{ color: "white" }} /> },
//     { name: "Query", path: "/query", icon: <ContactMailIcon style={{ color: "white" }} /> },
//     { name: "Media Management", path: "/media-management", icon: <SubscriptionsIcon style={{ color: "white" }} /> },
//   ];

//   return (
//     <div
//       style={{
//         width: "310px",
//         backgroundColor: "black",
//         color: "white",
//         height: "100vh",
//         borderRight:"1px solid gray",

//       }}
//     >
//       <List>
//         {/* Logo Section */}
//         <Typography variant="h6" component="div" style={{ textAlign: "center", padding: "10px 137px 10px 0" }}>
//           <img src={logo} alt="Logo" style={{ height: "40px" }} />
//         </Typography>

//         {/* Sidebar Links */}
//         {links.map((link) => (
//           <React.Fragment key={link.name}>
//             <ListItem button component={Link} to={link.path} style={{ width:"100vw", maxWidth:"20vw",}}>
//               <ListItemIcon>
//                 {/* Render icon dynamically */}
//                 {link.icon}
//               </ListItemIcon>
//               <ListItemText primary={link.name} style={{ color: "white" }} />
//             </ListItem>
//             <Divider style={{ backgroundColor: "" }} />
//           </React.Fragment>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import EmailIcon from "@mui/icons-material/Email";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import BackpackIcon from "@mui/icons-material/Backpack";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null); // Track active link

  const links = [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon style={{ color: "white" }} /> },
    { name: "Coach Management", path: "/coach-management", icon: <GroupIcon style={{ color: "white" }} /> },
    { name: "Live Session Management", path: "/live-session-management", icon: <LiveTvIcon style={{ color: "white" }} /> },
    { name: "Newsletter Management", path: "/newsletter-management", icon: <EmailIcon style={{ color: "white" }} /> },
    { name: "Workout video Management", path: "/video-management", icon: <VideocamIcon style={{ color: "white" }} /> },
    { name: "Posts Management", path: "/posts-management", icon: <CollectionsIcon style={{ color: "white" }} /> },
    { name: "Blog Management", path: "/blog-management", icon: <ImportContactsIcon style={{ color: "white" }} /> },
    { name: "Booking Management", path: "/booking-management", icon: <BackpackIcon style={{ color: "white" }} /> },
    { name: "Query", path: "/query", icon: <ContactMailIcon style={{ color: "white" }} /> },
    { name: "Media Management", path: "/media-management", icon: <SubscriptionsIcon style={{ color: "white" }} /> },
  ];

  return (
    <div
      style={{
        width: "310px",
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        borderRight: "1px solid gray",
      }}
    >
      <List>
        {/* Logo Section */}
        <Typography
          variant="h6"
          component="div"
          style={{ textAlign: "center", padding: "10px 137px 10px 0" }}
        >
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </Typography>

        {/* Sidebar Links */}
        {links.map((link, index) => (
          <React.Fragment key={link.name}>
            <ListItem
              button
              component={Link}
              to={link.path}
              onClick={() => setActiveLink(index)} // Set the active link
              style={{
                backgroundColor: activeLink === index ? "#1d1d1d" : "transparent",
                width: "100vw",
                maxWidth: "20vw",
              }}
            >
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.name} style={{ color: "white" }} />
            </ListItem>
            <Divider style={{ backgroundColor: "" }} />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
