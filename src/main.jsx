import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "@/context";
import { initialState } from "@/context/state";

import App from './App'



const client = new ApolloClient({
    uri: "https://petgram-server-jsonfm.vercel.app/graphql",
    cache: new InMemoryCache(),
});


const state = initialState();


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
  </Provider>
)
