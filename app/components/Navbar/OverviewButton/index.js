
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../../../utils/imagePath'

export const OverviewButton = props => {
    return (
        <View style={styles.overviewTouchableStyle}>
            <TouchableOpacity
                onPress={() => {
                    props.onPressOverview()
                }}>
                <Image
                    source={Images.overview_icon}
                    resizeMode={'stretch'}
                    style={styles.overviewIconStyle}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    overviewTouchableStyle: { 
        backgroundColor: 'transparent', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    overviewIconStyle: { 
        width: 18, 
        height: 17, 
        marginHorizontal: '5%'
    }
  });