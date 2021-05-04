import React from 'react'

export default function todo({todo}) {
    return (
        <div classNameName="list-group">
            <span className="list-group-item">
                <p className="ms-2 me-auto">
                    <h3 className="fw-bold">{todo.title}</h3>
                    {todo.description}
                </p>
            </span>
        </div>
    );
}
