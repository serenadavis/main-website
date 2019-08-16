import React from 'react'
import Layout from '../components/layout'
import { Link, StaticQuery } from "gatsby"
import article from '../templates/article';
import { notDeepEqual } from 'assert';


class FictionPageFeatured extends React.Component {
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
        const featured = this.state.featured;
        const { children, data } = this.props;
        return (
            <StaticQuery query={graphql`
            {
                allMarkdownRemark(filter: {frontmatter: {section: {eq: "fiction"}}}, limit: 5) {
                  edges {
                    node {
                      frontmatter {
                        title
                        authors
                        slug
                      }
                      excerpt(pruneLength: 2000)
                    }
                  }
                }
              }
            `}
            render={data =>
                {
                if(!this.state.featured){
                    this.state.featured = data.allMarkdownRemark.edges[0]
                }
                const featured = this.state.featured;
                return (
                <Layout>
                <h3 class="section-title">
                Featured fiction
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
                    <div class="item featured-item {% if forloop.first %} selected {% endif %}" data-item-id="{{ article.id }}">
                        <span class="item-title"><Link to={"/content/"+featured.node.frontmatter.slug}>{featured.node.frontmatter.title}</Link></span>
                        <span class="item-author">By {featured.node.frontmatter.authors.map(author => (
                            <a href="">{author}</a>
                        ))}</span>
                        <span class="title-underline"></span>
                        {/* <div class="item-sample">{% if article.photo %}<a href="{% url 'content' article.id %}"><img src="{{ MEDIA_URL }}{{article.photo}}" /></a>{% else %}{% autoescape off %}{{ article.body }}{% endautoescape %}{% endif %}</div> */}
                        <div class="item-sample">{featured.node.excerpt}</div>
                        <div class="shadow"></div>
                        <div class="item-continue-reading"><Link to={"/content/"+featured.node.frontmatter.slug}>See More ></Link></div>
                    </div>
                {/* {data.allMarkdownRemark.edges.map(post => ( */}
                
                {/* ))} */}
                </div>
            </Layout>
            )}}
        />
    )}
}

export default FictionPageFeatured;
