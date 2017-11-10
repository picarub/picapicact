import { urlrify } from '../util'

export default class AkbPost extends React.Component{
 constructor(props) {
  super(props)
  this.state = {posts: this.props.posts}
 }

 componentWillReceiveProps(nextProps){      /* props绑定了redux的数据， 当props变化也去改变state。（这里可直接使用props而不用此生命周期方法） */
  if (this.porps != nextProps) {
   this.setState({posts: nextProps.posts})
  }
 }

 render(){
  let now = moment()
  return(
   <div style={{margin:'0 auto',maxWidth:'600px'}}>  
    {this.state.posts.map((po, i) => { 
     return(
      <div key={'po_s'+ i} className='post-margin'>
       <div className='post'>
        <div className='left row' style={{alignItems:'center',padding:'1em 0 1em 1em',borderBottom:'solid 1px #e9e9e9'}}>        
         <a target='_blank' href={po.twitter}><img src={po.icon} className='circle' style={{maxWidth:'32px',border:'solid 1px #e9e9e9'}}/></a>
         <a target='_blank' href={po.twitter} style={{fontWeight:'bolder',color:'#000'}}>&nbsp;&nbsp;{po.name}</a>  
        </div>
        <div style={{background:'#fff'}}>
         <img src={po.thumbnail_url} style={{width:'100%'}}/>
        </div> 
        <div style={{padding:'1em'}} className='left'>
         <div dangerouslySetInnerHTML={{__html: urlrify(po.content)}}></div>
         <div style={{fontSize:'.75em',color:'#aaa'}}> {moment(po.post_date).from(now)} </div>   
        </div>
       </div>
      </div>
     )
    })}
   </div>
  )
 }
}