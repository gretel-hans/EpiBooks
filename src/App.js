import './App.css';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
/*import AllTheBooks from './components/AllTheBooks';*/
import BookList from './components/BookList';
import Libri from './data/books.json';

function App() {
  return (
    <div className="App" >
      <span id="home">ciao</span>
      <header>
        <MyNav/>
      </header>

      <main>
        <Welcome title='Welcome to the EpiBooks Library Shop'/>
        <BookList books={Libri}/>
        {/*<AllTheBooks/>*/}

      </main>

      <footer>
        <MyFooter/>
        </footer>
    </div>
  );
}

export default App;
