export async function fetchMeals(): Promise<any> {
  const meals = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  ).json();
  return meals;
}

export async function fetchMealsCategory(): Promise<any> {
  const meals = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  ).json();
  return meals;
}

export async function fetchMealsZones(): Promise<any> {
  const meals = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  ).json();
  return meals;
}