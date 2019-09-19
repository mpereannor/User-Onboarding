import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';

//declaration of variables 

const friendsApi = 'http://localhost:4000/friends';

// 1- THIS GOES INTO <Formik /> `initialValues` prop
const initialFriendForm = {
  name: '',
  age: '',
};


const FormikForm  =  () => {




};

function UserForm() {
    // Let's keep the FriendForm component
    // nice and stateless.

    return (
      // needs 3 props
      <Formik 

        render={props =>{

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
                        <Field name='password' type='text' placeholder='Enter Password'/>
                    </label>

                    <label>
                        Interest
                        <Field name='interest' type='text' placeholder='What are your interests?'/>
                    </label>
                
                    <input></input>
                    <button type='submit'>Submit</button>
                </div>    
            </Form>
        )
    } }
    />
    

export default FormikForm;