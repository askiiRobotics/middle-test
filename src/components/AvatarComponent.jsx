/**
 * Component for avatar processing
 *
 * @format
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import BlobService from 'middle/src/services/BlobService';


// TODO: use i18n localization

const primaryColor = '#0088CC';

const styles = StyleSheet.create({
  imageLibraryButton: {
    flex: 1,
  },
  imageLibraryText: {
    color: primaryColor,
    letterSpacing: 0.25,
    marginLeft: 16,
  },
  photoIcon: {
    borderColor: primaryColor,
    borderRadius: 32,
    borderWidth: 2,
    height: 62,
    width: 62,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

type Props = {
  onChange: (input: string) => void,
  value: String,
};

const pickerConfig = { 
  width: 62, 
  height: 62, 
  cropping: true, 
  mediaType: 'photo', 
  useFrontCamera: true,
};

class AvatarComponent extends Component<Props> {
  // @ autobind
  handleImageSelected(onChange) {
    ImagePicker.openPicker(pickerConfig).then(
      image => {
        // TODO: create type folder with type 
        // described here https://github.com/ivpusic/react-native-image-crop-picker#response-object
        // TODO: move service call to redux middleware

        // BlobService.getFilePath(image.path).then(onChange) 
        // due to it is already local files we don't need to process it via blob storage
        onChange(image.path);
      }
    );
  }

  wrapperForImageSelection = onChange => () => this.handleImageSelected(onChange);

  render() {
    const { input } = this.props;
    
    const value = input.value ? {uri: input.value} : undefined;
    
    return (
      <TouchableOpacity
        onPress={this.wrapperForImageSelection(input.onChange)}
        style={styles.imageLibraryButton}
      >
        <View style={styles.row}>
          <Image source={value} style={styles.photoIcon} />
          <Text style={styles.imageLibraryText}>Upload photo</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default AvatarComponent;