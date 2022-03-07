import ListGifs from './components/ListGifs';
import { Route, Link } from 'wouter';
import './App.css';
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1 className="app--title">App Gifs 🐱 </h1>

        <div className="header--links">
          <Link className="header--link" href="/gif/avengers">
            Vengadores
          </Link>
          <Link className="header--link" href="/gif/dragonball">
            Dragon Ball
          </Link>
          <Link className="header--link" href="/gif/pubg">
            PUBG
          </Link>
          <Link className="header--link" href="/gif/pokemon">
            Pokemon
          </Link>
          {/* <ListGifs keyword={'cat'} /> */}
        </div>
        <Route path="/gif/:keyword" component={ListGifs} />
      </section>
    </div>
  );
}

export default App;
