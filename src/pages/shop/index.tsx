import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopLayout from "../../components/ShopLayout/ShopLayout"
import { SiteTitlesQuery } from '../../../graphql-types'
import { ThemeProvider } from "@material-ui/core";
import { theme } from '../../utils/globalStyle';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shoping section</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <ShopLayout />
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
