import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

const renderTags = (data, selected) => {
  return data.map((item, index) => {
    let tagItemClass = 'tee-tag-item';

    if (selected.toLowerCase() === item.toLowerCase()) {
      tagItemClass += ' tag-selected';
    }

    return (
      <Link to={`/collection/${item.toLowerCase()}`} className={tagItemClass} key={index}>
        {item}
      </Link>
    );
  });
}

const Tags = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allAirtable(filter: {table: {eq: "Tshirt"}}) {
        distinct(field: data___Collection)
      }
    }`
  );

  return (
    <div className='tag-list-wrapper'>
      {renderTags(data.allAirtable.distinct, props.selected)}
    </div>
  )
}

Tags.propTypes = {
  selected: PropTypes.string
}

export default Tags;