// CustomRadio.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  `;
// margin-bottom: 8px;

const RadioInput = styled.input`
  margin-right: 8px;
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

const RadioLabel = styled.label`
  font-size: 18px;
  cursor: pointer;
  position: relative;
  padding-left: 28px;
  margin-bottom: 0px;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #fafafa;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
  }

  &:after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border:4px solid #007bff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
  }
  
  ${RadioInput}:checked + &:before {
    background-color: #fafafa;
    border-color: #fafafa;
  }
`;

const CustomRadio = ({ label, value, checked, onChange }) => {
  return (
    <RadioContainer>
      <RadioInput
        type="radio"
        id={`radio_${value}`}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioLabel htmlFor={`radio_${value}`}>{label}</RadioLabel>
    </RadioContainer>
  );
};

CustomRadio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CustomRadio;
