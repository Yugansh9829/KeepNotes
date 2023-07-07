// import react from 'react'
import React, {useState} from "react";

let contain = {
    margin : "6vh 30vw",
};

let w ={
    width : "40vw",
};

let s ={
    margin : "0 16vw",
};

const Add_Todo = (props) => {
    const [title , setTitle] =useState("");
    const [desc, setDesc]=useState("");

    const Submit=(e)=>{
        e.preventDefault();//it facilitates us by not reloading the page.
        if(!title || !desc){
            alert("Title or Description should not be empty");
        }
        else{
            props.add_todo(title,desc);
        }
        setDesc("");
        setTitle("");
    };
    return (
        <div style={contain}>
            <form onSubmit={Submit}>
                <div className="mx-5vw">
                    <label htmlFor="title" className="form-label">Enter Your Title</label>
                    <input type="title" style={w} value={title} onChange={(e)=>setTitle(e.target.value)}className="form-control mx-10vw" id="title" aria-describedby="title"/>
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="desc"   className="form-label">Enter desciption</label>
                    <input type="desc" style={w} value={desc} onChange={(e)=>setDesc(e.target.value)}  className="form-control" id="desc"/>
                </div>
                <div className="mb-3 form-check my-3">
                </div>
                <button type="submit" style={s} className="btn btn-success">Submit</button>
            </form>
        </div>
    
    )
}

export default Add_Todo
