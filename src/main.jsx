import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink, concat } from "@apollo/client";
import { Provider } from "@/context";
import App from './App'


const httpLink = new HttpLink({ uri: 'https://petgram-server-jsonfm.vercel.app/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token_petgram')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
  </Provider>
)
