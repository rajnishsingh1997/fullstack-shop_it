const Categories = ({ categories = [] }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-wrap gap-4">
        {categories.map((eachCategory, index) => (
          <button
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
