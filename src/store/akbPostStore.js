import { ADD_AKB_POST, DEL_AKB_POST } from './action'

let akbPostStore = (state = [], action) => {
 switch (action.type) {
  case ADD_AKB_POST:
   return [action.v, ...state].filter(function(item, index, self) { return self.findIndex(function(t){ return t.post_id === item.post_id }) === index })
  case DEL_AKB_POST:
   return []
  default:
   return state 
 }
}

export default akbPostStore