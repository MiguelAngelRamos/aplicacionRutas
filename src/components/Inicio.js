import React, { useEffect, useState } from 'react'
import { obtenerUsuarios } from '../api/userplace';
import { Link } from 'react-router-dom';
const Inicio = () => {
  
  const [users, setUsers] = useState([]);

  useEffect( ()=> {
    obtenerUsuarios().then( users => setUsers(users) )
  },[])

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {
          users.map( users => (
            <li key={users.id}>
              <Link to={`/user/${users.id}`}>{users.name} - { users.email}</Link>

            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Inicio
