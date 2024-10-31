import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const MsgItem = ({ data }) => {
    // Define qual estilo de balão usar com base em quem enviou a mensagem
    const msgSenderStyle = data.isMine ? styles.baloonRight : styles.baloonLeft;

    return (
        <View style={[styles.baloon, msgSenderStyle]}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.msg}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    baloon: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%', 
    },
    baloonLeft: {
        backgroundColor: '#C6E7FF',
        alignSelf: 'flex-start',
    },
    baloonRight: {
        backgroundColor: '#D4F6FF',
        alignSelf: 'flex-end',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default MsgItem;
