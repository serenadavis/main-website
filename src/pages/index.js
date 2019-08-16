import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SmallArticleDisplay from "../components/small_article_display"
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
    metadata: site {
        siteMetadata {
            mediaUrl
        }
    }
}
`

export default ({data}) => (
    <Layout>
        <div class="homepage">
            <section class="top-features">
                <a href='features'>
                    <div class="container-left-half" id="feature-1">
                        <div class="category-rule">
                        <h4 class="category-label">Featured</h4>
                        </div>
                        <div class="feature-image-container-large">
                        <div class="feature-image" id="feature-1-image">
                            <img style={{width: "100%", overflow:"hidden"}} src={data.metadata.siteMetadata.mediaUrl + "sites/default/files/building_shot.png"} />
                        </div>
                        </div>
                        <div class="feature-title-large">
                        {data.features.edges[0].node.frontmatter.title}
                        </div>
                        <div class="feature-description-large">
                        {data.features.edges[0].node.excerpt}
                        </div>
                        <span class="feature-author">
                            {data.features.edges[0].node.frontmatter.authors.map(author => (
                                <a href="{{ author.get_absolute_url }}" class="no-decoration">{author}</a>
                            ))}
                        </span>
                        <div class="feature-release-date">{data.features.edges[0].node.frontmatter.date}</div>
                    </div>
                <div className="container-right-half">
                    <SmallArticleDisplay data={data.features.edges[1]} metadata={data.metadata}/>
                    <SmallArticleDisplay data={data.fiction.edges[0]} metadata={data.metadata}/>
                    <div class="clearfix"></div>
                    <SmallArticleDisplay data={data.poetry.edges[0]} metadata={data.metadata}/>
                    <SmallArticleDisplay data={data.art.edges[4]} metadata={data.metadata}/>
                </div>
                </a>
            </section>
        </div>
        </Layout>)
            {/* <div class="container-right-half">
            <a href='{% url "article" feature_2.id feature_2.slug %}'>
                <div class="container-left-quarter" id="feature-2">
                <div class="category-rule">
                    <h4 class="category-label">{{ feature_2.section }}</h4>
                </div>
                <div class="feature-title-small">
                    {{feature_2.title}}
                </div>
                <div class="feature-description-small">
                    {{feature_2.teaser| safe | striptags | truncatewords:30}}
                </div>
                <div class="feature-author">
                    {% for author in feature_2.contributors.all %}
                        <a href="{{ author.get_absolute_url }}">{{ author.name }}</a>
                    {% empty %}
                        <h3 class="subheader-article-author"> No Author </h3> 
                    {% endfor %}
                </div>
                <div class="feature-release-date-small">{{ feature_2.publishDate |date:"M d Y" }}</div>
                </div>
            </a>
            <a href='{% url "article" feature_3.id feature_3.slug %}'>
                <div class="container-right-quarter" id="feature-3">
                <div class="category-rule">
                    <h4 class="category-label">{{ feature_3.section }}</h4>
                </div>
                <div class="feature-title-small">
                    {{ feature_3.title }}
                </div>
                <div class="feature-description-small">
                    {{feature_3.teaser| safe | striptags | truncatewords:27}}
                </div>
                <div class="feature-author">
                    {% for author in feature_3.contributors.all %}
                        <a href="{{ author.get_absolute_url }}">{{ author.name }}</a>
                    {% empty %}
                        <h3 class="subheader-article-author"> No Author </h3> 
                    {% endfor %}            
                </div>
                <div class="feature-release-date-small">{{ feature_2.publishDate |date:"M d Y"  }}</div>
                </div>
            </a>
            <div class="clearfix"></div>

            <a href='{{ feature_4.get_absolute_url }}'> 
            <div class="container-left-quarter" id="feature-4">
                <div class="category-rule">
                    <h4 class="category-label">{{ feature_4.section }}</h4>
                    </div>
                    <div class="feature-title-small">
                        {{feature_4.title}}
                    </div>
                    <div class="feature-description-small">
                        {{feature_4.teaser|safe|striptags|truncatewords:30}}
                    </div>
                    <div class="feature-author">
                        {% for author in feature_4.contributors.all %}
                        <a href="{{ author.get_absolute_url }}">{{ author.name }}</a>
                        {% empty %}
                        <h3 class="subheader-article-author"> No Author </h3> 
                        {% endfor %}
                    </div>
                    <div class="feature-release-date-small">{{ feature_4.publishDate |date:"M d Y" }}</div>
            </div>
            </a>
            <a href="{{ feature_5.get_absolute_url }}">
            <div class="container-right-quarter" id="feature-5">
                <div class="category-rule">
                <h4 class="category-label">Blog</h4>
                </div>
                <div class="feature-title-small">
                {{feature_5.title}}
                </div>
                <div class="feature-description-small">
                {{ feature_5.body | striptags | truncatewords:13}}
                <div class="feature-author">
                    {% for author in feature_5.authors.all %}
                    <a href="{{ author.get_absolute_url }}">{{ author.name }}<br></a>
                    {% empty %}
                    <h3 class="subheader-article-author"> No Author </h3> 
                    {% endfor %}
                </div>
                <div class="feature-release-date-small">{{ feature_5.created|date:"M d Y" }}</div>
                </div>
            </div>
            </a> */}
        {/* </section>

        <div class="clearfix"></div>

        <section class="banner-advertisement">
            {% if ads %} {% for ad in ads %}
            <div class="col-md-4">
                <article>
                    <a href="{% url 'advertise' %}" class="sponsored-link"> Sponsored </a>
                    <figure class="resize-image" style="margin:auto;">
                        <!--pass in art image link HERE-->
                        <a href="{{ ad.url }}"> <img src=" {{ ad.image.url }}" class="img-responsive" alt="Main Image"> </a>
                    </figure>
            </div>
            {% endfor %} {% endif %}
        </section>

        <section class="bottom-features">
            <div class="container-left-half">

            <div id="feature-current-issue">
                <div class="category-rule">
                <h4 class="category-label">Current Issue</h4>
                </div>
                <div class="current-issue-label">
                <a href='{% url "issue" issue.issue issue.year %}'>{{ issue.name }}</a>
                </div>
                <a href='{% url "issue" issue.issue issue.year %}'>
                <div class="feature-image-container-current-issue">
                    <div class="feature-image" id="feature-current-issue-image">
                        <img style="width: 100%;" src="{{ MEDIA_URL }}{{ issue.cover_image }}">
                    </div>
                </div>
                </a>
                <div class="current-issue-shop">
                <a href="{% url 'shop' %}">See Shop</a>
                </div>
            </div>

            <a href='{% url "article" feature_7.id feature_7.slug %}'>
                <div class="container-left-quarter" id="feature-7">
                    <div class="category-rule">
                    <h4 class="category-label">{{ feature_7.section }}</h4>
                    </div>
                    <div class="feature-title-small">
                    {{feature_7.title}}
                    </div>
                    <div class="feature-description-small">
                    {{ feature_7.body | safe | truncatewords:8}}
                    <div class="feature-author">
                        {% for author in feature_7.contributors.all %}
                        <a href="{% url 'contributor' author.id author.name %}">{{ author.name }}<br></a>
                        {% empty %}
                        <h3 class="subheader-article-author"> No Author </h3> 
                        {% endfor %}
                    </div>
                    <div class="feature-release-date-small">{{ feature_7.publishDate|date:"M d Y" }}</div>
                    </div>
                </div>
                </a>

            <a href='{% url "article" feature_6.id feature_6.slug %}'>
                <div class="container-right-quarter" id="feature-6">
                    <div class="category-rule">
                    <h4 class="category-label">{{ feature_6.section }}</h4>
                    </div>
                    <div class="feature-title-small">
                    {{feature_6.title}}
                    </div>
                    <div class="feature-description-small">
                    {{ feature_6.body | safe | truncatewords:13}}
                    <div class="feature-author">
                        {% for author in feature_6.contributors.all %}
                        <a href="{% url 'contributor' author.id author.name %}">{{ author.name }}<br></a>
                        {% empty %}
                        <h3 class="subheader-article-author"> No Author </h3> 
                        {% endfor %}
                    </div>
                    <div class="feature-release-date-small">{{ feature_6.publishDate|date:"M d Y" }}</div>
                    </div>
                </div>
                </a>
            <div class="clearfix"></div>
            </div>

            <div class="container-right-half">

            <div id="most-read">
                <div class="category-rule">
                <h4 class="category-label"></h4>
                </div>

                <ol class="homepage-list">
                {% for article in most_read %}
                    <li class="feature-list-item">
                    <div class="feature-list-item-title">
                        <a href='{% url "article" article.id article.slug %}'>{{ article.title }}</a>
                    </div>
                    <div class="feature-list-item-author">
                        {% for author in article.contributors.all %}
                        <a href="{% url 'contributor' author.id author.name %}"><span>{{ author.name }}</span></a>
                        {% empty %}
                        <span>No author</span>
                        {% endfor %}
                    </div>
                    <div class="feature-list-item-release-date">{{ article.publishDate|date:"F j, Y" }}</div>
                    </li>
                {% endfor %}
                </ol>
            </div>

            <div id="editors-picks">
                <div class="category-rule">
                <h4 class="category-label">From the Archives</h4>
                </div>
                <ol class="homepage-list">
                {% for article in editors_picks %}
                    <li class="feature-list-item">
                    <div class="feature-list-item-title">
                        <a href='{% url "article" article.id article.slug %}'>{{ article.title }}</a>
                    </div>
                    <div class="feature-list-item-author">
                        {% for author in article.contributors.all %}
                        <a href="{% url 'contributor' author.id author.name %}"><span>{{ author.name }}</span></a>
                        {% empty %}
                        <span>No author</span>
                        {% endfor %}
                    </div>
                    <div class="feature-list-item-release-date">{{ article.publishDate|date:"F j, Y" }}</div>
                    </li>
                {% endfor %}
                </ol>
            </div>

            </div>
        </section> */}

        {/* <div class="clearfix"></div>

        </div> */}
    {/* </Layout> */}
{/* // ) */}
