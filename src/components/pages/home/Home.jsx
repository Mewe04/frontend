import logo from 'assets/FullLogo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="bg-purple-400 px-24 py-4 flex items-center">
        <img src={logo} alt="Logo" className="w-60" />
        <nav className="ml-10 w-full">
          <ul className="flex justify-between text-white w-full">
            <div className="flex gap-4">
              <li>
                <Link to="#">О системе</Link>
              </li>
              <li>
                <Link to="#">Функции</Link>
              </li>
              <li>
                <Link to="#">Обратная связь</Link>
              </li>
            </div>
            <li className="justify-self-end">
              <Link to="dashboard" className="bg-purple-500 px-4 py-2 rounded-xl">
                Перейти в систему
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
