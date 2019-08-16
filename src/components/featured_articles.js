import React from 'react'
import { Link, StaticQuery } from "gatsby"
import { graphql } from "gatsby"

class FeaturedArticlesComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            featured: null,
            featured_index: 0
        }

        this.updateFeatured = this.updateFeatured.bind(this)
    }

    updateFeatured(article, index){
        this.setState({featured: article, featured_index: index});
    }

    render(){
        const data = this.props.data;
        const metadata = this.props.metadata;
        const featured = this.state.featured ? this.state.featured : data.allMarkdownRemark.edges[0];
        return (
            <div className="container">
                <h3 class="section-title">
                Featured {featured.node.frontmatter.section}
                </h3>
                <div class="features fiction-page">
                <ul class="featured-item-links">
                    {data.allMarkdownRemark.edges.map((post, index) => (
                        <li className={this.state.featured_index == index && "selected"} data-item-id="post.node.frontmatter.slug" key={index} onClick={() => this.updateFeatured(data.allMarkdownRemark.edges[index], index)}>
                        <span class="item-title">{post.node.frontmatter.title}</span>
                        <span class="item-author">
                            By {post.node.frontmatter.authors.map(author => (
                                author
                            ))}
                            </span>
                            <span class="title-underline"></span></li>
                    ))}
                </ul>
                    <div class="item featured-item selected" data-item-id="{{ article.id }}">
                        <span class="item-title"><Link to={"/content/"+featured.node.frontmatter.slug}>{featured.node.frontmatter.title}</Link></span>
                        <span class="item-author">By {featured.node.frontmatter.authors.map(author => (
                            <a href="">{author}</a>
                        ))}</span>
                        <span class="title-underline"></span>
                        { featured.node.frontmatter.section === "art" ?
                            <div class="item-sample">
                                <Link to={"/content/"+featured.node.frontmatter.slug}>
                                    <img src={metadata.siteMetadata.mediaUrl + featured.node.frontmatter.images[0]} />
                                </Link>
                            </div>
                            :
                            <div class="item-sample">{featured.node.excerpt}</div>
                        }
                        <div class="shadow"></div>
                        <div class="item-continue-reading"><Link to={"/content/"+featured.node.frontmatter.slug}>See More ></Link></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedArticlesComponent;
