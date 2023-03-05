import React, { lazy } from 'react';

export default function getPageRoutes(pages) {
  return pages.map((page) => {
    const tplName = page.node.pageOptions.template;
    const isTaxonomy = page.node.pageOptions.isTaxonomy;

    const component = lazy(() =>
      import(`../pages/${tplName.toLowerCase()}/${tplName}`)
    );

    const slug = page.node.isFrontPage ? "/" : page.node.slug;
    const path = (isTaxonomy) ? `${slug}/:slug` : slug;

    return {
      path: path,
      component,
    };
  });
}
