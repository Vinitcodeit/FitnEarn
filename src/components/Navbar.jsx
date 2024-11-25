// import React from "react";
// import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";

// const Navbar = () => {
//   return (
//     <AppBar position="static" style={{ backgroundColor: "#1d1d1d" }}>
//       <Toolbar style={{ justifyContent: "end" }}>
//         <IconButton>
//           <Avatar alt="User" src="/static/images/avatar/1.jpg" />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import { Menu as MenuIcon, Notifications as NotificationsIcon } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black", borderBottom:"1px solid gray" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Hamburger Menu Icon */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        {/* Right-side icons */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Notification Icon */}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          {/* User Avatar */}
          <IconButton>
            <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
