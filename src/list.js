import React from 'react';
import Todo from "./todo";

export default function todos({todos}) {
    return (
        <div className="accordion" id="accordionExample">
        {todos.map((element, index) => {
            return <Todo todo={element, index} />
        })}
        </div>
    );
}
