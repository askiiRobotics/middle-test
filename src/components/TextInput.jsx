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
import TextField from 'react-native-md-textinput';
// import type {
//   TextStyleProp,
// } from 'react-native/Libraries/StyleSheet/StyleSheet';

// TODO: use input from react-native-md-textinput with styles
// TODO: add option to insert element on the right side

type Props = {
  input: ElementProps<typeof ReactNative.TextInput> & {
    onChange: (input: string) => void, 
    RightSectionComponent: any;
  },
}

const styles: StyleProp = ReactNative.StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightSection: {
    flex: 0,
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
  }
});

const TextInput: StatelessFunctionalComponent<Props> = ({ input: { 
          onChange, 
          RightSectionComponent, 
          ...restInput 
        }}) => {
    return (
      <ReactNative.View style={styles.inputContainer}>
        <TextField style={styles.input} onChangeText={onChange} {...restInput} />
        {
          RightSectionComponent ?
          (
            <ReactNative.View style={styles.rightSection}>
              <RightSectionComponent />
            </ReactNative.View>
          ) :
          <ReactNative.View />
        }
      </ReactNative.View>
    )
  }

export default TextInput;