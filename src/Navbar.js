import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="Navbar">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Поиск поста</label>
            <input 
              id="search" 
              type="text" 
              placeholder="Поиск поста..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <ul>
          <li><Link to="home">Главная</Link></li>
          <li><Link to="post">Пост</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar