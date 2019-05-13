/**
 * A dumb component for render text input in required style
 *
 * @format
 * @flow
 */
'use strict';

import React from 'react';
import type { ElementProps, StatelessFunctionalComponent } from 'react';
import ReactNative from 'react-native';
import type {
  ____Styles_Internal as StyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
// import type {
//   TextStyleProp,
// } from 'react-native/Libraries/StyleSheet/StyleSheet';

// TODO: use input from react-native-md-textinput with styles
// TODO: add option to insert element on the right side

type Props = {
  input: ElementProps<typeof ReactNative.TextInput> & {
    onChange: (input: string) => void, 
  },
}

const styles: StyleProp = ReactNative.StyleSheet.create({
  input: {

  }
});

const TextInput: StatelessFunctionalComponent<Props> = ({ input: { onChange, ...restInput }}) => {
    return <ReactNative.TextInput style={styles.input} onChangeText={onChange} {...restInput} />
  }

export default TextInput;