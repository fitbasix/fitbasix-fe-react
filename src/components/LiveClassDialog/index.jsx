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
import { useState } from "react";
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
  //Search Params String
  const [searchParams, setSearchParams] = useState(window.location.search);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    data.formType = "JoinClass";

    const response = await postDialog(data, searchParams);

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
        <form id="getLiveClass" onSubmit={handleSubmit(onSubmit)}>
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
                      required
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      {...register("name")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <TextField
                      id="mobileNo"
                      className="textFieldMobile"
                      label="Mobile no."
                      required
                      variant="outlined"
                      style={{ width: "80%", borderRadius: "40px" }}
                      {...register("number")}
                    />
                  </Grid>

                  <Grid item md={12}>
                    <TextField
                      id="email"
                      className="textFieldMobile"
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
                      className="textFieldMobile"
                      style={{
                        width: "80%",
                        color: "#111",
                        backgroundColor: "#fff",
                      }}
                      {...register("workOutType")}
                    >
                      <MenuItem disabled>Types of plan</MenuItem>
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
