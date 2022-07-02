import * as React from "react";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import AccountCircle from '@material-ui/icons/AccountCircle';

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
               <FormControl>
                    <div id="blogInput">
                         <TextField
                              id="outlined-textarea"
                              label="Blog"
                              placeholder="Enter Blog here"
                              multiline
                         />
                    </div>
                    <div id="artistInput">
                         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                         <TextField id="inputArtist" label="Artist" variant="standard" />
                    </div>
                    <div id="dateInput">
                         <Input id="Date" readOnly='true' defaultValue={date}/>     
                    </div>
                    <div id="artUpload">
                         <Input accept="image/*" id="contained-button-file" multiple type="file" /> 
                    </div>
               </FormControl>
          </div>
     );
}

export default List;