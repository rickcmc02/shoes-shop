const StateToProps = (props) => {
  return {
    state : props.state.reducer,
    alertOpen : props.state.reducer2
  }
}

export default StateToProps
