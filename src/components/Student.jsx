import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";
const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

export function Student(props) {
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

  const { classes } = props;
  return (
    <Paper className={classes.padding}>
      <div className={classes.margin}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                fullWidth
                autoFocus
                inputRef={register({ required: true })}
                helperText={errors.firstName && "First Name required"}
                error={errors.firstName && true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth
                required
                inputRef={register({ required: true })}
                helperText={errors.lasttName && "Last Name required"}
                error={errors.lastName && true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                fullWidth
                required
                inputRef={register({ required: true })}
                helperText={errors.email && "Email required"}
                error={errors.email && true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField id="age" label="Age" type="text" fullWidth />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              style={{ textTransform: "none" }}
            >
              Save
            </Button>
          </Grid>
        </form>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Student);
