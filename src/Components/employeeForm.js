import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import GroupIcon from "@mui/icons-material/Group";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { set, useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const theme = createTheme();

const EmployeeForm = ({
  open,
  handleClose,
  employeeList,
  setEmployeeList,
  handleOpen,
  editData, setEditData
}) => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});
  
React.useEffect(()=>{
if(editData)
{
  setValue('name',editData.name);
  setValue('company',editData.company);
  setValue('city',editData.city);
  setValue('state',editData.state);
}
},[editData])
  console.log("edit",editData)
  const onSubmit = async (data) => {
    let r = {
      ...data,
      action: (
        <Button
          onClick={() => {
            setEditData(data);
            handleOpen();
          }}
        >
          <EditIcon />
        </Button>
      ),
    };
    console.log("EmployeeForm => ", r);
    setEmployeeList([...employeeList, r]);
    handleClose();
  };
  // console.log("errors => ",errors);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <GroupIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Add Employee
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    fullWidth
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your Name.",
                      },
                    })}
                    id="name"
                    label="Name"
                    name="name"
                    error={!!errors?.name}
                    helperText={errors?.name?.message}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    {...register("company", {
                      required: "Please enter your Company.",
                    })}
                    name="company"
                    label="Company"
                    id="company"
                    error={!!errors?.company}
                    helperText={errors?.company?.message}
                    autoComplete="company"
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    {...register("city", {
                      required: "Please enter your City.",
                    })}
                    name="city"
                    label="City"
                    id="city"
                    error={!!errors?.city}
                    helperText={errors?.city?.message}
                    autoComplete="city"
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    {...register("state", {
                      required: "Please enter your State.",
                    })}
                    name="state"
                    label="State"
                    id="state"
                    error={!!errors?.state}
                    helperText={errors?.state?.message}
                    autoComplete="state"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    add
                  </Button>
                </form>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      </Modal>
    </div>
  );
};
export default EmployeeForm;
