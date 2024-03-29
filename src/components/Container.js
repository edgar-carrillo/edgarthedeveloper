import styled from 'styled-components';
import device from '../assets/data/deviceSizes';

const Container = styled.div`
  max-width: 2000px;
  margin: auto;
  padding: 0 70px;

  @media ${device.laptop} {
    padding: 0 20px;
  }
`;

const SubContainer = styled.div`
  overflow: hidden;
  max-height: 1000px;
`;

export { Container, SubContainer };
