import * as React from 'react';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Delete = () => {
     return(
          <div className="delete">
               <h1>Delete</h1>
               <Divider/>
               <h2>Title</h2>
               <Divider/>
               <h3>Artist</h3>
               <Divider/>
               <p>Blog</p>
               <Divider/>
               
               <ButtonGroup>
                    <Button>Back</Button>
                    <Button>Delete</Button>
               </ButtonGroup>

          </div>
     )
};

export default Delete;