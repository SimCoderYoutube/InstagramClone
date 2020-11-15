import * as React from 'react';

/**
 * Set the document title for the active screen
 */
export default function useDocumentTitle(ref, {
  enabled = true,
  formatter = (options, route) => {
    var _options$title;

    return (_options$title = options === null || options === void 0 ? void 0 : options.title) !== null && _options$title !== void 0 ? _options$title : route === null || route === void 0 ? void 0 : route.name;
  }
} = {}) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const navigation = ref.current;

    if (navigation) {
      const title = formatter(navigation.getCurrentOptions(), navigation.getCurrentRoute());
      document.title = title;
    }

    return navigation === null || navigation === void 0 ? void 0 : navigation.addListener('options', e => {
      const title = formatter(e.data.options, navigation === null || navigation === void 0 ? void 0 : navigation.getCurrentRoute());
      document.title = title;
    });
  });
}
//# sourceMappingURL=useDocumentTitle.js.map