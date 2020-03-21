import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import ShopLayout from "../../components/ShopLayout/ShopLayout"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query ShopTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ShopLayout>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ShopLayout>
    </>
  )
}

// export const PageQuery = graphql`
//   query HomepageProps {
//     __typename
//     contentfulPages {
//       title
//       metadata {
//         title
//         updatedAt(fromNow: false)
//         description {
//           content {
//             content {
//               value
//             }
//           }
//         }
//       }
//       background {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default Layout
