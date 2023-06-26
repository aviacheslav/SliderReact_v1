import React from 'react';
import data from './data.js'; //`
import './styles.css';

class Slider extends React.Component {
    constructor(props) {
      super(props);
      //
      this.state = {
          activeN:1,
          quantity:data.length,//not very good
          timeInternalMs:1000,
          autoScrollOn: true,
          //aTimer:null,
      };
    }

    componentDidMount(){
        this.startAutoScroll();
    }

    leftClickHandler=()=>{
       this.scrollPrev();
       this.stopAutoScroll();
        if(this.state.autoScrollOn){
            this.startAutoScroll();
        }
    }
    rightClickHandler=()=>{
        this.scrollNext();
        this.stopAutoScroll();
        if(this.state.autoScrollOn){
            this.startAutoScroll();
        }
    }
    /*setIntervalClickHandler=()=>{
        //const timeRange=+prompt("Input time interval in milliseconds");
        let timeRange=this.state.timeInternalMs;
        alert("Current time interval in milliseconds is:"+this.state.timeInternalMs);
        const txt=prompt("Input time interval in milliseconds");
        if(txt!=="" ){
            timeRange=+txt;
        }
        this.setState({timeInternalMs: timeRange});
        
        this.stopAutoScroll();
        if(this.state.autoScrollOn){
            this.startAutoScroll();
        }
    }*/
    timerIntervalSwitcherClickHandler=(e)=>{
        let val=+e.target.value;
        this.setState({timeInternalMs: val});
    }

    timerSwitcherClickHandler=()=>{
        const {autoScrollOn} = this.state;
        autoScrollOn ?  this.stopAutoScroll() : this.startAutoScroll();
        this.setState({autoScrollOn: !this.state.autoScrollOn});
        //
        alert("Auto scroll mode: "+this.state.autoScrollOn);
     }

    startAutoScroll=()=>{
        //why error if ecri function?
        //let currentN=this.state.timeInternalMs;
        //this.setState({timerId: setInterval(this.scrollNext, this.state.timeInternalMs)});
        this.setState({autoScrollOn: true});
        this.timerId=setInterval(this.scrollNext, this.state.timeInternalMs);
    }

    stopAutoScroll=()=>{
        //why error if ecri function?
        //let currentN=this.state.timeInternalMs;
        //this.setState(clearInterval(this.timerId));
        this.setState({autoScrollOn: false});
        clearInterval(this.timerId);
    }

    scrollPrev=()=>{
        if(this.state.activeN>1){
            this.setState({activeN: this.state.activeN-1});
            //t//his.state.activeN--;
        }else{
            //this.state.activeN=this.state.quantity;
            this.setState({activeN: this.state.quantity});
        }
    }

    scrollNext=()=>{
        if(this.state.activeN<this.state.quantity){
            this.setState({activeN: this.state.activeN+1});
            //t//his.state.activeN--;
        }else{
            //this.state.activeN=this.state.quantity;
            this.setState({activeN: 1});
        }
    }

    render() {
        const {activeN, autoScrollOn}=this.state;
        return (
        <article>
            <div>
                <h1>Enjoy our Universe</h1>
                <label htmlFor="autoScrollSwitcher">AutoScroll </label>
                <label htmlFor="timerIntervalSet">Timer interval </label>
                <input type="checkbox" id="autoScrollSwitcher" value="AutoScrollMode" onChange={this.timerSwitcherClickHandler } checked={autoScrollOn}></input> 
                <input type="number" id="timerIntervalSet" defaultValue="1000" onChange={this.timerIntervalSwitcherClickHandler } checked={autoScrollOn}/>
                
            </div>    
            <main>
                <button onClick={this.leftClickHandler} className="Button leftButton">
			        {'<'}
		        </button>
		        <button onClick={this.rightClickHandler} className="Button rightButton">
                    {'>'}
		        </button> 
                <section>
			        <h2>
				        {data[activeN-1].caption}
			        </h2>
			        <div>
                        <img src={data[activeN-1].imgSrc} alt={data[activeN-1].imgAlt}/> 
				    </div>
			        <p>
				        {data[activeN-1].text}
			        </p>
		        </section>
		    </main>
        </article>//);
        );
    }//render
} //classcomponent

export default Slider;