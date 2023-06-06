import CloseIcon from "@mui/icons-material/Close";
import { Grid, MenuItem, Select, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postDialog } from "../../api/services";
import "./styles.css";
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

export default function ReusableDialog({ open, setOpen, title }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //API CALL On SUBMIT
  const onSubmit = async (data) => {
    data.formType = "CallBack";

    const response = await postDialog(data);

    if (response?.resStr == "success") {
      navigate("/thankyou");
      setOpen(false);
    } else {
      navigate("/error");
    }
  };

  const handleClose = (e, reason) => {
    if (reason && reason == "backdropClick") return;

    setOpen(false);
  };

  return (
    <div >
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
        <form id="getACallback" onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            {" "}
            <Grid container>
              <Grid item md={12}>
                <Grid container spacing={3}>
                  <Grid item md={12}>
                    <TextField
                      className="textFieldMobile"
                      id="name"
                      label="Name"
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      {...register("name")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <TextField
                      className="textFieldMobile"
                      id="mobileNo"
                      label="Mobile no."
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      {...register("number")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <TextField
                      className="textFieldMobile"
                      id="email"
                      label="Email"
                      type="email"
                      style={{ width: "80%", borderRadius: "40px" }}
                      variant="outlined"
                      {...register("email")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <Select
                      className="textFieldMobile"
                      // label="Work out Type"
                      displayEmpty={true}
                      style={{
                        width: "80%",
                        color: "#111",
                        backgroundColor: "#fff",
                      }}
                      {...register("workOutType")}
                    >
                      <MenuItem disabled>Types of Training</MenuItem>
                      <MenuItem value={"Personal"}>Personal</MenuItem>
                      <MenuItem value={"Yoga"}>Yoga</MenuItem>
                      <MenuItem value={"Diet"}>Diet</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item md={12}>
                    <Select
                      // label="Preferred Time Slot for Callback"
                      displayEmpty={true}
                      style={{
                        width: "80%",
                        color: "#111",
                        backgroundColor: "#fff",
                      }}
                      {...register("timeSlot")}
                    >
                      <MenuItem disabled>Preferred Time Slot for Callback</MenuItem>
                      <MenuItem value={"Morning"}>Morning</MenuItem>
                      <MenuItem value={"Afternoon"}>Afternoon</MenuItem>
                      <MenuItem value={"Evening"}>Evening</MenuItem>
                      <MenuItem value={"Night"}>Night</MenuItem>
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
