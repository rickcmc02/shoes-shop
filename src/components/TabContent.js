import { useEffect } from 'react'

const TabContent = (props) => {

  useEffect(()=>{
    props.switch0Change(true);
  });

  if (props.tab === 0) {
    return <div>0 contents</div>
  } else if (props.tab === 1) {
    return <div>1 contents</div>
  } else if (props.tab === 2) {
    return <div>2 contents</div>
  }
}

export default TabContent
