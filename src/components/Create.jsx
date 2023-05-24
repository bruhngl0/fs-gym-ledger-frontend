import React, { useState } from 'react'
import { useNavigate } from 'react-router'


const Create = () => {


    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
    })

    const navigate = useNavigate();



    // Update the state properties-

    function updateForm(value){
        return setForm((prev)=> {
            return {...prev, ...value}
        })
    }

    //this function will handle the submission- 

    async function onSubmit(e){
        e.preventDefault();


        const newPerson = { ...form}
        await fetch("http://localhost:3000/record", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPerson),
        })
        .catch (error=> {
            window.alert(error);
            return;
        })

        setForm({ name: "" , position: "", level: ""});
        navigate("/")
    }



  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>


        <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input 
                type='text'
                className='form-control'
                id= "name" 
                value= {form.name}
                onChange={(e)=> updateForm({name : e.target.value})}    
            />
       </div>

       <div className='form-group'>
            <label htmlFor='position'>Position</label>
            <input 
                type='text'
                className='form-control'
                id= "name" 
                value={form.position}
                onChange={(e)=> updateForm({position: e.target.value})}      
            />
           
       </div>

       <div className='form-group'>
        <div className='form-check form-check-inline'>
            <input
                className='form-check-input'
                type= 'radio' 
                name= 'positionOptions'
                id = "positionIntern"
                value = "Intern"
                checked = {form.level === "Intern"}
                onChange={(e)=> updateForm({level: e.target.value})}
                />

            <lable htmlFor = "positionIntern" className="form-check-label">Intern</lable>
        </div>

        <div className='form-check form-check-inline'>
            <input
                className='form-check-input'
                type= 'radio' 
                name= 'positionOptions'
                id = "positionJunior"
                value = "Junior"
                checked = {form.level === "Junior"}
                onChange={(e)=> updateForm({level: e.target.value})}
                
            />
             <lable htmlFor = "positionJunior" className="form-check-label">Junior</lable>
        </div>

        <div className='form-check form-check-inline'>
            <input
                className='form-check-input'
                type= 'radio' 
                name= 'positionOptions'
                id = "positionSenior"
                value = "Senior"
                checked = {form.level === "Senior"}
                onChange={(e)=> updateForm({level: e.target.value})}
                
                />
             <lable htmlFor = "positionSenior" className="form-check-label">Senior</lable>
        </div>

       </div>

       <div className='form-group'>
        <input
        type='submit'
        value= "create person"
        className='btn btn-primary'/>

       </div>



      </form>
        
    </div>
  )
}

export default Create
