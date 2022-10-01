import React,{useEffect,useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch,useSelector } from 'react-redux';
import { deleteCity, loadCities } from '../redux/action';
import { sort } from '../redux/actionType';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useNavigate } from "react-router-dom";
import "./Home.css";

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:"end",
  },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
      marginTop:40,
      minWidth: 800,
    },
  });

 

const HomeData = () => {
    const classes = useStyles();
    const buttonSty = useButtonStyles();
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const {cities} = useSelector(state => state.data);

    console.log("city-allin", cities);

    const [filter,setFilter] = useState("");
   


    

    useEffect(()=> {
        dispatch(loadCities())

    },[]);

    const handleDelete = (id) => {
      if(window.confirm("Are You Surely Delete This.....?")){
         dispatch(deleteCity(id))
      }
   
     }

  return (
    
    <div>
      <h1 style={{margin:"30px 40%", color:"#3f56a8"}}>Teacher's List</h1>
      <div style={{alignItems:"center",marginTop:"30px"}}>
        <input type="text" placeholder='Filter by name' className='search-box' style={{marginRight:"40px",height:"34px", width:"160px"}} onChange={e => {
          // dispatch(filter(e.target.value));
          setFilter((e.target.value).toLowerCase())
        }}/>
      <Button color="primary" variant="contained" onClick={()=> navigate("/admin_add_teacher")}>Add Data</Button>
      <select style={{marginLeft:"40px",height:"34px", width:"160px"}} onChange={(e) => {
          dispatch(sort(e.target.value));
      }}>
        <option value="">---</option>
        <option value="id">Sort by Id</option>
        <option value="city">Sort by Name</option>
        <option value="country">Sort by Salary</option>
      </select>
      <Button color="secondary" variant="contained" style={{padding:"10px 30px", marginLeft:"90%", marginBottom:"2.5%", marginTop:"-32px"}} onClick={()=> navigate("/")}>Back</Button>
      </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">id</StyledTableCell>
            <StyledTableCell align="center">Salary</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Skills</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { cities && cities.filter(ci => ci.city.toLowerCase().includes(filter)).map((elem) => (
            <StyledTableRow key={elem.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {elem.id}
              </StyledTableCell>
              <StyledTableCell align="center">{elem.country}</StyledTableCell>
              <StyledTableCell align="right">{elem.city}</StyledTableCell>
              <StyledTableCell align="right">{elem.population}</StyledTableCell>
              <div className={buttonSty.root}>
              <div style={{marginLeft:"100px"}}>
              <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button color="primary" style={{marginRight:"10px"}} onClick={()=> navigate(`/admin_home/edit/${elem.id}`)}>Edit</Button>
                <Button color="secondary" onClick={()=> handleDelete(elem.id)}>Delete</Button>
                </ButtonGroup>
                </div>
              </div>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  )
}

export default HomeData