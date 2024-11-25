// import React from "react";
// import { Box, Typography, Grid, Card, Button, IconButton } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
// import { useNavigate } from "react-router-dom";
// import Rectangle from "../assets/Rectangle.png";
// import email from "../assets/email.png";

// const NewNewsletterPage = () => {
//   const dummyData = Array.from({ length: 6 }, (_, index) => ({
//     id: index + 1,
//     title: `Offer Ending Soon ${index + 1}`,
//     discount: "10% Discount",
//     description: "Grab your discount today on all purchases!",
//   }));

//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: "black",
//           minHeight: "100vh",
//           padding: "20px",
//         }}
//       >
//         <Typography
//           variant="h5"
//           style={{
//             marginBottom: "20px",
//             color: "white",
//             fontSize: "20px",
//             marginLeft: "40px",
//           }}
//         >
//           <img
//             src={email}
//             alt="Email Icon"
//             style={{ height: "20px", width: "20px", marginRight: "10px" }}
//           />
//           Newsletter Management → New
//         </Typography>

//         <Box
//           style={{
//             padding: "20px",
//             backgroundColor: "#121212",
//             color: "white",
//             border: "1px solid gray",
//             width: "90%",
//             margin: "0 auto",
//             borderRadius: "10px",
//           }}
//         >
//           <Typography
//             variant="h6"
//             style={{
//               marginBottom: "20px",
//               color: "white",
//               fontSize: "18px",
//               borderBottom: "1px solid gray",
//               paddingBottom: "10px",
//               width: "100vw",
//               maxWidth: "70.3vw",
//               marginLeft: "-20px",
//             }}
//           >
//             <span style={{ marginLeft: "25px" }}> Newsletter Layout</span>
//             <Button
//               variant="contained"
//               startIcon={<ImportExportIcon />}
//               style={{
//                 backgroundColor: "#1d1d1d",
//                 color: "white",
//                 fontWeight: "bold",
//                 borderRadius: "10px",
//                 marginLeft: "750px",
//               }}
//             >
//               Import
//             </Button>
//           </Typography>

//           <Grid container spacing={3}>
//             {dummyData.map((newsletter) => (
//               <Grid item xs={12} sm={6} md={4} key={newsletter.id}>
//                 <Card
//                   style={{
//                     backgroundColor: "#1d1d1d",
//                     borderRadius: "10px",
//                     overflow: "hidden",
//                     position: "relative",
//                   }}
//                   className="newsletter-card"
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <img
//                       src={Rectangle}
//                       alt="Newsletter"
//                       style={{
//                         width: "100%",
//                         height: "auto",
//                         transition: "transform 0.3s ease",
//                         objectFit: "cover",
//                       }}
//                       className="card-image"
//                     />
//                     <div
//                       style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "0",
//                         width: "100%",
//                         height: "50%",
//                         color: "white",
//                         opacity: 1,
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "start",
//                         justifyContent: "center",
//                         transition: "opacity 0.3s ease",
//                         marginTop: "70px",
//                       }}
//                       className="hover-content"
//                     >
//                       <div
//                         style={{
//                           background:
//                             "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
//                           width: "500px",
//                         }}
//                         className="hover-content"
//                       >
//                         <Typography
//                           variant="h6"
//                           style={{
//                             fontWeight: "bold",
//                             marginLeft: "10px",
//                           }}
//                           className="hover-content"
//                         >
//                           {newsletter.title}
//                         </Typography>
//                         {/* <Typography style={{ fontSize: "14px", color: "#ff9800" }} className="hover-content">
//                         {newsletter.discount}
//                       </Typography> */}
//                         <Typography
//                           style={{
//                             fontSize: "12px",
//                             lineHeight: "1.4",
//                             marginBottom: "10px",
//                             marginLeft: "10px",
//                           }}
//                           className="hover-content"
//                         >
//                           {newsletter.description}
//                         </Typography>
//                         <Box display="flex" gap="10px" marginBottom="40px">
//                           <Button
//                             variant="contained"
//                             style={{
//                               backgroundColor: "#fff",
//                               color: "black",
//                               fontSize: "12px",
//                               marginLeft: "10px",
//                               borderRadius: "10px",
//                             }}
//                             className="hover-content"
//                           >
//                             Create
//                           </Button>
//                           <Button
//                             variant="outlined"
//                             style={{
//                               color: "white",
//                               fontSize: "12px",
//                               backgroundColor: "black",
//                               borderRadius: "10px",
//                             }}
//                             className="hover-content"
//                           >
//                             Preview
//                           </Button>
//                         </Box>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </div>
//       <style>
//         {`
//           .newsletter-card:hover .card-image {
//             transform: scale(1.05);
//           }

//           .newsletter-card:hover .hover-content {
//             opacity: 1;
//           }

//           .hover-content {
//             opacity: 0;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default NewNewsletterPage;

import React from "react";
import { Box, Typography, Grid, Card, Button } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { useNavigate } from "react-router-dom";
import Rectangle from "../assets/Rectangle.png";
import email from "../assets/email.png";

const NewNewsletterPage = () => {
  const dummyData = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Offer Ending Soon ${index + 1}`,
    description: "Grab your discount today on all purchases!",
    image: Rectangle,
  }));

  const navigate = useNavigate();

  const handleCreateClick = (newsletter) => {
    navigate(`/preview/${newsletter.id}`, { state: { newsletter } });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Typography
          variant="h5"
          style={{
            marginBottom: "20px",
            color: "white",
            fontSize: "20px",
            marginLeft: "40px",
          }}
        >
          <img
            src={email}
            alt="Email Icon"
            style={{ height: "20px", width: "20px", marginRight: "10px" }}
          />
          Newsletter Management → New
        </Typography>

        <Box
          style={{
            padding: "20px",
            backgroundColor: "#121212",
            color: "white",
            border: "1px solid gray",
            width: "90%",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              marginBottom: "20px",
              color: "white",
              fontSize: "18px",
              borderBottom: "1px solid gray",
              paddingBottom: "10px",
              width: "100vw",
              maxWidth: "70.3vw",
              marginLeft: "-20px",
            }}
          >
            <span style={{ marginLeft: "25px" }}> Newsletter Layout</span>
            <Button
              variant="contained"
              startIcon={<ImportExportIcon />}
              style={{
                backgroundColor: "#1d1d1d",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                marginLeft: "750px",
              }}
            >
              Import
            </Button>
          </Typography>

          <Grid container spacing={3}>
            {dummyData.map((newsletter) => (
              <Grid item xs={12} sm={6} md={4} key={newsletter.id}>
                <Card
                  style={{
                    backgroundColor: "#1d1d1d",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  className="newsletter-card"
                >
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={newsletter.image}
                      alt="Newsletter"
                      style={{
                        width: "100%",
                        height: "auto",
                        transition: "transform 0.3s ease",
                        objectFit: "cover",
                      }}
                      className="card-image"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        width: "100%",
                        height: "50%",
                        color: "white",
                        opacity: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        transition: "opacity 0.3s ease",
                        marginTop: "70px",
                      }}
                      className="hover-content"
                    >
                      <div
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          width: "500px",
                        }}
                        className="hover-content"
                      >
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "bold",
                            marginLeft: "10px",
                          }}
                          className="hover-content"
                        >
                          {newsletter.title}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "12px",
                            lineHeight: "1.4",
                            marginBottom: "10px",
                            marginLeft: "10px",
                          }}
                          className="hover-content"
                        >
                          {newsletter.description}
                        </Typography>
                        <Box display="flex" gap="10px" marginBottom="40px">
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#fff",
                              color: "black",
                              fontSize: "12px",
                              marginLeft: "10px",
                              borderRadius: "10px",
                            }}
                            className="hover-content"
                            onClick={() => handleCreateClick(newsletter)}
                          >
                            Create
                          </Button>
                              <Button
                            variant="outlined"
                            style={{
                              color: "white",
                              fontSize: "12px",
                              backgroundColor: "black",
                              borderRadius: "10px",
                            }}
                            className="hover-content"
                          >
                            Preview
                          </Button>
                        </Box>
                      </div>
                    </div>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <style>
        {`
          .newsletter-card:hover .card-image {
            transform: scale(1.05);
          }

          .newsletter-card:hover .hover-content {
            opacity: 1;
          }

          .hover-content {
            opacity: 0;
          }
        `}
      </style>
    </>
  );
};

export default NewNewsletterPage;
