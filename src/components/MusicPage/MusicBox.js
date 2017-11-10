import { addMusicData, addMemberInfo, addAkbPost, addTubeData, addDramaData, addMotionData } from '../../store/action'
import store from '../../store/store'
import MusicBar from './MusicBar'

export default class MusicBox extends React.Component{
 constructor(props) {
  super(props)
  this.state = {
   songs: this.props.data,                
   playing: Array(500).fill(false),        /* playing： 列表每首歌曲对应的播放状态，默认列表最长500首 */
   show: Array(500).fill(false),           /* show： 歌曲播放时小动画状态 */
   volume: .4                              /* 音量变量，先保留 */ 
  }
  this.music = new Audio()
  this.playplay = this.playplay.bind(this)
 }

 componentWillReceiveProps(nextProps){      /* props绑定了redux的数据， 当props变化也去改变state。（这里可直接使用props.data而不用此生命周期方法） */
  if (this.porps != nextProps) {
   this.setState({songs: nextProps.data})
  }
 }

 playplay(ss,i){
  if (!this.music.src || this.music.src !== ss) { this.music.src = ss }   /* 如果未播放过或点击不同歌曲播放，设定src属性值 */
  this.music.volume = .38                                                 /* 音量 */
  if (this.state.playing[i] === true) {                                   /* 如果歌曲在播放，处理显示，暂停歌曲 */
   this.setState({playing: this.state.playing.fill(false), show:this.state.show.fill(false)})   
   console.log('stop')
   this.music.pause()
   return
  }
  if (this.state.playing[i] === false) {                                   /* 如果歌曲暂停，显示当前曲目小动画， 播放歌曲 */
   this.setState({playing: this.state.playing.fill(false), show:this.state.show.fill(false)})
   this.setState({playing: this.state.playing.fill(true,i,i+1), show:this.state.show.fill(true,i,i+1)})
   console.log('play')
   this.music.play()
   this.music.onended = () => {                                            /* 处理歌曲播放完后显示 */
    this.setState({playing: this.state.playing.fill(false), show:this.state.show.fill(false)})
   }
   return
  }
 }
 

 render() {
  return ( <MusicBar data={this.state.songs} show={this.state.show} playplay={this.playplay}></MusicBar> )
 }
}

