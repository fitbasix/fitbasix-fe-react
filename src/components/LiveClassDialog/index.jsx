import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid, MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { postDialog } from "../../api/services";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mr: 2, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function LiveClassDialog({
  open,
  setOpen,

  title,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    data.formType = "JoinClass";
    console.log("FORM SUBMIT", data);
    const response = await postDialog(data);

    if (response?.resStr == "success") {
      console.log("SUCCESSFULL");
      setOpen(false);
    }
  };

  const handleClose = (e, reason) => {
    if (reason && reason == "backdropClick") return;

    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {title}
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            {" "}
            <Grid container>
              <Grid item md={12}>
                <Grid container spacing={3}>
                  <Grid item md={12}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      {...register("name")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <TextField
                      id="outlined-basic"
                      label="Mobile no."
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      {...register("number")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <TextField
                      id="outlined-basic"
                      type="email"
                      label="Email-Id"
                      style={{ width: "80%", borderRadius: "40px" }}
                      variant="outlined"
                      {...register("email")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <Select
                      displayEmpty={true}
                      style={{
                        width: "80%",
                        color: "#111",
                        backgroundColor: "#fff",
                      }}
                      {...register("workOutType")}
                    >
                      <MenuItem disabled>Type of Workout</MenuItem>
                      <MenuItem value={"Personal"}>Personal</MenuItem>
                      <MenuItem value={"Yoga"}>Yoga</MenuItem>
                      <MenuItem value={"Diet"}>Diet</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              type="submit"
              sx={{ backgroundColor: "#49AD50", color: "#fff" }}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
