import {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
     const [entries, setEntries] = useState([]);

     useEffect(() => {
          axios.get("http://127.0.0.1:8000/index")
               .then((response) => {
                    setEntries(response.data)
               })
               .catch((error) => {
                    console.log(error.message)
               })
     }, []);

     return ( 
          <div className="list">
          <h1>List</h1>
               {entries.map((entry) => {
                    return (
                         <div className="id" key={entry.id}>
                              <Card>
                                   <CardMedia
                                        component="img"
                                        height="140"
                                        image={entry.art}
                                        // alt="green iguana"
                                   />

                                   <CardContent>
                                        <h2 className="title">{entry.title}</h2>
                                        <h3 className="artist">{entry.artist}</h3>
                                        <p className="blog">{entry.blog}</p>
                                        <p className="date">{entry.date}</p>
                                   </CardContent>

                                   <CardActions>
                                        <Link 
                                             to={`/detail/${entry.id}`}
                                             state={{ stateId: entry.id}} // <-- state prop
                                        >
                                             <Button variant="contained">
                                                  View
                                             </Button>
                                        </Link>
                                        
                                   </CardActions>
                              </Card>
                         </div>
                    )
               })}
          </div>
     );
}

export default List