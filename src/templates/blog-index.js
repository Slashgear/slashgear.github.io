import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Bio } from '../components/bio/bio.component'
import { Layout } from '../components/layout.component'
import { rhythm } from '../utils/typography'
import { Footer } from '../components/footer/footer.component'
import { ListMarkup } from '../components/markup/list.markup'
import { Foundation } from '../components/foundation/foundation.component'
import { OtherLanguage } from '../components/lang/otherLanguage.component'
import { List, ListItem } from '../components/list.component'

const Grid = styled(List)`
  --min-column-width: min(400px, 100%);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  gap: 24px;
  margin-top: 2rem;
`

const GridItem = styled(ListItem)`
  padding: 1rem 1.25rem;
  background: var(--bg-secondary);
  border-radius: 0.75rem;
  box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25);

  h2 {
    margin-top: 0;
  }
`

const BlogIndex = (props) => {
  const config = get(props, 'data.config')
  const posts = get(props, 'data.allMarkdownRemark.edges')
  const siteTitle = get(config, 'frontmatter.title')
  const description = get(config, 'frontmatter.description')
  const bio = get(config, 'html')
  const lang = props.pageContext.language

  return (
    <Layout location={props.location} config={config}>
      <Helmet
        htmlAttributes={{ lang }}
        meta={[{ name: 'description', content: description }]}
        title={siteTitle}
      />

      <ListMarkup
        posts={posts}
        siteUrl={props.data.site.siteMetadata.siteUrl}
      />

      <Bio component="header">
        <div dangerouslySetInnerHTML={{ __html: bio }} />
      </Bio>

      <OtherLanguage language={lang} />

      <Foundation lang={lang} />

      <main>
        <Grid>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <GridItem key={node.fields.slug}>
                <article>
                  <h2
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h2>
                  <span>
                    <time dateTime={node.frontmatter.dateJson}>
                      {node.frontmatter.date}
                    </time>
                  </span>
                  <span style={{ margin: '0 1rem' }}>
                    <span role="img" aria-label="Time to read">
                      🕐
                    </span>
                    {node.timeToRead}&nbsp;min
                  </span>
                  <span>
                    {(node.frontmatter.tags || []).map((tag) => (
                      <Link
                        style={{ marginRight: '0.5rem' }}
                        key={tag}
                        to={`/${props.pageContext.language}/${tag}`}
                        data-testid="tag"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </span>
                </article>
              </GridItem>
            )
          })}
        </Grid>
      </main>
      <Footer />
    </Layout>
  )
}

export default BlogIndex

export const blogIndexFragment = graphql`
  query BlogPost($language: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    config: markdownRemark(
      frontmatter: { language: { eq: $language }, type: { eq: "language" } }
    ) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        language
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { language: { eq: $language }, type: { eq: null } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            dateJson: date(formatString: "YYYY-MM-DD")
            description
            tags
          }
        }
      }
    }
  }
`
