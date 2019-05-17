// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import { readFileSync } from 'fs';
import { gql } from "apollo-boost";

const GET_ARTICLES = gql`{
  articles() {
    id
    title
  }
  }`;

const query = readFileSync(
  'sitecore/definitions/components/ArticleList.sitecore.graphql',
  'utf8'
);


/**
 * Adds the ArticleList component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'ArticleList',
    icon: SitecoreIcon.DocumentTag,
    graphQLQuery: GET_ARTICLES /*'http://rsd15052019.azurewebsites.net/',*/
    // fields: [
    //   { name: 'heading', type: CommonFieldTypes.SingleLineText },
    // ],
  });
}
