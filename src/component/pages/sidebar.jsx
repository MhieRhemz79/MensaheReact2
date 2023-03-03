import * as React from "react";
import './sidebar.css';
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
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
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowIcon from "@mui/icons-material/ArrowBack";
import { Drafts } from '@mui/icons-material';
import { Chat } from "@mui/icons-material/";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
// import SendIcon from '@mui/icons-material/Send';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Cancel';

const drawerWidth = 240;

export default function Sidebar() {
  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();
  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/sign_in");
  };

  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleComposeClick = () => {
    setOpen(!open);
  };
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className="dash">
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
        DASHBOARD
          </Typography>
          <Typography variant="subtitle1" noWrap component="div">
            {currentTime}
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
        <Box sx={{ overflow: "auto" }}>
          <Divider />
          <List>
          <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={handleComposeClick}>
                <ListItemIcon>
                  <Chat />
                </ListItemIcon>
                <ListItemText primary="Compose" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Sent Items" />
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
              <ListItemButton onClick={userlogout}>
                <ListItemIcon>
                  <ArrowIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      

      <div className="content-area">
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        {/* DASHBOARD */}
       
        <Typography paragraph className={open ? "hidden" : ""}>
          <h1>Welcome to MENSAHE!</h1>
        </Typography>

        <Typography paragraph>
        {open && (
          <div>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Type here"
              style={{ width: "100%", marginTop: "10px" }}
              minRows={10}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <Button variant="contained" color="primary" startIcon={<EmailIcon />}>
                Send
              </Button>
              <div>
                <Button variant="contained" color="success">
                  Save
                </Button>
                <Button variant="contained" color="error" style={{ marginLeft: "10px" }} onClick={handleComposeClick}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        </Typography>
        
      </Box>
      </div>
    </Box>
  );
}
