// src/components/SkillSelector.tsx

import { useState, useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "../../../Services/lightcastAuth";

// Define skill type (assuming Lightcast API provides skills in this format)
interface Skill {
  name: string;
  description: string;
}

const SkillSelector = () => {
  const [search, setSearch] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);

  // Fetch skills data from Lightcast API
  useEffect(() => {
    const fetchSkills = async () => {
      const token = await getAccessToken(); // Get access token from lightcastAuth.ts

      if (token) {
        try {
          const response = await axios.get("https://api.lightcast.dev/skills", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setSkills(response.data.skills); // Store the skills data
        } catch (error) {
          console.error("Error fetching skills:", error);
        }
      }
    };

    fetchSkills(); // Trigger the skill fetch on component mount
  }, []);

  // Filter skills based on user search input
  useEffect(() => {
    if (search.length > 1) {
      setFilteredSkills(
        skills.filter((skill) =>
          skill.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredSkills([]);
    }
  }, [search, skills]);

  return (
    <div className="mt-32">
      <input
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display filtered skills */}
      {filteredSkills.length > 0 && (
        <ul>
          {filteredSkills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillSelector;
