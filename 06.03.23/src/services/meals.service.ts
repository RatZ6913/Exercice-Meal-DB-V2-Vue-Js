export async function fetchMeals(): Promise<any> {
  const meals = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  ).json();
  return meals;
}

export async function fetchMealsCategory(): Promise<any> {
  const meals = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c")
  ).json();
  return meals;
}