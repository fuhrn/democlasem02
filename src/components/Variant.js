import styled from 'styled-components';
import Card from "./Card";

import img1 from '../assets/img1.jpeg';

const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  align-items: center;
  /* min-height: 100vh; */ /* esto lo usaria si quisiera q este componente ocupara todo el vh */
  height: calc(100vh - 6rem - 8rem - 8rem);
  justify-items: center;
`;

function Variant() {
    return (
        <Content>
            <Card img={img1}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit libero, posuere nec diam sit amet, condimentum pretium nunc. Nulla facilisi. Integer dictum turpis eros."
            />
            <Card img={img1}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit libero, posuere nec diam sit amet, condimentum pretium nunc. Nulla facilisi. Integer dictum turpis eros."
            />
            <Card img={img1}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit libero, posuere nec diam sit amet, condimentum pretium nunc. Nulla facilisi. Integer dictum turpis eros."
            />
        </Content>
    );
}

export default Variant;
