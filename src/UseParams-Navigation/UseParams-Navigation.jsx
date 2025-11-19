import { useSearchParams } from "react-router-dom";

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get a specific search parameter
  const category = searchParams.get("category");

  // Update search parameters
  const updateCategory = () => {
    setSearchParams({ category: "newCategory" });
  };

  return (
    <div>
      <p>Current Category: {category}</p>
      <button onClick={updateCategory}>Update Category</button>
    </div>
  );
}
export default MyComponent;






