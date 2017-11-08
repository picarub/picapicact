import { ADD_MUSIC_DATA, DEL_MUSIC_DATA } from './action'


let musicStore = (state = [], action) => {
 switch (action.type) {
  case ADD_MUSIC_DATA:
   return [ action.v, ...state ].filter(function(item, index, self) { return self.findIndex(function(t){ return t.songID === item.songID }) === index })
  case DEL_MUSIC_DATA:
   return []
  default:
   return state 
 }
}

export default musicStore