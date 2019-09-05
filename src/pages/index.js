import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SmallArticleDisplay from "../components/small_article_display"
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

export const query = graphql`
{
    art: allMarkdownRemark(limit: 5, filter: {frontmatter: {section: {eq: "art"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
        node {
            frontmatter {
                title
                authors
                slug
                images
                date
                section
            }
            excerpt
        }
        }
    },
    poetry: allMarkdownRemark(limit: 5, filter: {frontmatter: {section: {eq: "poetry"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
        node {
            frontmatter {
                title
                authors
                slug
                images
                date
                section
            },
            excerpt
        }
        }
    },
    fiction: allMarkdownRemark(limit: 5, filter: {frontmatter: {section: {eq: "fiction"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
        node {
            frontmatter {
                title
                authors
                slug
                images
                date
                section
            }
            excerpt
        }
        }
    },
    features: allMarkdownRemark(limit: 5, filter: {frontmatter: {section: {eq: "features"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
        node {
            frontmatter {
                title
                authors
                slug
                images
                date
                section
            }
            excerpt
        }
        }
    },
    editors_picks: allMarkdownRemark(limit: 10) {
        edges {
            node {
            frontmatter {
                title
                authors
                slug
                section
                issue
                date
            }
            excerpt
            }
        }
    },
    metadata: site {
        siteMetadata {
            current_issue
        }
    }
}
`

export default ({data}) => (
    <Layout>
        <div class="homepage">
            <section class="top-features">
                <div class="container-left-half" id="feature-1">
                    <div class="category-rule">
                    <h4 class="category-label">Featured</h4>
                    </div>
                    <div class="feature-image-container-large">
                    <div class="feature-image" id="feature-1-image">
                    <Link to={"/content/"+data.features.edges[0].node.frontmatter.slug}>
                        <Image name="at-home-with-peter-bradley.jpg"/>
                    </Link>
                    </div>
                    </div>
                    <div class="feature-title-large">
                    <Link to={"/content/"+data.features.edges[0].node.frontmatter.slug}>
                    {data.features.edges[0].node.frontmatter.title}
                    </Link>
                    </div>
                    <div class="feature-description-large">
                    <Link to={"/content/"+data.features.edges[0].node.frontmatter.slug}>
                    {data.features.edges[0].node.excerpt}
                    </Link>
                    </div>
                    <span class="feature-author">
                        {data.features.edges[0].node.frontmatter.authors.map(author => (
                            <Link to={"contributor/"+convertToSlug(author)} class="no-decoration">{author}</Link>
                        ))}
                    </span>
                    <div class="feature-release-date">{data.features.edges[0].node.frontmatter.date}</div>
                </div>
                <div className="container-right-half">
                    <SmallArticleDisplay data={data.features.edges[1]} metadata={data.metadata}/>
                    <SmallArticleDisplay data={data.fiction.edges[0]} metadata={data.metadata}/>
                    <SmallArticleDisplay data={data.poetry.edges[0]} metadata={data.metadata}/>
                    <SmallArticleDisplay data={data.art.edges[0]} metadata={data.metadata}/>
                </div>
                <div class="clearfix"></div>
            </section>
            <section class="bottom-features">
                <div class="container-left-half">
                    <div id="feature-current-issue">
                        <div class="category-rule">
                        <h4 class="category-label">Current Issue</h4>
                        </div>
                        <div class="current-issue-label">
                        <Link to={'issue/'+convertToSlug(data.metadata.siteMetadata.current_issue)}>{data.metadata.siteMetadata.current_issue}</Link>
                        </div>
                        <Link to={'issue/'+convertToSlug(data.metadata.siteMetadata.current_issue)}>
                            <div class="feature-image-container-current-issue">
                                <div class="feature-image" id="feature-current-issue-image">
                                    <Image name = "summer-2019.png"/>
                                </div>
                            </div>
                        </Link>
                        <div class="current-issue-shop">
                        <a href="/shop">See Shop</a>
                        </div>
                    </div>
                    <SmallArticleDisplay data={data.features.edges[2]} metadata={data.metadata}/>
                    <SmallArticleDisplay data={data.fiction.edges[3]} metadata={data.metadata}/>
                </div>
                <div class="container-right-half">
                    <div id="editors-picks">
                        <div class="category-rule">
                        <h4 class="category-label">From the Archives</h4>
                        </div>
                        <ol class="homepage-list">
                        { data.editors_picks.edges.map(pick => (
                            <li class="feature-list-item">
                            <div class="feature-list-item-title">
                                <Link to={"/content/"+pick.node.frontmatter.slug}>{pick.node.frontmatter.title}</Link>
                            </div>
                            <div class="feature-list-item-author">
                                {pick.node.frontmatter.authors.map(author => (
                                    <Link to={"contributor/"+convertToSlug(author)}><span>{author}</span></Link>
                                ))}
                            </div>
                            <div class="feature-list-item-release-date">{pick.node.frontmatter.date}</div>
                            </li>
                        ))}
                        </ol>
                    </div>
                </div>
            <div class="clearfix"></div>
            </section>
        </div>
    </Layout>)
