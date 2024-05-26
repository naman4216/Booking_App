import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Header = () => {
    return (
        <View style={{
            backgroundColor: "#003580",
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 25,
                padding: 8,
                borderColor: "white"
            }}>
                <Ionicons name="bed-outline" size={24} color="white" />
                <Text style={{ fontWeight: "bold", marginLeft: 8, color: "white", fontSize: 15 }}>Stays</Text>
            </Pressable>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: "center",
            }}>
                <Ionicons name="airplane-outline" size={24} color="white" />
                <Text style={{ fontWeight: "bold", marginLeft: 8, color: "white", fontSize: 15 }}>Flights</Text>
            </Pressable>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: "center",
            }}>
                <AntDesign name="car" size={24} color="white" />
                <Text style={{ fontWeight: "bold", marginLeft: 8, color: "white", fontSize: 15 }}>Car Rental</Text>
            </Pressable>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: "center",
            }}>
<FontAwesome5 name="uber" size={24} color="white" />
                <Text style={{ fontWeight: "bold", marginLeft: 8, color: "white", fontSize: 15 }}>Taxi</Text>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})