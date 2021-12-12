import { BookCard } from "./components/BookCard";
import hog from "./images/hog.jpeg"
import livro1 from "./images/livro1.jpg";
import livro2 from "./images/livro2.jpg";
import livro3 from "./images/livro3.jpg";
import { Container } from "./styles"

function App() {

  const book01 = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
  };

  const book02 = {
    title: "Harry Potter and the Chamber of Secrets",
  };

  const book03 = {
    title: "Harry Potter and the Prisoner of Azkaban",
  };

  return (
    <div>
      <Container url={hog} />
      <BookCard title={book01.title} author={book01.author} image={livro1} />
      <BookCard title={book02.title} author={book01.author} image={livro2} />
      <BookCard title={book03.title} author={book01.author} image={livro3} />
    </div>
  );
}

export default App;
