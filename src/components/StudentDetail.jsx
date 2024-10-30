/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line react/prop-types
export default function StudentDetail({ toggleModal, student }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button
            onClick={toggleModal}
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p>{student.name}</p>
          <p>{student.nim}</p>
          <p>{student.birthDate}</p>
          <p>{student.address}</p>
          <p>{student.guardian}</p>
        </div>
      </div>
    </div>
  );
}
