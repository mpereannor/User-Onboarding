import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from './Form';
import axios from 'axios';



//declaration of variables 

const usersApi = 'https://reqres.in/api/users';


const App  =  () => {
    const [userList, setUserList] = useState([]);
    const [serverError, setServerError] = useState('');

    //GET REQUEST 

    const fetchUsers = () => {
        axios.get(usersApi)
            .then(res => {
                setUserList(res.data.data);
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
                password: userFormValues.password, 
                interest: userFormValues.interest
            };

        axios.post(usersApi, usersToBeAdded)
        .then(res => {

        const newNewUser = res.data.usersToBeAdded;
       
        setUserList([...userList, newNewUser]);
        userAction.resetForm();
        })
        .catch(err => {
            console.log(err.message)
        });
        userAction.resetForm();
    };

    useEffect(fetchUsers, [])
    
    return (
        <div>
          {serverError}
    
          <UserForm onSubmit={addUser} />
          {
            userList.length
              ? userList.map(user => (
                <div>{user.name} {user.email} {user.interest}</div>
              ))
              : <div>Try Again!</div>
          }
        </div>
      );
};


// function App() {
//   return (
//     <div className="App">
//       <UserForm/>
//     </div>
//   );
// }

export default App;
