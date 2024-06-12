
import axios from "axios";
import { useState } from "react";


function TodoItem({ job, editID, setEditID, hdlDelete,hdlUpdate }) {
    const [inputTitle, setInputTitle] = useState(job.todo)
    const [checked, setChecked] = useState(job.complete) 


       const onSave  = async () => {
        const body = { ...job, todo: inputTitle, complete: checked }
        hdlUpdate(job.id, body)

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
                    <button onClick={onSave}>Save</button>
                    <button onClick={hdlCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <input type="text"
                        disabled
                        value={job.todo}
                        style={{ color: job.complete ? 'red' : '' }} />
                    <button onClick={() => setEditID(job.id)}>Edit</button>
                    <button onClick={() => hdlDelete(job.id)}>Delete</button>
                </>
            )}
        </div>


    );
}


export default TodoItem;
