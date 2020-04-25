import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import StartPage from './StartPage';

class App extends React.Component {
	/*
	 *  ...
	 */
	state={isClicked:false};
	click = () => {
		this.setState({isClicked:true}) 
	 }
 /*
  *  ...
  */	 
 render(){
  return (
  <div>
    <div className="App">
	{!this.state.isClicked&&
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <MyButton title={'Start'} isClicked={this.state.isClicked} click={this.click}/>
      </header>
	}
	  {this.state.isClicked&&<StartPage/>}
    </div>
	
  </div>
  );
}
}

export default App;
