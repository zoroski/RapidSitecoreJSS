import { SitecoreContextFactory } from '@sitecore-jss/sitecore-jss-react';

/*
  The SitecoreContextFactory stores the current Sitecore context for the app.
  For example, whether the page is currently being edited, or the current language.
  Note that the export makes this essentially a singleton, so we can store state in it.

  The Sitecore context is generally updated on route change (/src/index.js).
  The `withSitecoreContext()` higher order component from `sitecore-jss-react`
  can be used to access the context from within a component.
*/
// SitecoreContextFactory();
class MySitecoreContext extends SitecoreContextFactory {
  constructor(props = {}, forceUpdate) {
    super();
    this.additionalProps = props;
    this.forceUpdate = forceUpdate || (() => undefined);
  }

  setSitecoreContext(data) {
    super.setSitecoreContext({ ...data, ...this.additionalProps,
      update: this.forceUpdate
    });
  }
}

const factory = new MySitecoreContext({
  data: 'test'
});
export const wrapFactory = (forceUpdate) => new MySitecoreContext({
  data: 'test'
}, forceUpdate);
export default factory;
