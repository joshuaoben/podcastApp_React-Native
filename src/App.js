import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from './components/Header';
import BoxList from './components/BoxList';
import SubHead from './components/SubHead';

const App = () => {
	const {body} = styles;
	return(
	<View style={body}>
		<Header />
		<ScrollView>
			<SubHead />
			<BoxList />
		</ScrollView>
	</View>
	)
}

styles={
	body: {
		alignItems: 'center'
	}
}

export default App;