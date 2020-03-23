import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopLayout from "../../components/ShopLayout/ShopLayout"
import { SiteTitlesQuery } from '../../../graphql-types'
import { ThemeProvider } from "@material-ui/core";
import {theme} from '../../utils/globalStyle';

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const data: SiteTitlesQuery = useStaticQuery(graphql`
    query ShopTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <ShopLayout>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <p>{data.site?.siteMetadata?.title}</p>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ShopLayout>
    </ThemeProvider>
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
