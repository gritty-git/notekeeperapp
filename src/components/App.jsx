import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
    var [notes,addToNotes] = useState([]);
    function buttonAdd(item){
        addToNotes(prevValue => {
            return([...prevValue, item])
        })
    }
    function deleteNote(id){
        addToNotes(prevValue => {
            return( prevValue.filter((noteItem, index) => {
                return index !== id;
            } ))
        })
    }
    
    return <div>
        <Header/>
        <CreateArea buttonClick={buttonAdd} />
        {notes.map( (item,index) => 
            <Note key={index} id={index} title={item.title} content={item.content} deleteButton={deleteNote} />
        )}
        
        <Footer/>
    </div>
}


export default App;