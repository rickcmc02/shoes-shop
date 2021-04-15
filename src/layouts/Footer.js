import { Container } from 'react-bootstrap';
import HorizontalLine from '../components/HorizonLine';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div style={{ color: "darkgray", margin: "15px", textAlign: "center" }}>
          &copy; 2021 RetrieverOne. All Rights Reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer
