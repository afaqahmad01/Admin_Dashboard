"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import List from "@mui/material/List";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 200;

function SideNav() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pages = ["Dashboard", "Posts", "Users", "Profile"];
  const path = usePathname();
  const trimmedPath = path.substring(1);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const icons = (index) => {
    if (index === 0) {
      return <SpaceDashboardRoundedIcon className="text-2xl" />;
    } else if (index === 1) {
      return <DynamicFeedRoundedIcon className="text-2xl" />;
    } else if (index === 2) {
      return <GroupRoundedIcon className="text-2xl" />;
    } else if (index === 3) {
      return <AccountCircleRoundedIcon className="text-2xl" />;
    }
  };
  const text1 = "LogOut";

  const drawer = (
    <div>
      <Toolbar className="bg-[#40A858]">
        <img
          src="https://i.imgur.com/ydoEMP4.png"
          alt="logo"
          width={50}
          height={50}
          className="-ml-3"
        />
        <Typography variant="h6" noWrap component="div" className="text-white">
          Flow Flicker
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {pages.map((text, index) => (
          <Link href={`/${text.toLocaleLowerCase().split(" ").join("")}`}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icons(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Link href="/">
          <ListItem key={text1} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={text1} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-[#40A858]">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default SideNav;
