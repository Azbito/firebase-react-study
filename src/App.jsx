import { useEffect, useState } from 'react';
import './App.scss';
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { Switch } from '@mui/material';
import { Input } from './components/Input';
import { UserCard } from './components/UserCard';

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyATonLgAvZ_XD46Z-sRUosxbBnMpJutuMI",
  authDomain: "react-40955.firebaseapp.com",
  projectId: "react-40955",
  storageBucket: "react-40955.appspot.com",
  messagingSenderId: "932349454493",
  appId: "1:932349454493:web:0c290a05e6158994b88c74"
});

function App() {
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
  }, [])

  async function addUser() {
    if (name !== '' && email !== '' ) {
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
    <div className="App">
      <div>
        <Input type="text" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Switch value={register} onChange={(e) => setRegister(!register)} label="Cadastro" defaultChecked color="warning" />
      <button onClick={addUser}>Adicionar</button>
        <div>
            {users.map(user => (
              <UserCard id={user.id} name={user.name} email={user.email} register={user.register} onClick={() => deleteUser(user.id)}  />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
  