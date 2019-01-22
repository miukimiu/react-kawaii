import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Browser } from '../browser/Browser';

const BootstrapAlert = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  border: 1px solid transparent;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 15px;
  
  &.danger {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442;
  }
  
  &.warning {
    background-color: #fcf8e3;
    border-color: #faebcc;
    color: #8a6d3b;
  }
  
  &.success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #3c763d;
  }
  
  &.info {
    background-color: #d9edf7;
    border-color: #bce8f1;
    color: #31708f;
  }
`

const bsStyleToMood = {
  "danger": "shocked",
  "warning": "sad",
  "success": "blissful",
  "info": "excited"
};

const Alert = ({ bsStyle, children }) => (
  <BootstrapAlert className={bsStyle}>
    <Browser mood={bsStyleToMood[bsStyle]} size={80} />
    <div style={{width: '15px'}}></div>
    {children}
  </BootstrapAlert>
);

Alert.propTypes = {
  bsStyle: PropTypes.string
}

export default Alert;