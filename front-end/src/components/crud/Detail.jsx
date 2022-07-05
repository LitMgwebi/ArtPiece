import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Detail = () => {
     return(
          <div className="detail">
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
               </ButtonGroup>

          </div>
     )
}

export default Detail;