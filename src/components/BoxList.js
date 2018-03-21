import React,  {Component} from 'react';
import {Text, View, Image} from 'react-native';
import pods from '../data.json';
import Box from './Box';


class BoxList extends Component{

	state = { pods: [] };

	componentWillMount(){
		this.setState({pods: pods });
	}

	renderBoxList(){
		return this.state.pods.map(pod =>
			<Box pod={pod} key={pod.number} />
			);
	}

	render(){

	const styles = {
		boxListStyle: {
			backgroundColor: 'rgba(0,0,0,0.1)',
			padding: 10,
			width: '100%'
		}
	}

	return(
			<View style={styles.boxListStyle}>
				{ this.renderBoxList() }
			</View>
		);
	}
}

export default BoxList;