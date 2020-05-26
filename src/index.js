import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Loader from './Loader';
import UserForm from './Form';
import ShowTime from './ShowTime';

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(err) => console.log(err)
// 	);

// 	return <div>Hi there!</div>
// }

class App extends React.Component{

	state = {lat:null, errorMessage:''};

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => {this.setState({lat:position.coords.latitude})},
			(err) => this.setState({errorMessage: err.message})
		);
	}
	componentDidUpdate(){
		console.log("My component did update, it re-rendered");
	}

	renderContent(){
		if(this.state.errorMessage && !this.state.lat){
			return 	<div>Error: {this.state.errorMessage}</div>
		}
		if(this.state.lat && !this.state.errorMessage){
			return <SeasonsDisplay lat={this.state.lat}/>
			
		}
		return <div><Loader message="Please accept location request."/></div>
	}

	render(){
		return(
			<div className="redBorder">
			{this.renderContent()}
			<ShowTime/>
			<UserForm/>
		</div>
		)	
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));