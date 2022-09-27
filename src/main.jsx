import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Context } from "@/context";
import { initialState } from "@/context/state";

import App from './App'



const client = new ApolloClient({
    uri: "https://petgram-server-jsonfm.vercel.app/graphql",
    cache: new InMemoryCache(),
});


const state = initialState();


ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={state}>
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
  </Context.Provider>
)
