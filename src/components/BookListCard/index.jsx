import { BookCard } from "../BookCard";
import {Container} from './styles'


export const BookListCard = ({ bookList }) => {
  
    return <Container>
      {bookList.map((book, index) => {
          return <BookCard key={index} title={book.title} author={book.author} image={book.image} />
      })}
      </Container>
};
