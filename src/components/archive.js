import React from 'react'
import { Link, navigate } from "gatsby"
import Image from "./image"

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

function make_archive_item(a) {
	var by = a.frontmatter.authors.join(" ")
    var message = a.frontmatter.section === "art" ? "See More >>" : "Continue Reading >>";
var photo = a.frontmatter.images ? (<Link to={"/content/"+a.frontmatter.slug}><Image name={a.frontmatter.images[0]} /></Link>) : "";
	return (
	  <li class="archive-item">
        <span class="item-title"><Link to={"/content/"+a.frontmatter.slug}>{a.frontmatter.title}</Link></span>
        <span class="item-author"><Link to={"/content/"+a.frontmatter.slug}>By {by}</Link></span>
        <span class="title-underline"></span>
        <div class="item-sample">{photo}{a.excerpt}</div>
        <div class="shadow"></div>
        <div class="item-continue-reading">
            <Link to={"/content/"+a.frontmatter.slug}>{message}</Link>
        </div>
  	  </li>
  	);
}

function issue_full_date_compare(a, b) {
    const a_parts = a.split(" ")
    const b_parts = b.split(" ")
    const issue_order = ['Spring', 'Summer', 'Commencement', 'Fall', 'Winter']

    // If the issue have different years, we can compare the years directly
    if (a_parts[1] !== b_parts[1]) {
        return parseInt(a_parts[1]) - parseInt(b_parts[1])
    } else {
        return issue_order.indexOf(a_parts[0]) - issue_order.indexOf(b_parts[0])
    }
}

class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    onChange(selectedOption) {
        navigate('/'+this.props.section+'/'+selectedOption.target.value+"#archive")
    };

    render() {
        const articles = this.props.articles;
        var issue_full_names = this.props.issue_full_names.distinct;
        issue_full_names.sort(issue_full_date_compare);
        issue_full_names.reverse();
        const issue_full_name = this.props.issue_full_name;
        const section = this.props.section;
        return (
            <div id='archive'>
                <h3 class="section-title">
                Explore The {section} Archives
                </h3>
                <span class="description">Browse works selected from past issues</span>
                <div class="issue-selector">
                    <span class="select-issue-label">Select an issue: </span>
                    <select class="select-issue-dropdown" onChange={this.onChange} value={convertToSlug(issue_full_name)}>
                        {issue_full_names.map(name => (
                            <option key={convertToSlug(name)}
                                    value={convertToSlug(name)}>{name}</option>
                        ))}
                    </select>
                </div>
                <ul class={"archive"+section+"-page"}>
                    {articles.map(article => {
                        return make_archive_item(article.node)
                    })}
                </ul>
                <div className="clearfix"/>
            </div>
        );
    }
}

export default Archive;
