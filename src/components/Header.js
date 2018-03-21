import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
	const {viewStyle, textStyle, mainStyle, subText} = styles;
	return(
			<View style={mainStyle}>
				<View style={viewStyle}>
			 		<Text style={textStyle}> Podcast </Text>
				</View>
				<Text style={subText}> We live one day at a time, learning all we can about ourselves and why we are here. </Text>
			</View>
		);
};

const styles={
	mainStyle: {
		backgroundColor: '#820',
		alignItems: 'center'
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
		marginBottom: 10,
		width: '100%'
	},
	textStyle: {
		fontSize: 20,
		padding: 20,
		color: '#fff'
	},
	subText: {
		marginBottom: 10,
		color: '#fff',
		padding: 15
	}
}

export default Header;