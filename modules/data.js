async function loadData() {
  const response = await fetch(
    "https://lucaszago.dk/wp-childtheme/wp-json/wp/v2/bike?_embed"
  );
  const data = await response.json();
  return data;
  //   _APP = new Main(data);
  //   console.log("hey");
}
const data = loadData();
export default data;
