import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { obtenerUsuarioId } from '../api/userplace';

const User = () => {
  const { id } = useParams();
  const [ user, setUser] = useState({});

  useEffect( () => {
    obtenerUsuarioId(id).then( userObj => setUser(userObj))
  }, [id])

  return (
    <div>
      <h1>Nombre: { user.name}</h1>
      <h2>Email: {user.email}</h2>
    </div>
  )
}

export default User
