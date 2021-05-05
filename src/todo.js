import React from 'react'

export default function todo({ todo, index }) {
    return (
        <div class="accordion-item">
        <h2 class="accordion-header" id={`heading${index}`}>
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                {todo.title}
            </button>
        </h2>
        <div id={`collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
          <div class="accordion-body">
              {todo.description}
          </div>
        </div>
      </div>
    );
}
