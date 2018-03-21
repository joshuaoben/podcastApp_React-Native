import React from 'react';
import {View, Text} from 'react-native';

const SubHead = () =>{
	const {subText, mainStyle} = styles;
	return(
			<View style={mainStyle}> 
				<Text style={subText}> We live one day at a time, learning all we can about ourselves and why we are here. </Text>
			</View>
		)
};

const styles = {
	mainStyle: {
		backgroundColor: '#003264',
		alignItems: 'center',
		width: '100%'
	},
	subText: {
		marginBottom: 10,
		color: '#fff',
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		fontFamily: 'AvantGarde',
		fontSize: 15,
		justifyContent:'center'
	}
}

export default SubHead;