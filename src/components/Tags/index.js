import React from 'react'
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

const renderTags = data => {
  let pathNameSplit = window.location.pathname.split("/");

  return data.map((item, index) => {
    let tagItemClass = 'tee-tag-item';

    if (pathNameSplit[pathNameSplit.length - 1] === item.toLowerCase()) {
      tagItemClass += ' tag-selected';
    }

    return (
      <Link to={`/collection/${item.toLowerCase()}`} className={tagItemClass} key={index}>
        {item}
      </Link>
    );
  });
}

const Tags = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allAirtable(filter: {table: {eq: "Tshirt"}}) {
        distinct(field: data___Collection)
      }
    }`
  );

  return (
    <div className='tag-list-wrapper'>
      {renderTags(data.allAirtable.distinct)}
    </div>
  )
}

export default Tags;