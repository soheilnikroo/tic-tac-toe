import React from 'react';
import { View,TouchableOpacity,StyleSheet,Text } from 'react-native';
import BoardComponent from '../components/BoardComponent';

const MainScreen=()=>{
    return (
        <View style={styles.board}>
            <Text>Score: 0</Text>
            <BoardComponent/>
        </View>
    );
};

const styles = StyleSheet.create({

    board: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },



});


export default MainScreen;