import React from 'react';

class StudentList extends React.Component {
    render() {
        const { data, deleteStudent, editStudent } = this.props;
        return (
            <div className="list">
                <h5>Student List</h5>
                <table width="100%">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(stud =>
                            <tr key={stud.id}>
                                <td>{stud.name}</td>
                                <td>{stud.age}</td>
                                <td>{stud.gender}</td>
                                <td>
                                    <button onClick={() => window.confirm('do you want to delete this record?') ? deleteStudent(stud.id) : null}>delete</button>
                                    <button onClick={() => editStudent(stud.id)}>update</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default StudentList;