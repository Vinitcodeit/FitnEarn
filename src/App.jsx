// // import React from 'react'
// // import NewsletterManagement from './components/NewsLetterManagement'

// // const App = () => {
// //   return (
// //     <div>
// //      <NewsletterManagement />
// //     </div>
// //   )
// // }

// // export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import NewsLetterManagement from "./components/NewsLetterManagement";
// import CoachManagement from "./components/CoachManagement";
// import LiveSessionManagement from "./components/LiveSessionManagement";

// const App = () => {
//   return (
//     <Router>
//       <div style={{ display: "flex", height: "100vh" }}>
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <div style={{ flexGrow: 1, backgroundColor: "#121212" }}>
//           {/* Navbar */}
//           <Navbar />

//           {/* Routes */}
//           <Routes>
//             <Route path="/dashboard" element={<h2 style={{ padding: "20px", color: "#fff" }}>Dashboard</h2>} />
//             <Route path="/coach-management" element={<CoachManagement />} />
//             <Route path="/live-session-management" element={<LiveSessionManagement />} />
//             <Route path="/newsletter-management" element={<NewsLetterManagement />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NewsLetterManagement from "./components/NewsLetterManagement";
import UserDetailsForm from "./components/UserDetailsForm";
import CoachManagement from "./components/CoachManagement";
import LiveSessionManagement from "./components/LiveSessionManagement";
import MediaManagement from "./components/MediaManagement";
import NewNewsletterPage from "./components/NewNewsletterPage";
import PreviewPage from './components/PreviewPage'

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{ flexGrow: 1, backgroundColor: "#121212" }}>
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/dashboard" element={<h2 style={{ padding: "20px", color: "#fff" }}>Dashboard</h2>} />
            <Route path="/coach-management" element={<CoachManagement />} />
            <Route path="/live-session-management" element={<LiveSessionManagement />} />
            <Route path="/newsletter-management" element={<NewsLetterManagement />} />
            <Route path="/newsletter-management/subscribers/:subscriberId/edit" element={<UserDetailsForm />} />
            <Route path="/media-management" element={<MediaManagement />} />
            <Route path="/new-newsletter" element={<NewNewsletterPage />} />
            <Route path="/preview/:id" element={<PreviewPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
