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

export async function fetchRandomMeal(): Promise<any> {
  const meals = await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  ).json();
  return meals;
}

export async function fetchMealsByLetters(letter: string): Promise<any> {
  const meals = await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  ).json();
  return meals;
}

export async function fetchByCategory(category: string): Promise<any> {
  const meals = await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  ).json();
  return meals;
}

export async function fetchMealsByCountry(country: string): Promise<any> {
  const meals = await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  ).json();
  return meals;
}

