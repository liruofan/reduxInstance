export const addItem = (val) => {
  return {
    type:'ADD_ITEM',
    value: {value: val, checked: false},
 
  }
}
export const deleteItem = (index) => {
  return {
    type:'DELETE_ITEM',
    index,
  }
}
export const changeState = (index,checked) => {
    return {
      type:'CHANGE_STATE',
      index,
      checked
    }
}
export const deleteSelect = () => {
  return {
    type:'DELETE_SELECT'
  }
}
export const allCheck = (value) => {
  return {
    type:'ALL_CHECK',
    value
  }
}