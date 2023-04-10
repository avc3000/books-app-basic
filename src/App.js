import './App.css';
import Book from './Book.js';
import { books } from './models/books.js';

const BookList = () => {
  return <section className='bookList'>
    {
      books.map((book) => {
        return <Book key={book.id} {...book} />
      })
    }
  </section>
}

function App() {
  return (
    <div className="App">
      <h1>amazon best seller</h1>
      <BookList />
    </div>
  );
}

export default App;
