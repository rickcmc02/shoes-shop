import { useHistory } from 'react-router-dom';

const Card = (props) => {
  let history = useHistory();

  return (
    <div className="col-md-4" style={{cursor:'pointer'}} onClick={()=>{
      history.push('/detail/' + props.shoes.id)
    }}>
      <img src={"../shoe_img/shoes" + (props.shoes.id + 1) + ".jpg"} width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>KRW { props.shoes.price }</p>
    </div>
  )
}

export default Card
