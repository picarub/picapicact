
import { Link } from 'react-router-dom'
import Search from './Search'

let HeaderImg = props => (                                   /* 复用图片组件 */
 <Link to={props.to} className='col-50 sm-35'>
  <img src={props.src} className='hvr-grow' style={{height:'2.75em'}}/>{props.label}
 </Link>
)

let Header = props => (                                       /*  */
 <div className='root'>
  <header className='header'>
   <div className='hb'>
    <div className='row' style={{justifyItems:'center',height: '3.5em'}}>
     <a href='/music' className='col-50 sm-35 left' style={{padding:'.3em 0 0 .5em',overflow:'hidden'}}>
      <img className='hvr-grow' src='/r/l.png' style={{height:'3em'}}/>&nbsp;React
     </a>
     <Search c='sm-30 center invisible-xs' s={{padding:'.1em .75em 0 0'}}/>
     <div className='col-50 sm-35 right' style={{padding:'.4em .5em 0 0'}}>
      <div style={{display: 'flex',alignItems:'center'}}>
       <div className='sm-30'></div>
       <HeaderImg src='/r/maru.png' to='jpop' label='听音乐'/>
       <HeaderImg src='/r/5.png' to='idolpost' label='看PO文'/>
      </div>
     </div>
    </div>
   </div>
  </header>
  {props.children}
  <footer style={{color:'#777'}}> (c) 2017 picarub </footer>
 </div>
)

export default Header
