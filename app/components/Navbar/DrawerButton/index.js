import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Images from '../../../utils/imagePath'
import PropTypes from "prop-types";

export const DrawerButton = props => {
    return (
        <View style={styles.openDrawerStyle}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.openDrawer();
                    props.onPressDrawer()
                }}>
                <Image
                    source={Images.menu_icon}
                    resizeMode={'stretch'}
                    style={styles.menuImageViewStyle}/> 
            </TouchableOpacity>
        </View>
    );
};

DrawerButton.propTypes = {
    onPressDrawer: PropTypes.func,
};

DrawerButton.defaultProps = {
    onPressDrawer: () => { }
};

const styles = StyleSheet.create({
    openDrawerStyle: { 
        backgroundColor: 'transparent', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    menuImageViewStyle: { 
        width: 18, 
        height: 17, 
        marginHorizontal: '5%'
    }
  });