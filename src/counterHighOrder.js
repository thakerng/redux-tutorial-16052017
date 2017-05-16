import {connect} from 'react-redux'

const increaseAction = () => 
({
  type:'INCREASE'
})


const mapStateToProps = (state)=>({
  counter:state.counter
})

const mapDispatchToProps = (dispatch)=>({
  increase:()=> dispatch(increaseAction())
})

const CounterApp = connect(mapStateToProps,mapDispatchToProps)

export default CounterApp