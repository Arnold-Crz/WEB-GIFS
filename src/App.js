import ListGifs from './components/ListGifs';
import { Route, Link } from 'wouter';
import './App.css';
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href="/gif/avengers">Vengaores</Link>
        <Link href="/gif/dragonball">Dragon Ball</Link>
        <Link href="/gif/pubg">PUBG</Link>
        <Link href="/gif/pokemon">Pokemon</Link>
        {/* <ListGifs keyword={'cat'} /> */}
        <Route path="/gif/:keyword" component={ListGifs} />
      </section>
    </div>
  );
}

export default App;
