import React ,{useState ,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { getCity, updateCity } from '../redux/action';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:50,
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

const EditCity = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const {id} = useParams();
  const {citie} = useSelector((state) => state.data );



  const [state,setState] = useState({
    id:"",
    country:"",
    city:"",
    population:"",

  });
  const [error , setError] = useState("");

  const {country,city,population} = state;


  useEffect(() => {
   dispatch(getCity(id))
  },[])

  useEffect(()=> {
      if(citie){
          setState({...citie})
      }

  },[citie])

  const handleInputChange = (e)=> {
  let {name,value} = e.target;
  setState({...state,[name]:value})
  }
  const handleSubmit = (e) => {
     e.preventDefault();
     if(!id || !country || !city || !population){
       setError("Please Fill All The Details..");
     }else{
       dispatch(updateCity(state,id));
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
  

    <h2 style={{marginLeft:"48px"}}>EDIT TEACHER</h2>
    {error ? <h3 style={{color:"red",fontSize:"17px"}}>{error}</h3> : null}

    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
    <TextField id="standard-basic" name="id" label="Id" value={id} type="number" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="country" label="Salary" value={country} type="number" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="city" label="City" value={city} type="text" onChange={handleInputChange} />
    <br/>
    <TextField id="standard-basic" name="population" label="Population" value={population} type="text" onChange={handleInputChange} />
    <br/>
    
    <Button 
    style={{width:"100px"}}
    color="primary" 
    variant="contained" 
    type="submit"
    >Update
    </Button>
  </form>
  </div>
  </div>
  )
}

export default EditCity