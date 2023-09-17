/**
 * Home screen, which is first screen
 * that user sees after signing in.
 * 
 * This can probably be reworked a bit for simplicity!
 */

import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import colors from '../colors';
//import { Entypo } from '@expo/vector-icons';
const ImageUrl = "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Users")}
                style={styles.userListButton}
            >
                <MaterialCommunityIcons name="account-search" size={24} color="white" />
            </TouchableOpacity>
        </View>
        ),
            headerRight: () => (
                <Image
                    source={{ uri: ImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#fff",
        },
        userListButton: {
            backgroundColor: colors.primary2,
            height: 40,
            width: 40,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary2,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginLeft: 20,
            marginBottom: 5,
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });