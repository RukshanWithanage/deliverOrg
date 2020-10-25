
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../../../utils/imagePath'

export const RefreshButton = props => {
    return (
        <View style={styles.refreshTouchableStyle}>
            <TouchableOpacity
                onPress={() => {
                    props.onPressRefresh()
                }}
            >
                <Image
                    source={Images.refresh_icon}
                    resizeMode={'contain'}
                    style={styles.refreshIconStyle}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    refreshTouchableStyle: { 
        backgroundColor: 'transparent', 
        alignItems : 'center', 
        justifyContent: 'center' 
    },
    refreshIconStyle: { 
        width: 18, 
        height: 17, 
        marginHorizontal: '5%'
    }
  });