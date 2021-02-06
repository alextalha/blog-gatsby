import  React from "react"
import { StaticQuery, graphql } from "gatsby"
import { siteMetadata } from "../../../gatsby-config"

const Profile = () => (
    <StaticQuery 
        query={graphql`
        query MyQuery {
            site {
                siteMetadata {
                author
                description
                title,
                position
                        }
                    }
                }
        `}
    render={data => (

    <div className="Profile-wrapper">
        <h1>{data.site,siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.description}</h2>
        <p>
        </p>
    </div>  
    )}
    />
)

export default Profile
