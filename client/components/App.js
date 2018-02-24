import React, { Component } from 'react'; 
import Canvas from './CanvasBoard';
import MessageBox from './MessageBox';
import Users from './Users'
import GuessWord from './GuessWord'

class App extends Component {
	constructor(){
		super();
	}

<<<<<<< HEAD
	// <Users />
	// <MessageBox />
	render() {
		return(
			<div>
			 	<Canvas />
			 	<Users />
				<MessageBox />
			</div>
=======
	render() {
		return(
			<div className="gameContainer">
			 	<Canvas /> 
			 	<section className="messageContainer">
					<GuessWord /> 
			 		<h2>Players</h2>
				 	<Users /> 
					<MessageBox />  
				</section>
			</div> 
>>>>>>> ca54eba01b97c9be9464966c3d440a9fc4e9b4ce
		);
	}
}


export default App;
