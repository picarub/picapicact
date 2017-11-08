
//import withRouter from 'react-router-dom'
import { addMusicData,
 delMusicData,
 addTubeData, 
 delTubeData, 
 addAkbPost, 
 delAkbPost, 
 addDramaData, 
 delDramaData,
 addMotionData,
 delMotionData,
 addMemberInfo,
 delMemberInfo } from '../store/action'
import store from '../store/store'
import { getfetch } from '../store/util'

export default class Search extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   placeholder: 'ヘビーローテーション',
   input: ''
  }
  this.gofetch = getfetch
  this.handleInput = this.handleInput.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleSubmitClick = this.handleSubmitClick.bind(this)
 }
 
 componentDidMount(){                          /* 输入框placeholder按照当前页面变化而变化 */         
  setInterval(() => {
   let pn = window.location.pathname
   if (pn === '/jpop') {
    return this.setState({placeholder:'ヘビーローテーション'})
   }
   if (pn === '/mv') {
    return this.setState({placeholder:'ミュージックビデオ'}) 
   }
   if (pn === '/video') {
    return this.setState({placeholder:'動画'}) 
   }
   if (pn === '/idolpost') {
    return this.setState({placeholder:'矢吹 奈子'}) 
   }
   if (pn === '/drama') {
    return this.setState({placeholder:'ドラマ'}) 
   }
   if (pn === '/idol') {
    return this.setState({placeholder:'アイドル'}) 
   }       
  }, 1000)
 }

 handleInput(e){                                 /* 处理输入变化 */
  e.preventDefault()
  this.setState({input: e.target.value})
 }

 handleSubmit(e){                                 /* 处理提交输入 */
  e.preventDefault()
  if (e.key === 'Enter' && this.state.input.length > 0) {
   this.gofindit()  
  }
 }

 handleSubmitClick(e){                            /* 处理点击输入框搜素图标事件 */
  e.preventDefault()
  if (this.state.input.length > 0) {
   this.gofindit()
  }
 }

 gofindit(){                                      /* 根据当前导航路径发送适当的请求 */
  let loc = window.location.pathname
  let url = ''
  if (loc === '/jpop') {
   url = '/a/find?keyword=' + this.state.input.trim()
   this.gofetch(url, addMusicData)
   return this.setState({input:''})
  }
  if (loc === '/mv'){
   url = '/a/find?yt=' + this.state.input.trim()
   this.gofetch(url, addTubeData, 1)
   return this.setState({input:''})
  }
  if (loc === '/video'){
   url = '/a/find?dm=' + this.state.input.trim()
   this.gofetch(url, addMotionData, 1)
   return this.setState({input:''})
  }
  if (loc === '/idolpost') {
   url = '/a/find?timeline=' + this.state.input.trim()
   this.gofetch(url, addAkbPost, 1)
   return this.setState({input:''})
  }
  if (loc === '/drama'){
   url = '/a/find?drama=' + this.state.input.trim()
   this.gofetch(url, addDramaData, 1)
   return this.setState({input:''})
  }
  if (loc === '/idol'){
   url = '/a/find?member=' + this.state.input.trim()
   this.gofetch(url, addMemberInfo)
   return this.setState({input:''})
  }
 }

 render() {
  let { c, s } = this.props
  return (
    <div className={c} style={s}>
     <div style={{maxWidth:'16em',margin:'0 auto',padding:'.3em 0 0',position:'relative',width:'100%',height:'3em'}}>       
      <i className='fa fa-search hvr-grow' style={{margin:'.75em 0 0',padding:'0',position:'absolute',right:'0',color:'#bbb'}} onClick={this.handleSubmitClick}></i>
      <input className='search' type="text" style={{margin:'0',padding:'0 .5em',width:'100%',height:'2.5em', borderRadius:'.5em', border:'1px solid #ccc', WebkitAppearance:'none'}} value={this.state.input} placeholder={this.state.placeholder} onChange={this.handleInput} onKeyUp={this.handleSubmit
       }/>      
     </div>
    </div>
  )
 }

}