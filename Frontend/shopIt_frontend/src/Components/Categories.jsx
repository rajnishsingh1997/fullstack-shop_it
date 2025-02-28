const Categories = ({ categories = [], setSelectedCategories }) => {
  function handleCatgoriesChange(userSelectedCategories) {
    setSelectedCategories(userSelectedCategories);
  }

  function handleResetCategories() {
    setSelectedCategories("");
  }
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleResetCategories}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          All Product
        </button>
        {categories.map((eachCategory, index) => (
          <button
            onClick={() => {
              handleCatgoriesChange(eachCategory);
            }}
            key={index}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {eachCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
