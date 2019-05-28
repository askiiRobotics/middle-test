/**
 * Root component of the application
 *
 * @format
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import TextInput from 'middle/src/components/TextInput';
import AvatarComponent from 'middle/src/components/AvatarComponent';
import RootComponentSelector from 'middle/src/selectors/RootComponentSelector';
import { connect } from 'react-redux';
import { Button, Subheader, Toolbar } from 'react-native-material-ui';
import { formIdList, SOCIAL_TYPES } from 'middle/src/predefined/constants';


const styles = StyleSheet.create({
  commonContainer: {
    flex: 1,
  },
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

type SocialType = $Values<typeof SOCIAL_TYPES>;

// TODO: use navigation / move content to a separated container component MainForm
class RootComponent extends Component<Props> {
  // eslint-disable-next-line no-unused-vars
  submit = (values) => {
    // Do something with the form values
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <ScrollView style={styles.commonContainer} contentContainerStyle={styles.container}>
        <Toolbar
            leftElement='arrow-back'
            centerElement=''
        />
        <Subheader text='Edit Profile' inset />
        <Field name='avatar' component={AvatarComponent} />
        <Field name='first-name' component={this.textField({label: 'First Name'})} />
        <Field name='last-name' component={this.textField({label: 'Last Name'})} />
        <Field name='phone' component={this.phoneField({label: 'Phone'})} />
        <Field name='email' component={this.emailField({label: 'Email'})} />
        <Field name='telegram' component={this.getSocialInput('telegram')} /> 
        <Button text='Save' onPress={handleSubmit(this.submit)} />
      </ScrollView>
    );
  }

  getSocialInput(type: SocialType) {
    switch(type) {
      case 'telegram':
        return this.textField({label: 'Telegram', RightSectionComponent: this.connectBtn});
        // it is capable to use twitter keyboard type here
      default: 
        return this.defaultInput();
    }
  }

  // TODO: move to separated file
  textField = (props) => (formProps) => <TextInput {...formProps} {...props}/>;

  numericField = (props) => (formProps) => <TextInput {...formProps} {...props} keyboardType={'numeric'}/>;

  phoneField = (props) => (formProps) => <TextInput {...formProps} {...props} keyboardType={'phone-pad'}/>;

  emailField = (props) => (formProps) => <TextInput {...formProps} {...props} keyboardType={'email-address'}/>;

  connectBtn = () => <Text>Connect</Text>;

  defaultInput = () => () => <View />;
}

export default connect(RootComponentSelector)(reduxForm({
  form: formIdList.mainForm,
  // validate // TODO: implement validation
})(RootComponent));
