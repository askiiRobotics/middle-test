/**
 * A dumb component for render text input in required style
 *
 * @format
 * @flow
 */
'use strict';

import React, { Component } from 'react'
import type { ElementProps } from 'react';
import ReactNative from 'react-native';
import type {
  ____Styles_Internal as StyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { TextField } from 'react-native-material-textfield';
import debounce from 'lodash.debounce';

type Props = {
  input: ElementProps<typeof ReactNative.TextInput> & {
    onChange: (input: string) => void, 
    RightSectionComponent: any;
  },
}

const baseColor = '#96A1A7';
const tintColor = '#0088CC';
const textColor = 'black';

const styles: StyleProp = ReactNative.StyleSheet.create({
  inputContainer: {
    justifyContent: 'flex-start',
  },
  rightSection: {
    flex: 0,
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
  },
  labelTextStyle: {
    color: baseColor,
  }
});

// TODO: in this implementation of material design input we can't set our own tintColor to a label 
// without setting it to an underline
// we need to change the implementation or create a pull request to a contributor

class TextInput extends Component<Props> {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.debouncedOnChange = debounce(this.onChange, 1000);
    // TODO: increase debounce timeout and add handle for enter/submit values
  }

  onChange(newValue) {
    this.props.input.onChange(newValue);
  }

  render() {
    const {
      input,
      RightSectionComponent,
      ...restProps
    } = this.props;
          
    return (
      <ReactNative.View style={styles.inputContainer}>
          <TextField
                style={styles.input}
                labelTextStyle={styles.labelTextStyle}
                labelFontSize={12}
                fontSize={18}
                activeFontSize={12}
                labelHeight={24}
                labelPadding={0}
                height={32}
                disabled={false}
                editable={true}
                baseColor={baseColor}
                tintColor={tintColor}
                textColor={textColor}
                {...input}
                {...restProps}
                onChange={undefined}
                onChangeText={this.debouncedOnChange}
                renderAccessory={RightSectionComponent}
              />
      </ReactNative.View>
    )
  }
}

export default TextInput;