import * as React from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";


const List = () => {
     // const [artPieces, setNewArt] = useState(null)

     // useEffect(() => {
     //      ListEverything()
     // }, [])

     // function ListEverything() {
     //      axios({
     //           method: "GET",
     //           url:"/index"
     //      }).then((res) => {
     //           const data = res.data
     //           setNewArt(data)
     //      }).catch((err) => {
     //           console.log(err.response);
     //           console.log(err.response.status);
     //           console.log(err.response.headers)
     //      })
     // }
     const current = new Date();
     const date = current.toGMTString();;

     return(
          <div className="list">
          <h1>List</h1>
               <Card sx={{maxWidth: 345}}>
                    <CardMedia
                         component="img"
                         height="140"
                         // image="/static/images/cards/contemplative-reptile.jpg"
                         // alt="green iguana"
                    />

                    <CardContent>
                         <h2>Title</h2>
                         <h3>Artist</h3>
                         <p>Blog</p>
                    </CardContent>

                    <CardActions>
                         <Button>View</Button>
                    </CardActions>
               </Card>
          </div>
     );
}

export default List;