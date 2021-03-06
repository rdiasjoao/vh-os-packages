import React from 'react';
import PropTypes from 'prop-types';
import VHIconText from "../IconText/index";

const VHMainIconTitleList = (props) => {
    return props.items.map(item => (
        <VHIconText
            iconColor="primary-light"
            textColor="primary-light"
            text={item.label}
            icon="bullet"
            className={`vh-main-icon-title-list ${props.className ? props.className : ''}`}
            variant="caption"
            data={props.data}
            onEvent={props.onEvent}
        />
    ))
}

VHMainIconTitleList.propTypes = {
    onEvent: PropTypes.func,
    items: PropTypes.array.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHMainIconTitleList;
