import styled from "styled-components";

export const Container = styled.div` 
    background-image: url(${({url}) => url });
    background-repeat: no-repeat;
    background-size: cover;
`