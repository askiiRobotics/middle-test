/**
 * Component for avatar processing
 *
 * @format
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field } from 'redux-form';
import TextInput from 'middle/src/components/TextInput';
import RootComponentSelector from 'middle/src/selectors/RootComponentSelector';
import { connect } from 'react-redux';
import { Button, Subheader, Toolbar } from 'react-native-material-ui';

// TODO: correct file
// TODO: use react-native-image-crop-picker
// TODO: add styles
// TODO: add logic (support format for redux-form reducer <- store image url to local file via rn-fetch-blob)

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });
  
  type Props = {};
  class AvatarComponent extends Component<Props> {
    @autobind
    handleImageLibraryClicked() {
        let { index } = props;
        ImagePicker.openPicker({ width: 1200, height: 628, cropping: true }).then(image => {
            this.props.onAdImagePicked(image, creativeIndex);
        });
    }

    render() {

        return (
            <TouchableOpacity 
              onPress={ this.handleImageLibraryClicked } 
              style={ [styles.imageLibraryButton, imageLibraryStyle] }
            >
                <View style={ styles.row }>
                    <Image 
                      source={ photoImage } 
                      style={ styles.photoIcon } 
                    />
                    <Text style={ styles.imageLibraryText }>Upload photo</Text>
                </View>
            </TouchableOpacity>
        )
    }
  }