import React,{Component} from 'react'
import './index.css'

let counter = 0;
class  App extends Component {
  
  state={
    hour:0,
    minute:0,
    second:0,
    status_first_button:'start',
  };
  change_status = () =>{
    if(this.state.status_first_button!=='stop'){
      this.timer  = setInterval(()=>{
        let hours = this.state.hour;
        let minutes = this.state.minute;
        let seconds = this.state.second;
        seconds+=1;
        if(seconds===60){
          seconds = 0;
          minutes++;
        }
        if(minutes===60){
          hours++;
        }
        this.setState({
          hour:hours,
          minute:minutes,
          second:seconds,
        })
      },1000);
    }
    if(this.state.status_first_button==='stop'){
      this.reset();
      clearInterval(this.timer);
    }
    this.setState({status_first_button:this.state.status_first_button==='start'?'stop':'start'});
  };
  reset = () =>{
    let {hour,minute,second} = this.state;
    hour = 0;
    minute =0;
    second = 0;
    this.setState({hour,minute,second}); 
  }
  waiting = () =>{
    let timer ;
    counter++;
    if(counter === 2){
        clearInterval(this.timer);
        this.setState({status_first_button:this.state.status_first_button==='start'?'stop':'start'});
        clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      counter = 0;
    },350);
  }
  render(){
    return(
      <div className='mainClass'>
        <ul className='time'>
          <li>
            {this.state.hour}:
          </li>
          <li>
            {this.state.minute}:
          </li>
          <li>
            {this.state.second}
          </li>
        </ul>
        <div className='button_group'>
        <button onClick={this.change_status}>{this.state.status_first_button}</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.waiting}>Waiting</button>
        </div>
      </div>
    )
  }
}

export default App;
