import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";
// import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {useLocation} from "react-router";

const Delete = () => {
     const [entry, setEntry] = useState([]);
     const location = useLocation();
     const id = location.state.stateId;

     useEffect(() => {
          axios.get(`http://127.0.0.1:8000/detail/${id}`)
          .then((res) => {
               setEntry(res.data)
          }).catch((err) => {
               console.log(err.message)
          });
     }, [id])
     return ( 
          <div className="delete">
               <h1>Delete</h1>
               <Divider/>
               <h2>{entry.title}</h2>
               <Divider/>
               <h3>{entry.artist}</h3>
               <Divider/>
               <p>{entry.blog}</p>
               <Divider/>
               
               <ButtonGroup>
                    <Button>Back</Button>
                    <Button>Delete</Button>
               </ButtonGroup>

          </div>
     );
}

export default Delete;