export const changeList = (state = [], action) => {
  let cloneList = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.value]
    case 'DELETE_ITEM':
      cloneList.splice(action.index,1)
      return cloneList
    case 'CHANGE_STATE':
      cloneList[action.index].checked = action.checked
      return cloneList
    case 'DELETE_SELECT':
      return state.filter(item => !item.checked)
    case 'ALL_CHECK':
      cloneList.forEach(item => item.checked = action.value)
      return cloneList
    default:
      return []
  }
}