import React,{useState} from 'react';
import { View,TouchableOpacity,StyleSheet,Text } from 'react-native';
import RowComponent from '../components/RowComponent';


const BoardComponent =()=>{

    const [turn,setTurn] =useState(1);
    const [player1,setPlayer1] =useState(20);
    const [player2,setPlayer2] =useState(0);

    return(
        <View style={styles.board}>
            <View style={styles.players}>
                <Text style={styles.palyer1}>Player 1</Text>
                <Text style={styles.palyer2}>Player 2</Text>
            </View>
            <RowComponent/>
            <RowComponent/>
            <RowComponent/>
        </View>
    );
};

const styles = StyleSheet.create({

    board: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    player1: {
        alignSelf:'flex-start',
    },
    player2: {
        alignSelf:'flex-end'
    },
    players:{
        width:'100%',
        height:20,
        flexDirection:'row',
        justifyContent: 'space-between'
    }

});

export default BoardComponent;