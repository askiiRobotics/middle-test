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
  firstValue: (state) => selector(state, 'firstValue')
});
export default RootComponentSelector;