import React, { Fragment, useState } from 'react'
import ListTodos from './ListTodos';

export default function InputTodo() {
    const [description, setDescription] = useState("");

    const  onSubmitForm = async e => {
       e.preventDefault();
       try {
        const body = { description };
        const response = await fetch("http://localhost:8000/api/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
       } catch (err) {
          console.error(err.message) 
       }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Tod List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={event => setDescription(event.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
           <div className="mt-3">
           <ListTodos/>
           </div>
        </Fragment>
    )
}
