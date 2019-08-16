import React from 'react'
import { Link } from "gatsby"

class SmallArticleDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props.data;
        const metadata = this.props.metadata
        return (
            <Link to={"/content/"+data.node.frontmatter.slug}>
                <div class="container-left-quarter small_feature">
                    <div class="category-rule">
                        <h4 class="category-label">{data.node.frontmatter.section}</h4>
                    </div>
                    <div class="feature-title-small">
                        {data.node.frontmatter.title}
                    </div>
                    { data.node.frontmatter.section === "art" ?
                        <div className="feature-image-container-small">
                            <div class="feature-image" id="feature-3-image">
                                <img style={{width: "100%"}} src={metadata.siteMetadata.mediaUrl + data.node.frontmatter.images[0]} />
                            </div>
                        </div>
                    :
                        <div class="feature-description-small">
                            {data.node.excerpt}
                        </div>
                    }
                    <div class="feature-author">
                        {data.node.frontmatter.authors.map(author => (
                            <a href="{{ author.get_absolute_url }}" class="no-decoration">{author}</a>
                        ))}
                    </div>
                    <div class="feature-release-date-small">{data.node.frontmatter.date}</div>
                </div>
            </Link>
        );
    }
}

export default SmallArticleDisplay;
