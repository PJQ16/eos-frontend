import React from 'react';

export default function Modal({ children, id, title, size }) {
  return (
    <div 
      className="modal fade" 
      id={id}  
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true" 
      data-bs-backdrop="static" 
      data-bs-keyboard="false"
    >
      <div className={`modal-dialog modal-${size}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
