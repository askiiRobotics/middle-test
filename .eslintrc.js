module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'amd': true,
        'react-native/react-native': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended', 'plugin:react-native/all'],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react', 'react-native', 'flowtype'],
    'rules' : {
        'react/prop-types': 0
    },
    'globals': {
      'fetch': false
    }
  }