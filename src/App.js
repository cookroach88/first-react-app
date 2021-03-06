import React from 'react';
import logo from './img/cookroach_neg.png';
import './css/App.css';
import MyButton from './components/MyButton';
import StartPage from './js/StartPage';


 /*  -----------------------------
  *  create App-class as mainpage 
  *  to startpoint for application
  --------------------------------*/
class App extends React.Component {
	// source reference:
	// https://de.reactjs.org/docs/state-and-lifecycle.html
	// ...
	// initialize this.state with date-object
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
	}
	// browser called after each '1s' the tick-method 
	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
	);
	}
	// ...
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	/*
	 *  define methods for the class
	 */
	// tick-method (called by browser after each '1s)
	tick() {
		this.setState({
		date: new Date()
		});
	}
	state={isClicked:false};
	click = () => {
		this.setState({isClicked:true}) 
	 }
	 
 /*
  *  render the html into class App
  */	
render(){
  return (
  <div>
    <div className="App">
	{!this.state.isClicked&&
      <header className="App-header">
	    <p>Let's get started now !</p>
		<p>&nbsp;</p>
		<p>{this.state.date.toLocaleTimeString()}</p>
		<p>&nbsp;</p>
        <img src={logo} className="App-logo" alt="logo" />
		  <p>&nbsp;</p>
		  <p>&nbsp;</p>
          <MyButton title={'Start'} isClicked={this.state.isClicked} click={this.click}/>
      </header>
	}
	  {this.state.isClicked&&<StartPage/>}
    </div>
  </div>
  );
}
}

/* --------------------------------------------- 
         all this code is under CC-BY-4.0-Lizenz
         author:        rogercov70@yahoo.de
         start on:      2020-04-26
         enjoy and have fun forever
   --------------------------------------------- */
   
/* ---------------------------------------------
 * after your works please delete all comments 
 * here and write all this informations into a 
 * special documentation file => comments.md
 * --------------------------------------------- */

export default App;
