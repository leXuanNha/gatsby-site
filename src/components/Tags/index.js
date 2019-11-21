import React from 'react'
import PropTypes from "prop-types"

const renderTags = data => {
  return data.map((item, index) => {
    let tagItemClass = 'tee-tag-item';

    if (item.selected) {
      tagItemClass += ' tag-selected';
    }

    return (
      <div className={tagItemClass} key={index}>
        {item.name}
      </div>
    );
  });
}

const Tags = ({ ...props }) => {
  const { data } = props;
  return (
    <div className='tag-list-wrapper'>
      {renderTags(data)}
    </div>
  )
}

Tags.propTypes = {
  data: PropTypes.array.isRequired
}


export default Tags;