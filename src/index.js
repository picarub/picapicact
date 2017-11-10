import { Provider, connect } from 'react-redux'       
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store/store'
import { getfetch } from './store/util'
import { addMusicData, addAkbPost } from './store/action'
import NoMatch from './components/NoMatch'
import Header from './components/Header'
import MusicBox from './components/MusicPage/MusicBox'
import AkbPost from './components/IdolPostPage/AkbPost'
import Search from './components/Search'


let stpMusic = state => ({data: state.musicStore})      /* props绑定redux数据 */
let stpAkbPost = state => ({posts: state.akbPostStore})

let MusicBox1 = connect(stpMusic)(MusicBox)             /* connect到redux数据的组件 */
let Akb48 = connect(stpAkbPost)(AkbPost)

let Fit = props => (
 <div style={{margin:'1em auto',maxWidth:'1200px',textAlign:'center'}}>
  <div className='row page' style={{justifyItems:'center'}}>
   <div className='sm-1 md-2 lg-3 invisble-xs visible-xl' style={props.s}>
   </div>
   <div className='col-12 sm-10 md-8 lg-6 center'>
    {props.children}
   </div>
  </div>
 </div>
)


let MusicPage = props => (                               /* 组装页面 */
 <div style={{margin:'1em auto',maxWidth:'1200px',textAlign:'center'}}>
  <div className='row page' style={{justifyContent:'center'}}>                       
   <div className='sm-90 md-85 lg-80 center' style={{maxWidth:'900px'}}>
    <Search c='visible-xs' s={{margin:'0 .75em .5em 0'}}/>
    <MusicBox1/>
   </div>
  </div>   
 </div>
)


let IdolPostPage = props => (                             /* 组装页面 */
 <div style={{margin:'1em auto',maxWidth:'1200px',textAlign:'center'}}>
   <div className='row page' style={{justifyItems:'center'}}>
    <div class='sm-10 md-15 lg-20 invisible-xs visible-xl'></div>
    <div className='sm-80 md-70 lg-60 center'>    
     <Search c='visible-xs col-12' s={{margin:'0 0 -1em 0'}}/>
     <Akb48/>
    </div>
   </div>
 </div>   
)


let Page404 = props => (
 <Fit>
  <NoMatch location={location} />
 </Fit>
)

class Rt extends React.Component {                         /* 根组件 */
 constructor(props){
  super(props)
  this.getfetch = getfetch
 }
 componentDidMount() {
  this.getfetch('/a/find?keyword=fi', addMusicData)
  this.getfetch('/a/find?timeline', addAkbPost, 1)
 }
 render() {
  return (
   <Provider store={store}>
   <Router>
    <Header>
    <Switch>
     <Route exact path='/' component={Page404}/>
     <Route path='/jpop' component={MusicPage}/>
     <Route path='/idolpost' component={IdolPostPage}/>
     <Route path='/idol' component={Page404}/>
     <Route path='/mv' component={Page404}/>
     <Route path='/video' component={Page404}/>
     <Route component={Page404}/>
    </Switch>
    </Header>
   </Router>
   </Provider>
  )
 }
}

ReactDOM.render( <Rt/>, document.getElementById('root') )     /* 渲染到 div#root */
