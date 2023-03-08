export async function fetchProduct(): Promise<any> {
  const meals = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  ).json();
  return meals;
}
