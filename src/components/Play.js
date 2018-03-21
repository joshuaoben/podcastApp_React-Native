import React from 'react';
import { View, Image, Text } from 'react-native';

const Play = () => {
	const { playStyle } = styles;
	return(
			<View style={playStyle}>
				<Text style={{color: '#fff'}}> Play </Text>
			</View>
		)
} ;

const styles={
	playStyle: {
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 40,
		width: '100%',
		backgroundColor: '#333'
	}
}

export default Play;