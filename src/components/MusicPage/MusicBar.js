
export default class MusicBar extends React.Component {
 constructor(props) {
  super(props)
 }
 render(){
  let {data, show, playplay} = this.props
  return (
   <div style={{magin:'0 auto',textAlign:'center'}}>

    {data.map((ea,i) => {
     return(
      <div key={'_tr_'+ i} className='visible-xs rounded animated flipInX' style={{backgroundColor:'#fff',margin:'.6em',boxShadow:'.2em .2em .4em #c5c5c5'}}>
       <div className='row' style={{alignItems:'center'}}> 
        <div className='col-25 hvr-grow' style={{position:'relative', margin:'0 0 -.3em'}} onClick={()=>{playplay(ea.url, i)}}>
         <div className='right' style={{position:'absolute', width:'50%', right:'.1em',bottom:'.25em',color: 'rgba(255,255,255,.9)'}}>
          { !show[i] ? <i style={{display: 'block'}} className='fa fa-play fa-2x'/> : null }
         </div>    
         { show[i] ? <div className='line-scale-party' style={{position:'absolute',right: '0',bottom: '0'}}><div></div><div></div><div></div><div></div></div> : null }
         <img src={ea.imgUrl ? ea.imgUrl : '/r/5.png'} className='rounded' style={{width:'100%'}}/>
        </div>
        <div className='col-75 left' style={{padding:'0 1em'}}>
         <div style={{fontWeight:'bolder',fontSize:'1.1em'}}><a style={{color:'#000'}} target='_blank' href={ea.songUrl}>{ea.songName}</a></div>
         <div style={{whiteSpace: 'nowrap',textOverflow: 'ellipsis',overflow: 'hidden'}}><a style={{color:'#666'}} target='_blank' href={ea.artistUrl}>{ea.artist}</a></div>
         <div style={{color:'#aaa',whiteSpace: 'nowrap',textOverflow: 'ellipsis',overflow: 'hidden'}}>{ea.albumName}</div>
        </div>
       </div>
      </div>
     )  
    })}

    <div className='row'>
    {data.map((ea,i) => {
     return(
      <div key={'_tr_'+ i} className='sm-33 md-25 lg-20 xl-20 invisible-xs animated flipInX' style={{padding:'.6em'}}>
       <div style={{margin:'.3em 0', padding:'0', backgroundColor:'#fff',borderRadius:'.35em',boxShadow:'.25em .25em .5em #c5c5c5'}}>
        <div className='hvr-grow' style={{position:'relative'}} onClick={()=>{playplay(ea.url, i)}}>
         <div className='right' style={{position:'absolute', width:'50%', maxWidth:'100px',right:'.1em',bottom:'.25em',color: 'rgba(255,255,255,.9)'}}>
          { !show[i] ? <i style={{display: 'block'}} className='fa fa-play fa-2x'/> : null }
         </div>    
         { show[i] ? <div className='line-scale-party' style={{position:'absolute',right: '0',bottom: '0'}}><div></div><div></div><div></div><div></div></div> : null }
         <img src={ea.imgUrl ? ea.imgUrl : '/r/5.png'} className='rounded' style={{width:'100%'}}/>
        </div>
        <div className='left' style={{padding:'.5em 1em',height:'8em'}}>
         <div style={{fontWeight:'bolder',fontSize:'1.1em'}}><a style={{color:'#000'}} target='_blank' href={ea.songUrl}>{ea.songName}</a></div>
         <div style={{whiteSpace: 'nowrap',textOverflow: 'ellipsis',overflow: 'hidden'}}><a style={{color:'#666'}} target='_blank' href={ea.artistUrl}>{ea.artist}</a></div>
         <div style={{color:'#aaa',whiteSpace: 'nowrap',textOverflow: 'ellipsis',overflow: 'hidden'}}>{ea.albumName}</div>
        </div>
       </div>
      </div>
     )  
    })}
    </div>
    
   </div>
  ) 
 }
}



//  let time = moment({m:0,s:0}).seconds(ea.duration).format('mm:ss')