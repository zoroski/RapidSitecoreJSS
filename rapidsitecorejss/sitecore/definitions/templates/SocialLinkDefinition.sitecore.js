// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from './node_modules/@sitecore-jss/sitecore-jss-manifest';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addTemplate({
    name: 'SocialLinkDefinition',
    fields: [{ name: 'url', type: CommonFieldTypes.SingleLineText }],
  });
}