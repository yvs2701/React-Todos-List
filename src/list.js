import React from 'react';
import Todo from "./todo";

export default function todos({todos}) {
    return (
        <div className="container mt-5">
            <Todo todo = {todos[0]}/>
        </div>
    );
}
