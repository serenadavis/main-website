import React from 'react'
import { Link } from "gatsby"
import Image from "../components/image"

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

class FeaturedArticlesComponent extends React.Component {
    constructor(props) {
        super(props);
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
        const featured = this.state.featured ? this.state.featured : data.allMarkdownRemark.edges[0];
        return (
            <div className="container">
                <h3 class="section-title">
                Featured {featured.node.frontmatter.section}
                </h3>
                <div class="features fiction-page">
                <ul class="featured-item-links">
                    {data.allMarkdownRemark.edges.map((post, index) => (
                        <li className={this.state.featured_index === index && "selected"} data-item-id="post.node.frontmatter.slug" key={index} onClick={() => this.updateFeatured(data.allMarkdownRemark.edges[index], index)}>
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
                            <Link to={"contributor/"+convertToSlug(author)}>{author}</Link>
                        ))}</span>
                        <span class="title-underline"></span>
                        { featured.node.frontmatter.section === "art" ?
                            <div class="item-sample">
                                <Link to={"/content/"+featured.node.frontmatter.slug}>
                                    {/* <img src={metadata.siteMetadata.mediaUrl + featured.node.frontmatter.images[0]} alt=""/> */}
                                    <Image name={featured.node.frontmatter.images[0]} />
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
