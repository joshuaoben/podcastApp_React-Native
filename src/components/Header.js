import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Header = () => {
	const {viewStyle, textStyle, mainStyle, subText} = styles;
	return(
			<View style={mainStyle}>
				<View style={viewStyle}>
			 		<Text style={textStyle}> Podcast </Text>
				</View>
			</View>
		);
};

const styles={
	mainStyle: {
		width: '100%'
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
		marginBottom: 0,
		width: '100%'
	},
	textStyle: {
		fontFamily: 'AvantGarde',
		fontSize: 14,
		padding: 10,
		color: '#fff'
	}
}

export default Header;