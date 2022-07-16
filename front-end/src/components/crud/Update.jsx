import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {useState, useEffect} from "react";
import {useLocation} from "react-router";
import axios from "axios";

const Update = () => {
     const current = new Date();
     const date = current.toGMTString();
     const [entry, setEntry] = useState([])
     const location = useLocation();
     const id = location.state.stateId;

     useEffect(() => {
          axios.get(`http://127.0.0.1:8000/detail/${id}`)
          .then((response) => {
               setEntry(response.data)
               console.log(response.data)
          }).catch((error) => {
               console.log(error.message)
          })
     }, [id])

     function handleSubmit(e){
          e.preventDefault();
     }
     return ( 
          <div className="update">
               <h1>Update</h1>
               <form onSubmit={handleSubmit}>
                    <div id="blogInput">
                         <TextField
                              id="outlined-textarea"
                              label="Blog"
                              defaultValue={entry.blog}
                              multiline
                         />
                    </div>
                    <div id="titleInput">
                         <TextField 
                              id="inputTitle" 
                              label="Title" 
                              variant="standard"
                              defaultValue={entry.title}
                         />
                    </div>
                    <div id="artistInput">
                         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                         <TextField 
                              id="inputArtist" 
                              label="Artist" 
                              variant="standard"
                              defaultValue={entry.artist}
                         />
                    </div>
                    <div id="dateInput">
                         <Input 
                              id="Date" 
                              readOnly={true} 
                              defaultValue={date}
                         />     
                    </div>
                    <div id="artUpload">
                         <Input 
                              accept="image/*" 
                              id="contained-button-file" 
                              multiple 
                              type="file"
                              defaultValue={entry.art} 
                         /> 
                    </div>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                         <Button type='submit'>Upload</Button>
                         <Button href="/">Cancel</Button>
                    </ButtonGroup>               
               </form>
          </div>
     );
}

export default Update