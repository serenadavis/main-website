import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Image from "../components/image"
// import issue_full_date_compare from "../../advo_tools"

export const query = graphql`
{
    issue_full_names: allMarkdownRemark {
        distinct(field: frontmatter___issue_full_name)
    }
}
`
function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
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

export default ({data}) => {
    var issue_full_names = data.issue_full_names.distinct
    issue_full_names.sort(issue_full_date_compare)
    issue_full_names.reverse()
    return (
        <Layout>
            <div class="container">
                {issue_full_names.map( (issue_full_name, i) => {
                    if ((i + 1) % 4 === 0) {
                        return (
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                        <h2 class="subheader" style={{fontSize: "16px", padding: "0"}}>{issue_full_name}</h2>
                                        <figure>
                                            <Link to={"issue/"+convertToSlug(issue_full_name)} className="no-decoration">
                                                {/* <img class='img-responsive' style={{margin: "0 auto;"}} src={data.metadata.siteMetadata.mediaUrl+'covers/'+convertToSlug(issue_full_name)} alt=""/> */}
                                                <Image name={convertToSlug(issue_full_name)+".png"}/>
                                            </Link>
                                        </figure>
                                    </div>
                                </div>)
                    } else {
                        return (
                                <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                    <h2 class="subheader" style={{fontSize: "16px", padding: "0"}}>{issue_full_name}</h2>
                                    <figure>
                                        <Link to={"issue/"+convertToSlug(issue_full_name)} className="no-decoration">
                                            {/* <img class='img-responsive' style={{margin: "0 auto;"}} src={data.metadata.siteMetadata.mediaUrl+'covers/'+convertToSlug(issue_full_name)} alt=""/> */}
                                            <Image name={convertToSlug(issue_full_name)+".png"}/>
                                        </Link>
                                    </figure>
                                </div>
                            )              
                    }
                })}
            </div>
        </Layout>
)}