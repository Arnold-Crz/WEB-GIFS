const apiKey = 'cKH9bwiCiYKTQLR6XAlDjasu9Wjf1NbW&q';

const getGifs = async ({ keyword } = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en;`;

  const response = await fetch(apiURL);
  const res = await response.json();
  const { data } = res;

  const gifs = data.map((singleGifs) => {
    const { id, title, images } = singleGifs;
    const { url } = images.downsized_medium;
    return { id, title, url };
  });
  return gifs;

  /* return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((img) => img.images.downsized_medium.url);
      return gifs;
    }); */
};

export default getGifs;
