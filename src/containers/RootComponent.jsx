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

// TODO: move colors to configurable palette
const primaryColor = '#0088CC';
const backgroundColor = 'white';
const mainTextColor = 'black';
const transparent = 'transparent';

const styles = StyleSheet.create({
  commonContainer: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  connectBtn: {
    color: primaryColor,
    fontSize: 16,  //TODO: create typography table
    height: 24,
    paddingLeft: 8,
    paddingTop: 6,
  },
  container: {
    marginHorizontal: 16,
  },
  header: {
    justifyContent: 'flex-start',
    paddingLeft: 0,
  },
  headerContent: {
    color: mainTextColor,
  },
  toolbar: {
    backgroundColor: backgroundColor,
    // TODO: use own implementation of getPlatformElevation util
    elevation: 0,
    marginHorizontal: 2,
    shadowColor: transparent,
    shadowOffset: {},
    shadowOpacity: 0,
    shadowRadius: 0,
    zIndex: 0,
  },
  toolbarContent: {
    color: primaryColor,
  }
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
      <View style={styles.commonContainer}>
        <Toolbar
            leftElement='arrow-back'
            centerElement=''
            style={{
              container: styles.toolbar,
              leftElement: styles.toolbarContent,
            }}
        />
        <ScrollView style={styles.commonContainer} contentContainerStyle={styles.container}>
          <Subheader text='Edit Profile' style={{
              container: styles.header,
              text: styles.headerContent,
          }} />
          <Field name='avatar' component={AvatarComponent} />
          <Field name='first-name' component={this.textField({label: 'First Name'})} />
          <Field name='last-name' component={this.textField({label: 'Last Name'})} />
          <Field name='phone' component={this.phoneField({label: 'Phone'})} />
          <Field name='email' component={this.emailField({label: 'Email'})} />
          <Field name='telegram' component={this.getSocialInput('telegram')} /> 
          <Button text='Save' onPress={handleSubmit(this.submit)} />
        </ScrollView>
      </View>
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

  connectBtn = () => <Text style={styles.connectBtn}>Connect</Text>; 
  // TODO: make clickable and add additional props to make it worked properly
  // example:
  // accessible={true}
  // accessibilityTraits={'button'}
  // hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}

  defaultInput = () => () => <View />;
}

export default connect(RootComponentSelector)(reduxForm({
  form: formIdList.mainForm,
  // validate // TODO: implement validation
})(RootComponent));
