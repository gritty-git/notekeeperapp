import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
    var [item,updateItem] = useState({
        title : "",
        content : ""
    })
    var [clicked, changedClicked]= useState(false);
    function itemChange(event){
        var {value, name} = event.target;
        updateItem(prevValue => {
            return(
                {
                    ...prevValue,
                    [name] : value
                }
            )
        })

    }
    function clickedd(){
        changedClicked(true);
    }
  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder={clicked?"Title":"Add Note"} value={item.title} onChange={itemChange} onClick={clickedd} />
        {clicked ? <div>
        <textarea name="content" placeholder="Take a note..." rows="3" value={item.content} onChange={itemChange} />
        
        </div> : null
        }
        <Zoom in={clicked}>
        <Fab onClick={(event) => {
            props.buttonClick(item);
            updateItem({
                title : "",
                content : ""
            });
            event.preventDefault();
            }}>
            <AddIcon/>
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
