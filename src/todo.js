import React from 'react'

export default function todo({ todo }) {
    return (
        <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
            {todo.title}
        </li>
    );
}
