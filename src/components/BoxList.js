import React,  {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Box from './Box';
import axios from'axios';

class BoxList extends Component{
	const {boxListStyle} = styles;

	state = {
		pods: []
	};

	componentWillMount(){
		axios.get('../data.json').then(response => this.setState({pods: response.data }));
	}

	renderBoxList



	render(){

	return(
			<View style={boxListStyle}>
				<Box number={1} subtitle={'Why You should Learn'} title={'Web Development as a problem solver'} />
				<Box number={2} subtitle={'Fun tips about'} title={'Living as a Programmer'} />
				<Box number={3} subtitle={'Pros and Cons of'} title={'Learning Programming by yourself'} />
			</View>
		)
}
}
const styles = {
	boxListStyle: {
		backgroundColor: 'rgba(0,0,0,0.1)',
		padding: 10,
		width: '100%'
	}
}


export default BoxList;