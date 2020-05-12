import React, { useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Dashboard from "../Dashboard";
import Copyright from "../../components/copyright";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

function PlaceholderComponent() {
  return <div>Placeholder</div>;
}

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Header */}
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />

      {/* Sidebar */}
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />

      {/* Main Content */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/orders" component={PlaceholderComponent} />
            <Route exact path="/customers" component={PlaceholderComponent} />
            <Route exact path="/reports" component={PlaceholderComponent} />
            <Route exact path="/integrations" component={PlaceholderComponent} />
          </Switch>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
