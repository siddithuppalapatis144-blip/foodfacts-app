function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product;

  return (
    <div className="food-card">

      {/* ✅ Image with fallback */}
      <img
        src={image_small_url || "https://via.placeholder.com/100"}
        alt={product_name || "No Image"}
      />

      {/* ✅ Product Name */}
      <h3>{product_name || "No Name Available"}</h3>

      {/* ✅ Brand */}
      <p><strong>Brand:</strong> {brands || "Unknown"}</p>

      {/* ✅ Nutriments (using optional chaining) */}
      <p>Calories: {nutriments?.energy_kcal ?? "N/A"}</p>
      <p>Protein: {nutriments?.proteins ?? "N/A"} g</p>
      <p>Carbs: {nutriments?.carbohydrates ?? "N/A"} g</p>
      <p>Fat: {nutriments?.fat ?? "N/A"} g</p>

    </div>
  );
}

export default FoodCard;