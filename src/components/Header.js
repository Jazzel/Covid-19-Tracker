import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: 'Pacifico',
    marginBottom: 5,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  searchBar: {
    paddingBottom: 5,
    marginTop:0,
    flex:1,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },formField:{
    flex:1,
    alignSelf: 'stretch',
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          align="center"
          className="styled-header"
        >
            Covid-19 Analysis
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
