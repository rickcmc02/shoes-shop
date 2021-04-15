import { Button, Jumbotron } from 'react-bootstrap';

const MainBanner = () => {
  return (
    <div>
      <Jumbotron className="background">
        <p>
          ----------------------------------------------------------
        </p>
        <h1 style={{color: "white", background: "gray", opacity: 0.9}}>20% Season OFF</h1>
        <p>
          ----------------------------------------------------------
        </p>
      </Jumbotron>
    </div>
  )
}

export default MainBanner
