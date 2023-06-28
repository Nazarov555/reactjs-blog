import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

 
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Мой Первый Пост",
      datetime: "01 Февраля, 2023 11:20:45 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur aspernatur magnam aperiam officia eius quasi cum, amet corporis, voluptatum fugiat? Aliquam doloremque quasi labore ut, officiis consectetur minima debitis!"
    },
    {
      id: 2,
      title: "Мой 2-ой Пост",
      datetime: "01 Февраля, 2023 11:20:45 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur aspernatur magnam aperiam officia eius quasi cum, amet corporis, voluptatum fugiat? Aliquam doloremque quasi labore ut, officiis consectetur minima debitis!"
    },
    {
      id: 3,
      title: "Мой 3-ий Пост",
      datetime: "01 Февраля, 2023 11:20:45 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur aspernatur magnam aperiam officia eius quasi cum, amet corporis, voluptatum fugiat? Aliquam doloremque quasi labore ut, officiis consectetur minima debitis!"
    },
    {
      id: 4,
      title: "Мой Четвёртый Пост",
      datetime: "01 Февраля, 2023 11:20:45 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur aspernatur magnam aperiam officia eius quasi cum, amet corporis, voluptatum fugiat? Aliquam doloremque quasi labore ut, officiis consectetur minima debitis!"
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
   
      <Header title="React JS Blog"/>

      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="home" element={<Home posts={posts}/>}/>

        <Route path="post">
          <Route index element={<NewPost
            
          />}/>   
          <Route path=":id" element={<PostPage

          />}/>
        </Route>

        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
            
      <Footer />

    </div>
  );
}

export default App;