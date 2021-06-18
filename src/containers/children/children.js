import React,{Component} from 'react'
import {connect} from 'react-redux'
import './children.css'
import * as type from '../../store/actions'

class Child extends Component {
  render () {
    return (
      <div id="container">
      <input className="input" type="text" ref={input => this.inputVal = input} onKeyUp={this.handleClick}/>
        <div className="wrapper">
          <ul className="list_wrap">
            {this.props.list.map((item,index) => {
              return <li className="list_item" key={index}>
                <span><input checked={item.checked} onChange={event => this.dagou(index,event)} type="checkbox" />{item.value}</span>
                <button className="button" onClick={() => this.handleDelete(index)}>删除</button>
              </li>
            })}
            </ul>
        </div>
        <div className="floor">
          <span>
            <input type="checkbox" onChange={this.allChecked} checked={this.props.list.every(item => item.checked)}/>
            全选/不全选&nbsp;&nbsp;已选中{ this.props.list.reduce((potal,item) =>  potal+= item.checked ? 1 : 0 ,0) }个
          </span>
          <button className="button2" onClick={this.delectSelected}>删除选中项</button>
        </div>
    </div>
    )
  }
  handleClick = (event) => {
    if (event.keyCode === 13) {
      console.log(this.props)
      this.props.addItem(this.inputVal.value)
      this.inputVal.value = ''
    }
  }
  dagou = (index,event) => {
    this.props.changeState(index,event.target.checked)
  }
  handleDelete = (index) => {
    this.props.deleteItem(index)
  }
  delectSelected = () => {
    this.props.deleteSelect()
  }
  allChecked = (event) => {
    this.props.allCheck(event.target.checked)
  }
}
export default connect(
  state => {
    return {
      list: state.list
    }
  },
  {
    addItem: type.addItem,
    deleteItem: type.deleteItem,
    changeState: type.changeState,
    deleteSelect: type.deleteSelect,
    allCheck: type.allCheck
  }
)(Child)
