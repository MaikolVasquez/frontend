
 function getData(url) {

  let data = fetch(url);
  return data.then(data=>data.json())
}

export default getData;
