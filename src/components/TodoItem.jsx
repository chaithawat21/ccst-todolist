
import axios from "axios";
import { useState } from "react";


function TodoItem({ job, reload, editID, setEditID }) {
    const [inputTitle, setInputTitle] = useState(job.todo || '')
    const [checked, setChecked] = useState(job.complete || false) 

    const hdlDelete = async () => {
        if (!confirm('Confirm delete?')) {
            return
        }

        try {
            await axios.delete(`http://localhost:8000/jobs/${job.id}`);
            reload()
        } catch (error) {
            console.log(error.message);
        }

    }
    const hdlUpdate = async () => {

        const body = { ...job, todo: inputTitle, complete: checked, }

        try {
            await axios.put(`http://localhost:8000/jobs/${job.id}`, body);
            reload()
            setEditID(-1);
        } catch (error) {
            console.log(error.message);
        }
    }
    const hdlCancel = () => {
        setInputTitle(job.todo)
        setEditID(-1)
    }
    
    return (

        
        <div className="todo-item">
            {job.id === editID ? (
                <>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={checked}
                        
                        onChange={(e) => setChecked(e.target.checked)} />
                    <input type="text"
                        value={inputTitle}
                        onChange={e => setInputTitle(e.target.value)}
                        style={{ color: checked ? 'red' : '' }}

                    />
                    <button onClick={hdlUpdate}>Save</button>
                    <button onClick={hdlCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <input type="text"
                        disabled
                        value={job.todo}
                        style={{ color: job.complete ? 'red' : '' }} />
                    <button onClick={() => setEditID(job.id)}>Edit</button>
                    <button onClick={hdlDelete}>Delete</button>
                </>
            )}

        </div>


    );
}


export default TodoItem;
