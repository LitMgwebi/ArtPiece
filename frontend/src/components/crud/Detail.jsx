import * as React from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Detail = () => {
     return(
          <div className="detail">
               <h1>Detail</h1>
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
};

//todo Add the outputs for the schema
     //Blog (Texterea)
     //Artist
     //Date
     //Art (Use the a tag)

export default Detail;