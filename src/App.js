import { BookCard } from "./components/BookCard";

function App() {
  const book01 = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
  };

  const book02 = {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
  };

  const book03 = {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
  };

  return (
    <div>
      <BookCard title={book01.title} author={book01.author} />
      <BookCard title={book02.title} author={book01.author} />
      <BookCard title={book03.title} author={book01.author} />
    </div>
  );
}

export default App;
