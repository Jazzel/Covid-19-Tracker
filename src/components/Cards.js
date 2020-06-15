import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@material-ui/core";

import CountUp from "react-countup";
import "./Cards.css";
import InfectedIcon from "./../images/virus.png";
import RecoveredIcon from "./../images/coronavirus.png";
import DeathIcon from "./../images/death.png";

export const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!confirmed) {
    return <div className="loader styled-font">Loading ....</div>;
  }

  return (
    <Box >
      <Grid container className="container" spacing={2}>
        <Grid item component={Card} boxShadow={3} xs={12} md={3} className="card infected shadow-lg">
          <CardContent>
            <Grid container>
              <Grid item xs={9}>
                <Typography color="textSecondary" variant="h3" gutterBottom>
                  Infected
                </Typography>
                <Typography variant="h4">
                  <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    separator=","
                  ></CountUp>{" "}
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of active cases of COVID-19
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <img src={InfectedIcon} width="100%" alt="infected" />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered shadow-lg">
          <CardContent>
            <Grid container>
              <Grid xs={9}>
                <Typography color="textSecondary" variant="h3" gutterBottom>
                  Recovered
                </Typography>
                <Typography variant="h4">
                  <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.5}
                    separator=","
                  ></CountUp>{" "}
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of recoveries from COVID-19
                </Typography>
              </Grid>
              <Grid xs={3}>
                <img src={RecoveredIcon} width="100%" alt="infected" />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths shadow-lg">
          <CardContent>
            <Grid container>
              <Grid xs={9}>
                <Typography color="textSecondary" variant="h3" gutterBottom>
                  Deaths
                </Typography>
                <Typography variant="h4">
                  <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.5}
                    separator=","
                  ></CountUp>{" "}
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of deaths caused by COVID-19
                </Typography>
              </Grid>
              <Grid xs={3}>
                <img src={DeathIcon} width="100%" alt="infected" />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};
