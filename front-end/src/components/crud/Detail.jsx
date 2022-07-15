import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";
import {useState, useEffect} from "react";

const Detail = () => {
     const [entry, setEntry] = useState([])
     useEffect(() => {
          axios.get(`http://127.0.0.1:8000/detail/`)
          .then((response) => {
               setEntry(response.data)
          })
     }, [])
     return(
          <div className="detail">
               <h1>Detail</h1>
               <Divider/>
               <h2>Title</h2>
               <Divider/>
               <h3>Artist</h3>
               <Divider/>
               <p>Blog</p>
               <Divider/>
               
               <ButtonGroup>
                    <Button>Back</Button>
               </ButtonGroup>

          </div>
     )
}

export default Detail;