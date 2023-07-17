export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'db8fb4ca9fmsha494b8d5c766f68p1b1e14jsnb5bbae19e9cd',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers }
  );

  const result = await response.json();

  return result;
}