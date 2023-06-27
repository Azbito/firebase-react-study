import { useEffect, useState } from 'react';
import './style.scss';
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { Switch } from '@mui/material';
import { Input } from '../../components/Input';
import { UserCard } from '../../components/UserCard';
import { AddContainer } from '../../components/AddContainer';
import { Navbar } from '../../components/Navbar';

export const firebaseConfig = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
});

console.log(process.env)
  
export function Management() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [register, setRegister] = useState(true)
  const [users, setUsers] = useState([])
  const db = getFirestore(firebaseConfig)
  const userCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers()
  }, [users])

  async function addUser() {
    if (name && email) {
      const user = await addDoc(userCollectionRef, {
        name,
        email,
        register
      });
      return
    }

    alert("Por favor, preenche todos os dados")
  }

  async function deleteUser(id) {
      const userDoc = doc(db, 'users', id)
      await deleteDoc(userDoc);
  }

  return (
    <div className="management-container">
      <AddContainer>
        <Input type="text" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <b>Situação do cadastro:</b>
        {
          register ? (
            <p className="approved">
            Aprovado
          </p>
          ) :
          <p1>
          Recusado  
        </p1>
      }
        <Switch value={register} onChange={(e) => setRegister(!register)} label="Cadastro" defaultChecked color="warning" />
      <button onClick={addUser}>Adicionar</button>
      </AddContainer>
        <div className="users-container">
            {users.map(user => (
              <UserCard key={user.id} name={user.name} email={user.email} register={user.register} onClick={() => deleteUser(user.id)}  />
              ))}
        </div>
      </div> 
  );
}