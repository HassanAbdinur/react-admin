import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/Users';
// import UserList from './components/UserList';
// import UserCreate from './components/UserCreate';
// import UserEdit from './components/UserEdit';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource 
        name='users' list={UserList} 
        // list={UserList} 
        // create={UserCreate} 
        // edit={UserEdit} 
      />
    </Admin>
  );
}

export default App;
