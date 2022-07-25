import React from 'react'

function Todo() {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">Java</label>
            </div>
        </li>
    );
}

export default Todo