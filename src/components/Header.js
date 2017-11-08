
import { Link } from 'react-router-dom'
import Search from './Search'

let HeaderImg = props => (                                   /* 复用图片组件 */
 <Link to={props.to} className='col-3 sm-2'>
  <img src={props.src} className='hvr-grow' style={{height:'2.5em'}}/>
 </Link>
)

let Header = props => (                                       /*  */
 <div className='root'>
  <header className='header'>
   <div className='hb'>
    <div className='hbb row' style={{justifyItems:'center',height: '3.5em'}}>
     <Link to='jpop' className='col-6 sm-4 left' style={{padding:'.3em 0 0 .5em',overflow:'hidden'}}>
      <img className='hvr-grow' src='/r/l.png' style={{height:'3em'}}/>&nbsp;React
     </Link>
     <Search c='sm-4 center invisible-xs' s={{padding:'.1em .75em 0 0'}}/>
     <div className='col-6 sm-4 right' style={{padding:'.4em .5em 0 0'}}>
      <div style={{display: 'flex',alignItems:'center'}}>
       <div className='col-3 sm-6'></div>
       <HeaderImg src='/r/5.png' to='idolpost'/>
       <HeaderImg src='/r/maru.png' to='music'/>
       <HeaderImg src='/r/sun5.png' to='video'/>
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
