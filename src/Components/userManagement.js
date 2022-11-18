import * as React from 'react';
import { Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EmployeeForm from './employeeForm';
const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "city",
     label: "City",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "state",
     label: "State",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
        name: "action",
        label: "Action",
        options: {
         filter: true,
         sort: false,
        }
       },
   ];

// const data = [
//   {name:"Joe James", company:"Test Corp", city:"Yonkers", state:"NY"},
//   {name:"John Walsh",company:"Test Corp", city: "Hartford",state: "CT"},
//   {name:"Bob Herm", company:"Test Corp",  city:"Tampa",state: "FL"},
//   {name:"James Houston",company:"Test Corp",  city:"Dallas", state:"TX"},
// ];


const options = {
  filterType: "checkbox",
};

const UserManagement = (propd) => {
    const [employeeList,setEmployeeList]=React.useState([])
    const [open, setOpen] = React.useState(false);
    const [editData, setEditData] = React.useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Typography variant="h2" textAlign={"center"} gutterBottom>
        Employee Management
      </Typography>
      <MUIDataTable
        title={"Employee List"}
        data={employeeList}
        columns={columns}
        options={options}
      />

      <Fab color="primary" aria-label="add" style={{ position: "absolute",right:"60px"}} >
        <AddIcon onClick={handleOpen}/>
      </Fab>
      {open&&<EmployeeForm open={open} editData={editData} setEditData={setEditData} handleClose={handleClose} handleOpen={handleOpen} employeeList={employeeList} setEmployeeList={setEmployeeList}/>}
    </>
  );
};

export default UserManagement;
