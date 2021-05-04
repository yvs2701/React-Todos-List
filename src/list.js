import React from 'react';
import Todo from "./todo";

export default function todos({ todos }) {
    return (
        <ul class="list-group mt-5">
            <Todo todo={todos[0]} />
        </ul>
    );
}
