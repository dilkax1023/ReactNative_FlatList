import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
} from 'react-native';

import SvgUri from 'react-native-svg';

const App = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const url = 'http://restcountries.eu/rest/v2/all';
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		setCountries(data);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.h1}>Country - Capital</Text>
			<FlatList
				data={countries}
				renderItem={({ item }) => {
					return (
						<View>
							<Text style={styles.item}>
								{item.name} - {item.capital}
							</Text>
						</View>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	h1: {
		textAlign: 'center',
		fontSize: 30,
		marginVertical: 50,
		color: '#4589ff',
		fontWeight: 'bold',
	},
	item: {
		backgroundColor: '#119191',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		color: '#fff',
		fontSize: 16,
		textAlign: 'center',
		letterSpacing: 1.3,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 32,
	},
	stretch: {
		width: 50,
		height: 200,
		resizeMode: 'stretch',
	},
});

export default App;
