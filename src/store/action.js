const ADD_MUSIC_DATA = 'ADD_MUSIC_DATA'
const DEL_MUSIC_DATA = 'DEL_MUSIC_DATA'
const ADD_MEMBER_INFO = 'ADD_MEMBER_INFO'
const DEL_MEMBER_INFO = 'DEL_MEMBER_INFO'
const ADD_AKB_POST = 'ADD_AKB_POST'
const DEL_AKB_POST = 'DEL_AKB_POST'
const ADD_TUBE_DATA = 'ADD_TUBE_DATA'
const DEL_TUBE_DATA = 'DEL_TUBE_DATA'
const ADD_DRAMA_DATA = 'ADD_DRAMA_DATA'
const DEL_DRAMA_DATA = 'DEL_DRAMA_DATA'
const ADD_MOTION_DATA = 'ADD_MOTION_DATA'
const DEL_MOTION_DATA = 'DEL_MOTION_DATA'



let addMusicData = v => ({type: ADD_MUSIC_DATA, v})
let delMusicData = v => ({type: DEL_MUSIC_DATA, v})
let addMemberInfo = v => ({type: ADD_MEMBER_INFO, v})
let delMemberInfo = v => ({type: DEL_MEMBER_INFO, v})
let addAkbPost = v => ({type: ADD_AKB_POST, v})
let delAkbPost = v => ({type: DEL_AKB_POST, v})
let addTubeData = v => ({type: ADD_TUBE_DATA, v})
let delTubeData = v => ({type: DEL_TUBE_DATA, v})
let addDramaData = v => ({type: ADD_DRAMA_DATA, v})
let delDramaData = v => ({type: DEL_DRAMA_DATA, v})
let addMotionData = v => ({type: ADD_MOTION_DATA, v})
let delMotionData = v => ({type: DEL_MOTION_DATA, v})



export { 
 ADD_MUSIC_DATA,
 DEL_MUSIC_DATA,
 ADD_MEMBER_INFO,
 DEL_MEMBER_INFO,
 ADD_AKB_POST,
 DEL_AKB_POST,
 ADD_TUBE_DATA,
 DEL_TUBE_DATA,
 ADD_DRAMA_DATA,
 DEL_DRAMA_DATA,
 ADD_MOTION_DATA,
 DEL_MOTION_DATA,
 addMusicData,
 delMusicData,
 addMemberInfo,
 delMemberInfo,
 addAkbPost,
 delAkbPost,
 addTubeData,
 delTubeData,
 addDramaData,
 delDramaData,
 addMotionData,
 delMotionData
}