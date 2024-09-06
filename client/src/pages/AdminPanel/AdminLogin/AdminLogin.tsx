import { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import "./AdminLogin.css";
import { Box } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   if (username.trim() && password.trim()) {
  //     setIsButtonDisabled(false);
  //   } else {
  //     setIsButtonDisabled(true);
  //   }
  // }, [username, password]);

  const handleLogin = () => {
    if (username === "test" && password === "test") {
      setError(false);
      setHelperText("Login Successfully");
      navigate("/dashboard");
    } else {
      setError(true);
      setHelperText("Incorrect username or password");
    }
  };

  return (
    <Box className="wrapper">
      <Form className="container" noValidate autoComplete="off">
        <Card className="card">
          <AccountCircleIcon sx={{fontSize:'80px',color:'black'}}/>
          <CardHeader className="header" title="Welcome Admin"/>
          <CardContent>
            <Box>
              <TextField
                error={error}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={helperText}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className="loginBtn"
              onClick={() => handleLogin()}
              // disabled={isButtonDisabled}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </Form>
    </Box>
  );
};

export default AdminLogin;
