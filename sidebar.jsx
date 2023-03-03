import * as React from "react";
import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

export default function Sidebar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [logindata, setLoginData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useNavigate();

  const todayDate = new Date().toLocaleDateString();

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/sign_in");
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Birthday();
  }, []);

  // const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <div>
          <span>Log In as:</span>
        </div>

        <Divider />

        {/* Sidebar Menu */}
        <List>
          {["Inbox", "Templates", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {["All mail", "Trash", "My Story"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List>
          {["Sign Out"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        {/* DASHBOARD */}
        <Typography paragraph>
          <h1>Welcome to MENSAHE!</h1>
        </Typography>
      </Box>
    </Box>
  );
}
