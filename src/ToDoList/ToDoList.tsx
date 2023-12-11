import React, { useState } from 'react';
import './ToDoList.css';

const TaskList = () => {
    const [toDo, setToDo] = useState('');
    // specifying the itmes are strings
    const [items, setItems] = useState<string[]>([]);
    // 'ChangeEvent' makes sure the list gets updated everytime an item is added
    const handleUI = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // .trim checks to make sure empty string is not inputted
        if (toDo.trim() !== '') {
            setItems([...items, toDo]);
            setToDo('');
        }
    }

    const removeItem = (index: number) => {
        const updatedItems = [...items];
        // splicing updates the item in the array by removing it at the specified index
        // the value of '1' makes sure only 1 item is moved at a time
        // maybe can add button in the future to remove all tasks 
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }

    return (
        <>
            <div className='form_container'>
                <form className='enterItem_form_container' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter Task' value={toDo} onChange={handleUI} />
                    <button className='addItem_button' type='submit'>Add To List</button>
                </form>
            </div>

            <div className='itemList_container'>
                <table className='Title'>
                    <thead>
                        <tr>
                            <th>Tasks:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((task, index) => (
                            <tr key={index}>
                                <td>{task}</td>
                                <td>
                                    <button onClick={() => removeItem(index)}>Remove Task</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TaskList;
