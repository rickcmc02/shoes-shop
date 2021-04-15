import {useState} from 'react';
import Card from '../components/Card';

const ShoesContainer = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            props.shoes.map((a, i)=>{
              return <Card shoes={props.shoes[i]} i = {i} key={i}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShoesContainer
