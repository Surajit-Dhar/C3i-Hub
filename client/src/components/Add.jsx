import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCity } from '../redux/action';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:50,
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

const AddCity = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [state,setState] = useState({
    id:"",
    country:"",
    city:"",
    population:"",

  });
  const [error , setError] = useState("");

  const {id,country,city,population} = state;

  const handleInputChange = (e)=> {
  let {name,value} = e.target;
  setState({...state,[name]:value})
  }
  const handleSubmit = (e) => {
     e.preventDefault();
     if(!id || !country || !city || !population){
       setError("Please Fill All The Details..");
     }else{
       dispatch(addCity(state));
       navigate("/admin_home");
       setError("");
     }

  }

  return (
   <div>
    <Button 
    style={{width:"100px",margin:'40px 40px'}}
    color="secondary" 
    variant="contained"
    onClick={()=> navigate("/admin_home")}
    >Back
    </Button>
    <div style={{margin:"70px 40%"}}>
    

    <h2 style={{marginLeft:"48px"}}>ADD TEACHER</h2>
    {error ? <h3 style={{color:"red",fontSize:"17px", margin:"20px 58px"}}>{error}</h3> : null}

    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
    <TextField id="standard-basic" name="id" label="Id" value={id} type="number" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="country" label="Salary" value={country} type="number" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="city" label="Name" value={city} type="text" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="population" label="Skills" value={population} type="text" onChange={handleInputChange} />
    <br/>
    
    <Button 
    style={{width:"100px"}}
    color="primary" 
    variant="contained" 
    type="submit">Submit
    </Button>
  </form>
  </div>
  </div>
  )
}

export default AddCity