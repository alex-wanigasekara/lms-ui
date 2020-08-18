import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { Tab, ListItemIcon } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import StudentList from "./StudentList";
import Student from "./Student";
import { Route } from "react-router-dom";
import Login from "./Login";
import { Face, Group } from "@material-ui/icons";

const drawerWidth = 240;

function allyProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "area-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Student Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["students", "student"].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon> */}
                {index % 2 === 0 ? <Group /> : <Face />}
                {/* </ListItemIcon> */}
                {/* <ListItemText primary={text} /> */}
                <Tab label={text} {...allyProps(index)} href={"/" + text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Route path="/" exact component={StudentList} />
        <Route path="/students" component={StudentList} />
        <Route path="/student" component={Student} />
        <Route path="/login" component={Login} />
      </main>
    </div>
  );
}
