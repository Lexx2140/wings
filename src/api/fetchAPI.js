async function fetchREST(url, data) {
  const URL = window.BAMBOO.restapi + url;

  const options = {
    method: "POST",
    credentials: 'include',
    headers: {
      // "Content-Type": "application/json",
      "X-WP-Nonce": window.BAMBOO.nonce,
    },
    // body: JSON.stringify(data)
    body: data,
  };

  try {
    const data = fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Fetch error");
  }
}

async function fetchGQL(query) {
  const url = window.BAMBOO.graphql;

  const options = {
    method: "POST",
    headers: {
      // "Accept": "application/json",
      "Content-Type": "application/json",
      "X-WP-Nonce": window.BAMBOO.nonce,
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = fetch(url, options).then((response) => {
      return response.json();
    });
    return data;
  } catch (error) {
    throw new Error("Fetch error");
  }
}

export { fetchREST, fetchGQL };
