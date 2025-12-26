"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "@/component/Hero/Hero";
import UniversityCard from "@/component/UniversityCard/UniversityCard";
import Filters from "@/component/Filters/Filters";
import UniversityList from "@/component/UniversityList/UniversityList";

const COUNTRIES = ["USA", "Canada", "UK", "Australia", "Germany"];
const DEGREES = ["Bachelor's", "Master's", "PhD"];

const App = () => {
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedDegree, setSelectedDegree] = useState("All");
  const [tuitionRange, setTuitionRange] = useState(50000);
  const [userGPA, setUserGPA] = useState("");
  const [userIELTS, setUserIELTS] = useState("");

  const fetchUniversities = async () => {
    const { data } = await axios.get("https://the-admission-server-production.up.railway.app/api/universities", {
      params: {
        search: searchTerm,
        country: selectedCountry,
        degree: selectedDegree,
        tuitionMax: tuitionRange,
      },
    });
    setUniversities(data);
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  const checkEligibility = (univ) => {
    if (!userGPA || !userIELTS) return null;
    return (
      parseFloat(userGPA) >= univ.minGPA &&
      parseFloat(userIELTS) >= univ.minIELTS
    );
  };

  return (
    <div>
      <Hero
        {...{
          searchTerm,
          setSearchTerm,
          selectedCountry,
          setSelectedCountry,
          selectedDegree,
          setSelectedDegree,
          COUNTRIES,
          DEGREES,
        }}
        onSearch={fetchUniversities}
      />
      <div className="flex gap-4 p-4">
        <Filters
          {...{
            tuitionRange,
            setTuitionRange,
            userGPA,
            setUserGPA,
            userIELTS,
            setUserIELTS,
          }}
        />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {universities.map((u) => (
            <UniversityCard
              key={u.id}
              univ={u}
              eligible={checkEligibility(u)}
              onApply={() => {}}
              toggleCompare={() => {}}
              isCompared={false}
            />
          ))}
        </div> */}
        <div className="flex-1">
          <UniversityList universities={universities} />
        </div>
      </div>
    </div>
  );
};

export default App;
