import React, { useState } from 'react';
import './ToDoList.css';

const TaskList = () => {
    const [toDo, setToDo] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const handleUI = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo.trim() !== '') {
            setItems([...items, toDo]);
            setToDo('');
        }
    }

    const removeItem = (index: number) => {
        const updatedItems = [...items];
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
