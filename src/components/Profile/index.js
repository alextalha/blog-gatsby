import  React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"


const Profile = () => {

    const {
        site: {
            siteMetadata: { title,position,description },
        },

    } = useStaticQuery(graphql`
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
    `)

    return (
        <div className="Profile-wrapper">
            <h1>{title}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div> 
    )
}

export default Profile
