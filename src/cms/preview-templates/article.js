import React from 'react'
import PropTypes from 'prop-types'
// import { AboutPageTemplate } from '../../templates/about-page'

const ArticlePagePreview = ({ entry, widgetFor }) => {
    console.log(widgetFor);
    return (
  <article>
      {widgetFor("body")}
  </article>
)}


ArticlePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePagePreview