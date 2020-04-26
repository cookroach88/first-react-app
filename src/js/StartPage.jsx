import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from '../components/MyButton';
import '../css/style.css';
import LoginPage from '../js/LoginPage';
/*
 *  create StartPage-funtion
 */
 
class StartPage extends React.Component{
	state={isClicked:false};
	click = () => {
		this.setState({isClicked:true}) 
	 }
	 /*
	  *  ...
	  */
render(){
		/*
		 *  ...
		 */
		return (
		<div>
		{!this.state.isClicked&&
			<table border='1' width='100%'>
				<tr>
					<td width='50%'>
						<b class='big'>1. Let's get started now!</b>
						<p>Login here:</p>
						<MyButton title={'Login'} isClicked={this.state.isClicked} click={this.click}/>
					</td>
					<td width='50%'>
						1.Zeile rechts
					</td>
				</tr>
				<tr>
					<td>2.Zeile links</td>
					<td>2.Zeile rechts</td>
				</tr>
				<tr>
					<td>3.Zeile links</td>
					<td>3.Zeile rechts</td>
				</tr>
				<tr>
					<td>4.Zeile links</td>
					<td>4.Zeile rechts</td>
				</tr>
				<tr>
					<td>5.Zeile links</td>
					<td>5.Zeile rechts</td>
				</tr>
			</table>
		}
		{this.state.isClicked&&<LoginPage/>}
		</div>
		);
		
	}
	
}

export default StartPage;