import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Article from '../Article';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://rsd15052019.azurewebsites.net/"
});



const GET_ARTICLES = gql`{articles {
    id
    title
  }
}`;


const ArticleList = () => {
  // client
  // .query({
  //   query: GET_ARTICLES
  // })
  // .then(result => console.log('resu;t', result));
  
  fetch('http://rsd15052019.azurewebsites.net/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/graphql',
    },
    body: 'query {articles(){id title}}',
  }).then((error, result) => console.log('usual query', error, result));
  return (
    <div>list</div>
  )
//   return (
//   <Query query={GET_ARTICLES}>
//     {({ loading, error, data }) => {
//       console.log('loaded', loading, error, data);
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;

//       return data.articles.map(({ id, title }) => (
//         <Article key={id} title={title}>

//         </Article>
//       ));
//     }}
//   </Query>
// )
  }

export default ArticleList;
