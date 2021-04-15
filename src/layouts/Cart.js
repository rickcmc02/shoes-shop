import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

const Cart = (props) => {
  return (
    <>
    <Table responsive="sm">
      <thead>
        <tr>
          <th>Product No.</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Quantity Change</th>
        </tr>
      </thead>
      <tbody> 
        {
          props.state.map((a, i)=>{
            return (
              <tr key={i}>
                <td>{ a.id }</td>
                <td>{ a.name }</td>
                <td>{ a.quan }</td>
                <td>
                  <button onClick={()=>{
                    props.dispatch({ type : 'quanAdd', payload : a})
                    }}> +
                  </button>
                  <button onClick={()=>{
                    props.dispatch({ type : 'quanSub', payload : a})
                    }}> -
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    
    <div className="inventory-alert">
      <h4>20% OFF NOW</h4>
    </div>

    </>
  )
}

function stateToProps(state) {
  return {
    state : state
  }
}

export default connect(stateToProps)(Cart)
