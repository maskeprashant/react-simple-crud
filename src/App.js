import React from 'react';
import './App.css';
import StudentEditForm from './components/StudentEditForm';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormData: {
        name: '',
        age: '',
        gender: '',
        id: 0
      },
      editing: false,
      data: [
        {
          id: 1,
          name: 'Ram',
          age: 23,
          gender: 'male'
        },
        {
          id: 2,
          name: 'Bharat',
          age: 19,
          gender: 'male'
        },
        {
          id: 3,
          name: 'Pooja',
          age: 23,
          gender: 'female'
        },

      ]
    }
  }
  addStudent = (stud) => {
    const data = this.state.data;
    stud.id = data.length + 1;

    this.setState({
      data: [...data, stud]
    })
    console.log(this.state)
  }
  deleteStudent = id => {
    const allStudents = this.state.data;
    const updatedList = allStudents.filter(stud => stud.id !== parseInt(id));
    this.setState({
      data: updatedList
    })
  }
  editStudent = studId => {
    const editStud = this.state.data.filter(stud => stud.id === parseInt(studId));
    const stud = {
      id: editStud[0].id,
      name: editStud[0].name,
      age: editStud[0].age,
      gender: editStud[0].gender
    }
    this.setState({
      editFormData: stud,
      editing: true
    })

  }
  cancelUpdate = () => {
    this.setState({
      editing: false
    })
  }
  updateStudent = student => {
    console.log(student)
    const updatedData = this.state.data.map(stud => {
      if (stud.id === parseInt(student.id)) {
        return student
      } else {
        return stud
      }
    });
    this.setState({
      data: updatedData,
      editing: false
    })
  }
  render() {
    return (
      <div className="App">
        <h1>
          React Student CRUD !!
        <span>Date: May 1, 2021</span>
        </h1>
        <div className="container">

          {this.state.editing ?
            <StudentEditForm editStudData={this.state.editFormData} cancelUpdate={this.cancelUpdate} updateStudent={this.updateStudent} />
            :
            <StudentForm addStudent={this.addStudent} />
          }
          <StudentList data={this.state.data} deleteStudent={this.deleteStudent} editStudent={this.editStudent} />
        </div>
      </div>
    );
  }
}
export default App;
