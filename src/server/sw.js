export async function getName() {
  try {
    const response = await fetch("https://swapi.co/api/people/1");
    const result = response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("networkError.message", error);
    return undefined;
  }
}
