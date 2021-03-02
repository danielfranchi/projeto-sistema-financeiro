import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Redirect } from "react-router-dom";

import useStyles from "./style";

const Header = () => {

  const classes = useStyles();

  const [finance, setFinance] = React.useState(false)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
        <Typography variant="h6" color="inherit" noWrap className={classes.header}>
            Moedas
          </Typography>

          <Typography variant="h6" color="inherit" noWrap>
            <span onClick={() => setFinance(true)}>{"Financeiro"}</span>
          </Typography>
          
        </Toolbar>
      </AppBar>

      {finance ? <Redirect to="/financa" /> : null}
    </React.Fragment>
  );
};

export default Header;
