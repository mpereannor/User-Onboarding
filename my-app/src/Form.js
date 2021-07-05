import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initUserForm = {
    name: '',
    email: '',
    password: '',
    interest: '',
    checkout: false
  };

const validationSchema = yup.object().shape({
    name: yup.string()
    .required('invalid format'),
    email: yup.string()
    .required('invalid format'),
    password: yup.string()
    .required('invalid format'),

})

function UserForm({onSubmit}) {

    return (

      <Formik 
      validationSchema={validationSchema}
      initialValues={initUserForm}
      onSubmit={onSubmit}

      render={props =>{

        return (
            <Form>
            <div>
                <label>
                    Name
                    <Field name='name' type='text' placeholder='Enter Name'/>
                    <ErrorMessage name='name' component='div' />

                </label>

                <label>
                    Email
                    <Field name='email' type='text' placeholder='Enter Email'/>
                    <ErrorMessage name='email' component='div' />

                </label>

                <label>
                    Password
                    <Field name='password' type='password' placeholder='Enter Password'/>
                    <ErrorMessage name='password' component='div' />

                </label>

                <label>
                    Interest
                    <Field name='interest' type='text' placeholder='What are your interests?'/>
                    <ErrorMessage name='interests' component='div' />

                </label>
{/*             
                <input name='checkout' type='text'> Terms of Service</input> */}
                <button type='submit'>Submit</button>
            </div>    
        </Form>
        )
    } 
}
    />

    )
}
    

export default UserForm;