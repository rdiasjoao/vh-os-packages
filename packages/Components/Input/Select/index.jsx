import React from 'react';
import PropTypes from 'prop-types'

import Select, { components }  from 'react-select';
import makeAnimated from 'react-select/animated';
import VHText from '../../Text'
import { TitleDescriptionSkeleton } from 'react-preload-skeleton'
import { Row } from '../../../Grid'

import IconDropdown from '../../../assets/svg/icons/icon_dropdown.svg/index.js'

const VHSelect = props => {
  let animatedComponents = makeAnimated();

if (props.preLoading) {
  return <TitleDescriptionSkeleton />
}

  const [value, handleChange] = React.useState(props.currentItem);
  React.useEffect(() => {
    handleChange(props.currentItem);
  }, [props.currentItem])

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none",
      fontWeight: props.bold ? 'bold' : 'normal',
      fontFamily: 'Roboto',
      fontSize: '14px',
      padding: '0',
      borderRadius: '6px',
      
    }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    clearIndicator: (styles) => ({ display: 'none' }),
    singleValue: (styles) => ({ color:'#4f4f4f'}),
    valueContainer: (styles) => ({ width: 'auto', display: 'flex', paddingLeft:'0'}),
    singleValue: (styles) => ({ paddingTop:'0'}),
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#646464' : '#646464' .isSelected ? '#fff': '#646464',
      backgroundColor: state.isFocused ? '#F2F2F2' : '#fff' .isSelected ? '#2C9BF5': '#fff',
      padding: '6px 12px',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }),
  };

  const styled = {
    indicatorSeparator: (styles) => ({ display: 'none' }),
    clearIndicator: (styles) => ({ display: 'none' }),
    valueContainer: (base) => ({width: 'auto', display: 'flex', marginLeft: 8}),
    multiValue: (base) => ({width: 'auto', height: 'auto', marginLeft: 8, display: 'flex', alignItems: 'center'}),
    control: base => ({
      ...base,
      fontFamily: 'Roboto',
      fontSize: '14px',
      border:'1px solid #e0e0e0',
      padding: '1px 0',
      borderRadius: '6px',
      
      
    }),
    option: (provided, state ) => ({
      ...provided,
      color: state.isFocused ? '#646464' : '#646464' .isSelected ? '#fff': '#646464',
      backgroundColor: state.isFocused ? '#F2F2F2' : '#fff' .isSelected ? '#2C9BF5': '#fff',
      padding: '6px 12px',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }),
  };
  
  
  const DropdownIcon = () => {
    return <IconDropdown />
  };
  
  const DropdownIndicator = (props2) => {
    // if (props.removeIndicator) {
    //   return <>{ DropdownIndicator = () => null, IndicatorSeparator = () => null }</>
    // }
    return (

      <components.DropdownIndicator {...props2}>
        <DropdownIcon />
      </components.DropdownIndicator>
    );
  };
  
  return (
    <Row responsive style={{ position: 'relative', marginBottom: props.marginBottom ? props.marginBottom : '21px' }} className='VH-select'>
      {
        props.caption &&
        <Row style={{ marginBottom : '6px' }}>
          <VHText
            text={props.caption}
            variant="platform1"
            color={props.captionColor}
          />
        </Row>
      }
      <Row>
        <Select
          styles={props.removeBorder ? style : styled}
          closeMenuOnSelect={!props.isMulti}
          className={props.className}
          placeholder={props.placeholder}
          isLoading={props.isLoading}
          isDisabled={props.isLoading || props.isDisabled}
          // components={animatedComponents}
          components={{ DropdownIndicator }}
          value={value}
          isMulti={props.isMulti}
          isClearable={true}
          options={props.items}
          onChange={(newValue, actionMeta) => {
            switch (true) {
              case actionMeta.action === "remove-value":
                let finalValue = []
                if (newValue.value === 'zero') {
                  newValue.value = 0
                }
                handleChange(newValue);
                newValue.map(item => {
                  finalValue.push(parseInt(item.value === 'zero' ? 0 : item.value))
                })
                props.onEvent({
                  type: "OnChange",
                  origin: "VHSelect",
                  props: {
                    data: props.data,
                    item: finalValue,
                    action: 'delete',
                    order: props.order
                  }
                })
                break
              case actionMeta.action === "clear":
                props.onEvent({
                  type: "OnChange",
                  origin: "VHSelect",
                  props: {
                    data: props.data,
                    item: null,
                    action: "clear"
                  }
                })
                break
              case actionMeta.action === "select-option":
                let finalValueChange = []
                if (newValue.value === 'zero') {
                  newValue.value = 0
                }
                handleChange(newValue);
                if (props.isMulti) {
                  newValue.map(item => {
                    finalValueChange.push(parseInt(item.value === 'zero' ? 0 : item.value))
                  })
                }
                props.onEvent({
                  type: "OnChange",
                  origin: "VHSelect",
                  props: {
                    data: props.data,
                    item: props.isMulti ? finalValueChange : newValue,
                    action: 'add',
                    order: props.order
                  }
                })
                break
            }
          }}
        />
      </Row>
      {
        props.description &&
        <Row style={{ position: 'absolute', top: '64px', marginTop: '8px'}}>
          <VHText
            text={props.description}
            variant="caption"
            color={props.descriptionColor}
          />
        </Row>
      }
    </Row>
  );
}

export default VHSelect
