import  { useEffect, useState } from "react";

const UniversityList = () => {
  const [universities, setUniversities] = useState<unknown[]>([]);
 // Stores the full list of universities
  const [filteredUniversities, setFilteredUniversities] = useState([]); // Stores the filtered list
  const [searchTerm, setSearchTerm] = useState(""); // Stores the search term

  // Fetch data from the API
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?")
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data); // Set the full list
        setFilteredUniversities(data); // Initialize filtered list with full data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter universities based on search term
  useEffect(() => {
    const filtered = universities.filter((university) => {
      if (
        university &&
        typeof university === "object" &&
        "name" in university
      ) {
        return university.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    });
    setFilteredUniversities(filtered);
  }, [searchTerm, universities]);

  return (
    <div className="mt-10" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Indian Universities</h1>
      <input
        type="text"
        title="Search Universities"
        placeholder="Search universities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {filteredUniversities.map((university, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
            }}
          >
            <strong>{university.name}</strong> - {university.domains[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;
