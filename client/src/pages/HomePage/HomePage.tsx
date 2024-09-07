import { Box, Typography } from "@mui/material";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        fontFamily: 'monospace',
        textAlign: "center",
        flexDirection: "column",
        color: "white",
        backgroundColor: "black",
        height: "100vh",
        gap:'50px'
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Products 24
      </Typography>
      <Typography variant="h5">
        Your one-stop shop for all your product needs, from design to delivery.
        Products24 is more than just a manufacturer, it is a partner in your
        product journey.
      </Typography>
      <Typography variant="h6">
        Products24 specializes in designing and manufacturing a wide range of
        products for you, your pet and your home & office needs. Products24 can
        create it with high-quality materials such as acrylic, metal, stainless
        steel, and plastic. Products24 also offers services such as laser
        cutting, custom product design, and manufacturing for both small and
        large-scale projects. Products24 has a team of creative and skilled
        professionals who can conceptualize, design, and manufacture in-house
        products that are innovative and functional. Products24 aims to provide
        customers with products that are durable, good looking and affordable.
        If you are looking for a company that can help you with any product
        idea, look no further than Products24.
      </Typography>

      <Typography variant="h4" fontWeight="bold">
        Work under construction. Stay tunned!!!! &#128512;
      </Typography>
    </Box>
  );
}

export default HomePage;
