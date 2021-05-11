import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text } from 'react-native';
import CellComponent from './CellComponent'

const RowComponent=()=>{
    return (
        <View style={styles.row}>
            <CellComponent style={styles.first_cell}/>
            <CellComponent style={styles.second_cell}/>
            <CellComponent style={styles.third_cell}/>
        </View>
    );
};

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        height:100,
        width:300
    },
    first_cell:{
        borderRightColor:'#132c33',
        borderWidth:2,
    }
});

export default RowComponent;