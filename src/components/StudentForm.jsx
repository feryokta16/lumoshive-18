/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function StudentForm({
  toggleModal,
  student,
  onChange,
  onSubmit,
  isEdit,
}) {
  return (
    <div className="modal-overlay">
      {
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isEdit ? "edit Student" : "form new student"}
            </h5>
            <button
              onClick={() => toggleModal(isEdit)}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Student Name
                </label>
                <input
                  type="text"
                  onChange={onChange}
                  name="name"
                  id="name"
                  className="form-control"
                  // eslint-disable-next-line react/prop-types
                  value={student.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nim" className="form-label">
                  NIM
                </label>
                <input
                  type="text"
                  name="nim"
                  id="nim"
                  min="0"
                  onChange={onChange}
                  value={student.nim}
                  inputMode="numeric"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">
                  Birt Date
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  onChange={onChange}
                  // eslint-disable-next-line react/prop-types
                  value={student.birthDate}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  adress
                </label>
                <textarea
                  name="address"
                  id="address"
                  value={student.address}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="guardian" className="form-label">
                  Guardian Name
                </label>
                <input
                  type="text"
                  name="guardian"
                  id="guardian"
                  onChange={onChange}
                  value={student.guardian}
                  className="form-control"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer mt-3">
            {isEdit ? (
              <button
                onClick={onSubmit}
                type="button"
                className="btn btn-warning"
              >
                <i className="bi bi-send-pencil"></i> Update
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSubmit}
              >
                <i className="bi bi-send-fill"></i> Submit
              </button>
            )}
          </div>
        </div>
      }
    </div>
  );
}
