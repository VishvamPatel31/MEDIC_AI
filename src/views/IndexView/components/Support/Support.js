import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Avatar, Box, Button } from '@material-ui/core';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
  },
  avatar: {
    width: 180,
    height: 195,
    border: `4px solid ${theme.palette.background.paper}`,
    [theme.breakpoints.down('sm')]: {
      width: 120,
      height: 130,
    },
  },
  contentContainer: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  connectButton: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  logoContainer: {
    marginLeft: theme.spacing(77), // Adjust as needed
    marginTop: theme.spacing(-22.5), // Adjust as needed
  },
  logo: {
    width: 230,
    height: 'auto',
  },
}));

const AboutMe = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2} className={classes.avatarContainer}>
        <Grid item xs={12}>
          <SectionHeader title="Meet the Developer" align="center" disableGutter titleVariant="h2" />
        </Grid>
        <Grid item container alignItems="left" xs={12} data-aos="fade-up">
          <Box mr={isMd ? 4 : 0}>
            <Avatar
              className={classes.avatar}
              alt="Vishvam Patel"
              src="/assets/vish.jpeg" 
            />
          </Box>
          <Box className={classes.contentContainer}>
            <Typography variant="h2" color="primary" gutterBottom>
              Vishvam Patel
            </Typography>
            <Typography variant="h6" color="secondary" gutterBottom>
              2A Computer Engineering @ Uwaterloo
            </Typography>
            <Box className={classes.connectButton}>
              <Button variant="contained" color="primary" href="mailto:vj2patel@uwaterloo.ca">
                Connect via Email
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="https://www.linkedin.com/in/vishvam-patel-338539203/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: theme.spacing(2) }}
              >
                Connect on LinkedIn
              </Button>
            </Box>
          </Box>
          {isMd && (
            <Box className={classes.logoContainer}>
              <img
                src="/assets/waterloo.png" 
                alt="UWaterloo Logo"
                className={classes.logo}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string,
};

export default AboutMe;





