import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Paper, withStyles, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

export function Student(props) {
  const classes = useStyles();

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const apiUrl = "http://localhost:8080/student";
    axios
      .post(apiUrl, data)
      .then((respc) => {
        alert("Data saved");
      })
      .catch((respc) => {
        alert("Data saving failed");
      });
  };

  const { classes1 } = props;
  return (
    <Paper className={classes1.padding}>
      <div className={classes1.margin}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
              autoFocus
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="lastName"
              label="LastName"
              type="text"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField id="age" label="Age" type="text" fullWidth required />
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            color="primary"
            style={{ textTransform: "none" }}
          >
            Save
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Student);
