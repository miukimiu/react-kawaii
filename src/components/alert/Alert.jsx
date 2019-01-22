import React from 'react';
import PropTypes from 'prop-types';
import { Browser } from '../browser/Browser';

const moodForStyle = {
  "danger": "shocked",
  "warning": "sad",
  "success": "blissful",
  "info": "excited"
};

const layout = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};

const alert = {
  border: '1px solid transparent',
  borderRadius: '4px',
  marginBottom: '20px',
  padding: '15px'
};

const alertForStyle = {
  "danger": {
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
    color: '#a94442'
  },
  "warning": {
    backgroundColor: '#fcf8e3',
    borderColor: '#faebcc',
    color: '#8a6d3b'
  },
  "success": {
    backgroundColor: '#dff0d8',
    borderColor: '#d6e9c6',
    color: '#3c763d'
  },
  "info": {
    backgroundColor: '#d9edf7',
    borderColor: '#bce8f1',
    color: '#31708f'
  } 
};

const Alert = ({ bsStyle, children }) => (
  <div style={{...layout, ...alert, ...alertForStyle[bsStyle]}}>
    <Browser mood={moodForStyle[bsStyle]} size={80} />
    <div style={{width: '15px'}}></div>
    {children}
  </div>
);

Alert.propTypes = {
  bsStyle: PropTypes.string
}

export default Alert;