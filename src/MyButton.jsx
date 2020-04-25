import React from 'react';
/*
 *  create MyButton-class
 */
class MyButton extends React.Component{
	/*
	 * render html for MyButton
	 */
	 
	 render(){
		 // define props for MyButton
		 var title=this.props.title;
		 var isClicked=this.props.isClicked;
		 var click=this.props.click;
		 return (
			<div style={{marginTop:'30px'}}>
				<button style={{backgroundColor:'#0074bc', color:'#ffffff'}} onClick={click}>{title}</button>
					{isClicked&&<p>is clicked</p>}
			</div>
		);
		 
	 }
	 
}

export default MyButton;
