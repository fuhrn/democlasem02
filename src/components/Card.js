import styled from 'styled-components';

const CardStyled = styled.div`
  width: ${props => props.size};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  
  img {
    width: ${props => props.size};
    height: ${props => props.size};
    object-fit: cover;
  }
  
  div {
    background-color: #3e3e3e;
    padding: 0.5rem;
    color: #fff;
  }
`;

export default function Card({img, text}) {
    return (
        <CardStyled size="15rem">
            <img src={img} alt=""/>
            <div>{text}</div>
        </CardStyled>
    )
}
