import React, { Component } from 'react'
import { increment,decrement } from '../Actions/Index'
import { connect } from 'react-redux'
 class PlusMinusDemo extends Component {
    constructor(props){
        super(props);
        console.log(props,'props');
    }
  render() {
    return (
      <div className='div1'>
         <h1 className='heading'>Class Component</h1>
         <button className='btn' onClick={()=>this.props.decrement(2)}>-</button>&nbsp;
         {this.props.count}&nbsp;
         <button className='btn' onClick={()=>this.props.increment(4)}>+</button>&nbsp;
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    return {count:state.changeCount}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        increment:(num)=>dispatch(increment(num)),
        decrement:(num)=>dispatch(decrement(num))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlusMinusDemo);
