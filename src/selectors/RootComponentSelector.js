/**
 * reselect selector for Root component container
 *
 * @format
 * @flow
 */
'use strict';

import { formValueSelector } from 'redux-form'
import { createStructuredSelector } from 'reselect';
import { formIdList } from 'middle/src/predefined/constants';

const selector = formValueSelector(formIdList.mainForm);
const RootComponentSelector = createStructuredSelector({
  'avatar': (state) => selector(state, 'avatar'),
  'first-name': (state) => selector(state, 'first-name'),
  'last-name': (state) => selector(state, 'last-name'),
  'phone': (state) => selector(state, 'phone'),
  'email': (state) => selector(state, 'email'),
  'telegram': (state) => selector(state, 'telegram'),
});
export default RootComponentSelector;