import axios from "axios";
import {useState} from "react"
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Create = () => {
     const current = new Date();
     const date = current.toUTCString();
     const [title, setTitle] = useState("");
     const [blog, setBlog] = useState("");
     const [artist, setArtist] = useState("")
     const [art, setArt] = useState("")
     
     function handleSubmit(e){
          e.preventDefault();

          const userData = {
               title: title,
               blog: blog,
               date: date,
               artist: artist,
               art: art,
          }

         

          axios.post("http://127.0.0.1:1500/create", userData)
               .then((response) => {
                    console.log(response.status)
                    console.log(response.data.token)
               }).catch((error) => {
                    if (error.response) {
                         console.log(error.response)
                         console.log("server responded");
                    } else if (error.request){
                         console.log("network error");
                    } else {
                         console.log(error)
               }
          })
     }
     return (
          <div className="create">
               <h1>Create</h1>
               <form onSubmit={handleSubmit}>
                    <div id="titleInput">
                         <TextField 
                              id="inputTitle" 
                              label="Title" 
                              variant="standard"
                              type="text"
                              value={title}
                              onChange={(e) => {
                                   setTitle(e.target.value)
                              }}
                         />
                    </div>
                    <div id="blogInput">
                         <TextField
                              id="outlined-textarea"
                              label="Blog"
                              placeholder="Enter Blog here"
                              multiline
                              value={blog}
                              onChange={(e) => {
                                   setBlog(e.target.value)
                              }}
                         />
                    </div>
                    <div id="artistInput">
                         <AccountCircle 
                              sx={{ color: 'action.active', mr: 1, my: 0.5 }} 
                         />
                         <TextField 
                              id="inputArtist" 
                              label="Artist" 
                              variant="standard" 
                              value={artist}
                              onChange={(e) => {
                                   setArtist(e.target.value)
                              }}
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
                              value={art}
                              onChange={(e) => {
                                   setArt(e.target.value)
                              }} 
                         /> 
                    </div>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                         <Button type="submit">Submit</Button>
                         <Button href="/list">Cancel</Button>
                    </ButtonGroup>
               </form>
          </div>
     )
}
 
export default Create;