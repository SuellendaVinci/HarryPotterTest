import { Container, TitleStyled } from './styles'

export const BookCard = ({ title, author }) => {
  return (
    <Container>
      <TitleStyled>{title}</TitleStyled>
      <div>{author}</div>
    </Container>
  );
};
