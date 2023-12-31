import { useEffect, useState } from 'react'
import './App.css'
import { uid } from 'uid';
import Header from './components/Homepage/Header/Header.jsx'
import Main from './components/Homepage/Main/Main';
import Products from './Storage/Products';
import AddProduct from './Storage/AddProduct';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Homepage/Footer/Footer';

import korzinka from './components/Page/Korzinka.jsx'



const getLocalStorage = () => {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

function App() {

  const id = uid();
  const img = 'https://picsum.photos/200/300';

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [list, setList] = useState(getLocalStorage());
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: id, name: title, narx: price, image: img };
    setList([...list, newItem]);
    setTitle('')
    setPrice('')
  }

  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id !== id)
    setList(newItem);
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(list));
  }, [list]);

  return (
    <Routes>
      <Header/>
      <Route path='/' element={<Main/>}/>
      <Route path='/korzinka' element={<korzinka/>}/>
      <Footer/>
    </Routes>
  )
}

export default App
