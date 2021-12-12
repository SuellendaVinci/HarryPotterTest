import { Container, TitleStyled, ImageStyled } from "./styles";


export const BookCard = ({ title, author, image }) => {
  return (
    <Container>
      <ImageStyled src={image} alt={title} />
      <TitleStyled>{title}</TitleStyled>
      <TitleStyled>{author}</TitleStyled>
    </Container>
  );
};
