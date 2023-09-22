/**
 * User list screen, where one user can find
 * all other users who are registered on the
 * app
 * 
 */

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { doc, onSnapshot, collection } from 'firebase/firestore';
import { database } from "../config/firebase";


const Users = () => {
	const [users, setUsers] = useState([]);
	//const userRef = firebase.firestore().collection('users');
	const userRef = doc(database, "users", setUsers);

	useEffect(async () => {
		userRef
		.onSnapshot(
			querySnapshot => {
				const users = []
				querySnapshot.forEach((doc) => {
					//const { heading, text } = doc.data()
					users.push({
						id: doc.id,
						//heading,
						//text,
					})
				})
				setUsers(users)
			}
		)
	}, [])

	return (
	    <View>
      	<FlatList
        	data={users}
        	keyExtractor={(item) => item.id}
        	renderItem={({ item }) => (
          		<View style={styles.item}>
            	<Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>

	);
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  text: {
  	fontSize: 25,
  	fontFamily: 'Helvetica Neue'
  }
});


export default Users;
///}


///const Users = () => {
/*
	const data = [
	    { id: '1', text: 'Item 1' },
	    { id: '2', text: 'Item 2' },
	    { id: '3', text: 'Item 3' },
	    // Add more items as needed
	  ];
*/

// 	return (
// 	    <View>
//       	<FlatList
//         	data={users}
//         	keyExtractor={(item) => item.id}
//         	renderItem={({ item }) => (
//           		<View style={styles.item}>
//             	<Text style={styles.text}>{item}</Text>
//           </View>
//         )}
//       />
//     </View>

// 	  );
// }

// const styles = StyleSheet.create({
//   item: {
//     borderBottomWidth: 1,
//     padding: 10,
//     borderColor: 'lightgray',
//     backgroundColor: 'white',
//   },
//   text: {
//   	fontSize: 25,
//   	fontFamily: 'Helvetica Neue'
//   }
// });


// export default Users;