import axios from 'axios'
import React, { useState } from 'react'

export const Todo = ({ data }) => {
    const [newTodo, setNewTodo] = useState('')
    const handleTodoChange = (event) => {
        setNewTodo(event.target.value)
    }
    const addNewData = () => {
        axios.post('http://localhost:4200/', {
            id: 5,
            item: newTodo
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const deleteNewData = () => {
        axios.delete('http://localhost:4200/5')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const updateData = () => {
        axios.put('http://localhost:4200/8')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <input type='text' value={newTodo} onChange={handleTodoChange}></input>
            <button onClick={addNewData}>addToDo</button>
            <button onClick={deleteNewData}>Delete Data</button>
            <button onClick={updateData}>update Data</button>
            {data.map((todos, index) => {
                return (
                    <div key={index} style={{display: 'flex'}}>
                        <div>{todos.id}</div>
                        <div>{todos.item}</div>
                    </div>
                )
            })}
        </div>
    )
}
