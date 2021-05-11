import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text } from 'react-native';

const CellComponent=()=>{
    return(
        <TouchableOpacity>
            <View style={styles.cell}>
                <Text></Text>
            </View>
        </TouchableOpacity>     
    );
};

const styles = StyleSheet.create({
    cell:{
        width:100,
        height:100,
        backgroundColor:'#51c4d3',
        borderColor:'#132c33',
        borderWidth:2
    }
});

export default CellComponent;