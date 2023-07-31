export async function getProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) {
      throw new Error(`Server error. status: ${res.status}`);
    }
    const json = await res.json();
    const selectedProducts = json.products.slice(0, 20);
    console.log(selectedProducts);
    return selectedProducts;
  } catch (error) {
    throw new Error(error);
  }
}
