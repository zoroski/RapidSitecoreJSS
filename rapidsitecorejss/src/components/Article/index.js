import React from 'react';

const Article = (props) => (
  <a class="article" href={props.id}>
      <div class="article-thumbnail">
          <img src={props.url || ''} class="img-thumbnail" alt="Article thumbnail" />
      </div>
      <div class="article-info">
          <h3 class="article-title">{props.title}</h3>
          <p class="article-dexcription">{props.description || ''}</p>
      </div>
  </a>
);

export default Article;
