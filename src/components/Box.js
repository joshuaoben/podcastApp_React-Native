import React from 'react';
import { View, Text, Image} from 'react-native';
import Play from './Play';

const Box = (props) => {
	const { boxStyle, numberStyle, subTitleStyle, titleStyle, imageStyle } = styles;
	return(
		<View style={boxStyle}>
			<Text style={numberStyle}>{props.number}</Text>
			<Text style={subTitleStyle}>{props.subtitle}</Text>
			<Text style={titleStyle}>{props.title}</Text>
			<Play />
		</View>

		)
};

const styles ={
	boxStyle: {
		width: '98%',
		justifyContent: 'center',
		padding: 20,
		marginBottom: 20,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {width: 10, height: 20},
		shadowOpacity: 0.9,
		shadowRadius: 5,
		elevation: 1, 
		backgroundColor: 'rgba(255,255,255,0.5)',
		borderColor: 'transparent'
	},
	numberStyle: {
		color: 'rgb(90,100,0)',
		fontSize: 15,
		fontFamily: 'AvantGarde',
		marginBottom: 20
	},
	subTitleStyle: {
		fontFamily: 'AvantGarde',
		color: 'rgb(90,100,0)',
		fontSize: 10
	},
	titleStyle: {
		fontFamily: 'AvantGarde',
		color: 'rgb(0,50,100)',
		fontSize: 20,
		marginBottom: 20
	},
	imageStyle: {
		width: 30,
		height: 30,
		margin: 0,
		marginBottom: 30
	}
}

export default Box;