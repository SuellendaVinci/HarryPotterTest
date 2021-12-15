import { BookListCard } from "./components/BookListCard";
import hog from "./images/hog.jpeg"
import { Container } from "./styles"
import {bookList} from './bookList'

function App() {
  
  return (
    <div>
      <Container url={hog}>
        <BookListCard bookList={bookList} />
      </Container>
      
    </div>
  );
}

export default App;
