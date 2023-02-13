import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Route exact path="/" element={<ProductList />}></Route>
              <Route path="/add" element={<AddBook />}></Route>
              <Route path="/edit/:id" element={<EditBook />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
