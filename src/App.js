import React,{Component} from 'react'
import Child from './containers/children/children'
import {Provider} from 'react-redux'
import store from './store/store'
export default class App extends Component {
  render () {
    return (
    <Provider store={store}>
      <Child/>
    </Provider>
    )
  }
}