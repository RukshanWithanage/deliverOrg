import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                    {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '5%'
    },
});