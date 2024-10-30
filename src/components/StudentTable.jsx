/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function StudentTable({
  toggleModalForm,
  toggleModalDetail,
  students,
  handleEditStudent,
  handleDeleteStudent,
}) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered caption-top table-hover">
        <caption>List of student</caption>
        <thead>
          <tr>
            <th scope="col" className="px-3" colSpan="5">
              <button
                onClick={() => toggleModalForm(false)}
                className="btn btn-sm btn-primary float-end fw-bold"
              >
                <i className="bi bi-plus-circle"></i> Add New
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Nim</th>
            <th scope="col">birth</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.nim}</td>
                <td>{student.birthDate}</td>
                <td>
                  <button
                    onClick={() => handleDeleteStudent(index)}
                    className="btn btn-outline-danger btn-sm float-end"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    onClick={() => handleEditStudent(student, index)}
                    className="btn btn-outline-warning btn-sm mx-2 float-end"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    onClick={() => toggleModalDetail(student)}
                    className="btn btn-outline-primary btn-sm float-end"
                  >
                    <i className="bi bi-info-circle"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
