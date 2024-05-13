import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home_main">
      <Link className="home_card home_card--animals" to="/animals">
        <p>Animals</p>
      </Link>
      <Link className="home_card home_card--birds" to="/birds">
        <p>Birds</p>
      </Link>
      <Link className="home_card home_card--insects" to="/insects">
        <p>Insects</p>
      </Link>
      <Link className="home_card home_card--fish" to="/fish">
        <p>Fish</p>
      </Link>
    </main>
  );
}

export default Home;
