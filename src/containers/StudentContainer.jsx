/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editedStudent: null,
    students: [
      {
        name: "fery",
        nim: "123456789",
        birthDate: "2000-01-01",
        address: "bogor",
        guardian: "siti",
      },
      {
        name: "fery okta",
        nim: "123456789",
        birthDate: "2000-01-01",
        address: "bogor",
        guardian: "siti",
      },
    ],
    currentStudent: {
      name: "",
      nim: "",
      birthDate: "",
      address: "",
      guardian: "",
    },
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
    // console.log(this.state.currentStudent);
  };
  toggleModalForm = (isEdit = false) => {
    this.setState({ isEdit: isEdit, modalForm: !this.state.modalForm });
  };
  handleEditStudent = (student, index) => {
    this.setState({
      currentStudent: student,
      isEdit: true,
      modalForm: !this.state.modalForm,
      editedStudent: index,
    });
  };
  toggleModalDetail = () => {
    this.setState({ modalDetail: !this.state.modalDetail });
  };
  handleDeleteStudent = (index) => {
    const data = this.state.students;
    const newStudent = data.slice(0, index).concat(data.slice(index + 1));
    // eslint-disable-next-line no-unused-vars
    this.setState((prevState) => ({
      students: newStudent,
    }));
  };
  handleInfoStudent = (student) => {
    this.setState({
      currentStudent: student,
    });
    this.toggleModalDetail();
  };

  handleAddOrupdateStudent = () => {
    const { currentStudent, isEdit } = this.state;
    if (isEdit) {
      const index = this.state.editedStudent;
      const updateStudent = [...this.state.students];
      updateStudent[index] = currentStudent;
      this.setState({ students: updateStudent });
    } else {
      this.setState((prevState) => ({
        students: [...prevState.students, currentStudent],
      }));
    }
    this.setState({
      currentStudent: {
        name: "",
        nim: "",
        birthDate: "",
        address: "",
        guardian: "",
      },
    });
    this.toggleModalForm(this.state.isEdit);
  };
  render() {
    return (
      <>
        <StudentTable
          students={this.state.students}
          toggleModalForm={this.toggleModalForm}
          toggleModalDetail={this.handleInfoStudent}
          handleEditStudent={this.handleEditStudent}
          handleDeleteStudent={this.handleDeleteStudent}
        />
        {this.state.modalForm && (
          <StudentForm
            student={this.state.currentStudent}
            onSubmit={this.handleAddOrupdateStudent}
            toggleModal={this.toggleModalForm}
            isEdit={this.state.isEdit}
            onChange={this.handleInputChange}
          />
        )}
        {this.state.modalDetail && (
          <StudentDetail
            toggleModal={this.toggleModalDetail}
            student={this.state.currentStudent}
          />
        )}
      </>
    );
  }
}
