import { fetchGQL, fetchREST } from "../fetchAPI";

import SiteData from './siteData.gql';
import Pages from './pages.gql';

/* Get all pages */
async function getPages() {
  const response = await fetchGQL(Pages);
  return (response.data.pages.edges) ? response.data.pages.edges : [];
}

/* Get all site options */
async function getSiteData() {
  const response = await fetchGQL(SiteData);
  return (response.data) ? response.data : [];
}

/* Test */
async function testQuery() {
  let options = await getPages();
  // console.log(options);
}

export { testQuery, getPages, getSiteData }