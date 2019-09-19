import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';

//declaration of variables 

const usersApi = 'https://reqres.in/api/users';

const initUserForm = {
  name: '',
  email: '',
  password: '',
};


const FormikForm  =  () => {
    const [userList, setUserList] = useState([]);
    const [serverError, setServerError] = useState('');

    //GET REQUEST 

    const fetchUsers = () => {
        axios.get(usersApi)
            .then(res => {
                setUserList(res.data);
            })
            .catch(err => {
                setServerError(err.message)
            });
    };

    //POST REQUEST 
    
    const addUser = (userFormValues, userAction) => {

        const usersToBeAdded = 
            {
                name: userFormValues.name,
                email: userFormValues.email,
                password: userFormValues.password
            };

        axios.post(usersApi, usersToBeAdded)
        .then(res => {

        const newNewUser = res.data;
       
        setUserList(userList.concat(newNewUser));
        userAction.resetForm();
        })
        .catch(err => {
            console.log(err.message)
        })
    };

    useEffect(() => {
    fetchUsers();
    }, []); 
    
    return (
        <div>
          {serverError}
    
          <UserForm onSubmit={addUser} />
          {
            userList.length
              ? userList.map(user => (
                <div>{user.name} {user.email} {user.interest}</div>
              ))
              : 'Try Again!'
          }
        </div>
      );
};


const validationSchema = yup.object().shape({
    name: yup.string()
        .required('invalid format'),
    emai: yup.string()
    .required('invalid format'),
    password: yup.string()
    .required('invalid format'),

})

function UserForm({onSubmit}) {

    return (

      <Formik 
      
      render={props =>{
        validationSchema={validationSchema}
        initialValues={initUserForm}
        onSubmit={onSubmit}

        return (
            <Form>
            <div>
                <label>
                    Name
                    <Field name='name' type='text' placeholder='Enter Name'/>
                </label>

                <label>
                    Email
                    <Field name='email' type='text' placeholder='Enter Email'/>
                </label>

                <label>
                    Password
                    <Field name='password' type='password' placeholder='Enter Password'/>
                </label>

                <label>
                    Interest
                    <Field name='interest' type='text' placeholder='What are your interests?'/>
                </label>
            
                <input name='checkout' type='text'> Terms of Service</input>
                <button type='submit'>Submit</button>
            </div>    
        </Form>
        )
    } 
}
    />

    )
}
    

export default FormikForm;