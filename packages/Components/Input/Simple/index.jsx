import React, {useState} from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"

const VHInput = props => {
  const [value, handleChange] = React.useState(props.value);
  return (
    <S.Input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      className={`vh-input ${props.className ? props.className : ''}`}
      disabled={props.disabled}
      error={props.error}
      loading={props.loading}
      autoFocus={props.autoFocus}
      value={value}
      noBorder={props.noBorder}
      onChange={e => {
        handleChange(e.currentTarget.value)
      }}
      onKeyUp={e => {
        if (e.key === "Enter") {
          props.onEvent({
            data: {
              value,
              data: props.data
            },
            event: "onKeyUpAction",
            origin: "VHInput"
          })
        } else {
          handleChange(e.currentTarget.value)
          props.onEvent({
            data: {
              value: e.currentTarget.value,
              data: props.data
            },
            event: "onKeyUp",
            origin: "VHInput"
          })
        }
      }}

      onFocus={() => {
        props.onEvent({
          data: {
            value,
            data: props.data
          },
          event: "onFocus",
          origin: "VHInput"
        })
      }}

      onBlur={() => {
        props.onEvent({
          data: {
            value,
            data: props.data
          },
          event: "onBlur",
          origin: "VHInput"
        })
      }}
    />
  )
}

VHInput.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  className: '',
  noBorder: false
}

VHInput.propTypes = {
  disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.string,
  placeholder: PropTypes.string,
  noBorder: PropTypes.bool,
}

export default VHInput
