import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import '../static/css/Detail.css';
import Stock from "../components/Stock";
import TabContent from "../components/TabContent";;


const Detail = (props) => {
  
  let [alertInv, alertInvOn] = useState(true);
  let [tab, tabChange] = useState(0);
  let [switch0, switch0Change] = useState(false);
  let { id } = useParams();
  let selectedItem = props.shoes.find(function(item){
    return item.id == id
  })
  let history = useHistory();

  useEffect(()=>{
    // 최근 Detail 확인한 신발 arr 받아오기
    var arr = localStorage.getItem('watched');
    if (arr == null) {
      arr = []
    } else {
      arr = JSON.parse(arr); 
    }

    arr.push(id);
    arr = new Set(arr);   // 중복제거
    arr = [...arr];

    localStorage.setItem('watched', JSON.stringify(arr) );

    // 할인중 정보 알림
    let Timer = setTimeout(()=>{ 
      alertInvOn(false)
      return ()=>{ clearTimeout(Timer) }
    }, 2000)
  });

  return (
    <div className="container">
      <h4>Detail Page</h4>
      {
        alertInv === true
        ? (
          <div className="inventory-alert">
            <p>The stock of {selectedItem.title} is running low.</p>
          </div>
          )
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={"../shoe_img/shoes" + (Number(id) + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">
            {selectedItem.title}
          </h4>
          <p>{selectedItem.content}</p>
          <p>KRW {selectedItem.price}</p>
          <Stock id={id} stock={props.stock} />
          <button className="btn btn-danger" 
            onClick={()=>{
              props.dispatch({
                type : 'productAdd', 
                payload : {id : selectedItem.id, name : selectedItem.title, quan : 1}
              });
              history.push('/cart');
            }}
          >Order</button>
          <p></p>
          <button className="btn" style={{background : "lightgray"}}onClick={()=>{
            history.push('/');
          }}>Back</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            tabChange(0);
            switch0Change(false);
          }}>Option 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            tabChange(1)
            switch0Change(false);
          }}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            tabChange(2)
            switch0Change(false);
          }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={switch0} classNames="showTab" timeout={500}>
        <TabContent tab={tab} switch0Change={switch0Change}/>
      </CSSTransition>
    </div> 
  )
}

function stateToProps(state) {
  return {
    state : state.reducer,
    alertOpen : state.reducer2
  }
}

export default connect(stateToProps)(Detail)
