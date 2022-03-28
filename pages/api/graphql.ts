// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer, gql } from 'apollo-server-micro';


const typeDefs = gql`
  type Query {
    widgets: [Widget!]!
    page: Page!
  }

  type Widget {
    id: Int!
    name: String!
    size: Int
  }

  type CallToAction {
    text: String!
    url: String!
  }

  type Page {
    title: String!
    subtitle: String!
    cta: CallToAction!
  }
`;

const resolvers = {
  Query: {
    widgets() {
      return [
        { id: 1, name: 'Potato', size: 1 },
        { id: 2, name: 'Thing', size: 4 },
        { id: 3, name: 'Light', size: 2 },
        { id: 4, name: 'Mountain', size: 9 },
        { id: 5, name: 'Apple', size: 7 },
      ]
    },
    page(){
      return {
        title: 'Welcome to the page!',
        subtitle: 'This is the greatest page. We talk about all kinds of cool stuff you want to learn about. Like state management.',
        cta: {
          text: 'Let\'s learn more!',
          url: 'https://www.youtube.com/channel/UCPZHZ6U2jmaTdxuYFD9Fmgw'
        }
      }
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}