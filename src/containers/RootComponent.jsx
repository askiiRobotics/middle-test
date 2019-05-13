/**
 * Root component of the application
 *
 * @format
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import TextInput from 'middle/src/components/TextInput';
import AvatarComponent from 'middle/src/components/AvatarComponent';
import RootComponentSelector from 'middle/src/selectors/RootComponentSelector';
import { connect } from 'react-redux';
import { Button, Subheader, Toolbar } from 'react-native-material-ui';
import { formIdList } from 'middle/src/predefined/constants';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

type Props = {
  handleSubmit: Function,
  onChange: Function,
};
class RootComponent extends Component<Props> {
  // eslint-disable-next-line no-unused-vars
  submit = (values) => {
    // Do something with the form values
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.container}>
        <Toolbar
            leftElement="arrow-back"
            centerElement=""
        />
        <Subheader text="Edit Profile" inset />
        <Field name="avatar" component={AvatarComponent} />
        <Field name="first-name" component={TextInput} />
        <Field name="last-name" component={TextInput} />
        <Field name="phone" component={TextInput} />
        <Field name="email" component={TextInput} />
        <Field name="telegram" component={TextInput} /> 
        <Button value="Save" onPress={handleSubmit(this.submit)} />
      </View>
    ); // TODO: implement Connect side component declaration in telegram field
  }
}

export default connect(RootComponentSelector)(reduxForm({
  form: formIdList.mainForm,
  // validate // TODO: implement validation
})(RootComponent));
