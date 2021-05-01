import React from 'react';

class StudentEditForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            name:'',
            age:'',
            gender:''
        }
        this.firstField = React.createRef();

    }
   
    componentDidMount(){

        this.firstField.current.focus();
        if(this.props.editStudData){
            const {editStudData } = this.props;
            this.setState({
                id:editStudData.id,
                name: editStudData.name,
                age: editStudData.age,
                gender: editStudData.gender 
            })
        }
    }

   
    handleSubmit = (e) => {
        e.preventDefault();
        const studObj = {
            id: this.state.id,
            name: this.state.name,
            age:this.state.age,
            gender:this.state.gender
        }
        if(studObj.name !=="" || studObj.age !=="" || studObj.gender !==""){

            this.props.updateStudent(studObj);
            this.setState({
                id:0,
                name:'',
                age:'',
                gender:''
            });
        }
        this.firstField.current.focus();

    }
    handleChange=e=>{
        let target = e.target;
        this.setState({
            [target.name]:target.value
        })
    }
    setGender=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const {name,age,gender} = this.state;
        return(
            <div className="form">
                <h4>Edit Student</h4>
                <form onSubmit={this.handleSubmit}>
                {this.state.id}
                    <div>

                    <label>Enter Name</label>
                    <input type="text" name="name" ref={this.firstField } placeholder="name" value={name} onChange={this.handleChange}/>
                    </div>

                    <div>
                    <label>Enter Age</label>
                    <input type="text" name="age" placeholder="age" value={age}  onChange={this.handleChange}/>
                    </div>

                    <div>

                    <label>Select gender</label>
                    <label>
                        <input type="radio" name="gender" value="male" checked={gender==="male"} onChange={this.setGender}/>
                        Male
                        </label>
                        <label>
                    <input type="radio" name="gender" value="female" checked={gender==="female"} onChange={this.setGender}/>
                        Female
                        </label>
                    </div>

                    <button>submit</button>
                    <button onClick={this.props.cancelUpdate}>cancel</button>
                </form>
            </div>
        )
    }
}

export default StudentEditForm;