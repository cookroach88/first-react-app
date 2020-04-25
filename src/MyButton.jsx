import React from 'react';
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
			<div style={{marginTop:'10px'}}>
				<button style={{backgroundColor:'#0074bc', color:'#ffffff'}} onClick={click}>{title}</button>
					{isClicked&&<p>is clicked</p>}
			</div>
		);
		 
	 }
	 
}

export default MyButton;
