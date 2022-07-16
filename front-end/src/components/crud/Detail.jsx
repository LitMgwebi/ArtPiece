import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {useLocation} from "react-router";

const Detail = () => {
     const [entry, setEntry] = useState([]);
     const location = useLocation();
     const id = location.state.stateId
     
     useEffect(() => {
          axios.get(`http://127.0.0.1:8000/detail/${id}`)
          .then((response) => {
               setEntry(response.data)
          }).catch((error) => {
               console.log(error.message)
          });
     }, [id]) 


     return(
          <div className="detail">
               <h1>Detail</h1>
               <Divider/>
               <h2>{entry.title}</h2>
               <Divider/>
               <h3>{entry.artist}</h3>
               <Divider/>
               <p>{entry.blog}</p>
               <Divider/>
               
               <ButtonGroup>
                    <Button>Back</Button>
                    <Link 
                         to={`/update/${entry.id}`}
                         state={{ stateId: entry.id}}
                    >
                         <Button variant="contained">
                              Update
                         </Button>
                    </Link>
                    <Link 
                         to={`/delete/${entry.id}`}
                         state={{ stateId: entry.id}}
                    >
                         <Button variant="contained">
                              Delete
                         </Button>
                    </Link>
               </ButtonGroup>

          </div>
     )
}

export default Detail;