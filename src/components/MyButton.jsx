import React from 'react';
import styles from '../css/button.css';
/*
 *  ...
 */
class MyButton extends React.Component{
	/*
	 *  ...
	 */
	 
	 render(){
		 var title=this.props.title;
		 var isClicked=this.props.isClicked;
		 var click=this.props.click;
		 return (
			<div style={{marginTop:'20px'}}>
				<button onClick={click}>{title}</button>
			</div>
		);
		 
	 }
	 
}

export default MyButton;
