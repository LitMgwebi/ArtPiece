import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Update = () => {
     const current = new Date();
     const date = current.toGMTString();

     function handleSubmit(e){
          e.preventDefault();
     }
     return(
          <div className="update">
               <h1>Update</h1>
               <form action="/" method="POST" onSubmit={handleSubmit}>
                    <div id="blogInput">
                         <TextField
                              id="outlined-textarea"
                              label="Blog"
                              placeholder="Enter Blog here"
                              multiline
                         />
                    </div>
                    <div id="titleInput">
                         <TextField id="inputTitle" label="Title" variant="standard" />
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
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                         <Button type='submit'>Upload</Button>
                         <Button href="/">Cancel</Button>
                    </ButtonGroup>               
               </form>
          </div>
     );
}

export default Update;