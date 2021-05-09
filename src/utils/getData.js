
function getData(url) {

  const data = fetch(url);
  return data.then(data => data.json());
}

export default getData;
