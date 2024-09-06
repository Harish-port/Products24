import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error404Img from "../assets/images/error-404.png";
import WestIcon from "@mui/icons-material/West";
function Error404() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "lightgray",
        }}
      >
        <Stack spacing={3} sx={{ alignItems: "center", maxWidth: "md" }}>
          <Box>
            <Box
              component="img"
              alt="Under development"
              src={Error404Img}
              sx={{
                display: "inline-block",
                height: "auto",
                maxWidth: "100%",
                width: "100%",
                borderRadius: "15px",
              }}
            />
          </Box>
          {/* <Typography variant="h3" sx={{ textAlign: "center" }}>
            404: The page you are looking for isn&apos;t here
          </Typography> */}
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ textAlign: "center", color: "black" }}
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Button
            onClick={handleRedirect}
            startIcon={<WestIcon />}
            variant="contained"
          >
            Go back to home
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Error404;
