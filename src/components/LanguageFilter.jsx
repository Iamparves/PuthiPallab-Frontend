import React from "react";
import { useSearchParams } from "react-router-dom";
import FilterCheckBox from "./FilterCheckBox";

const LanguageFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const languages = searchParams.get("bookLanguage")?.split(",") || [];

  const handleBookLanguage = (e) => {
    const bookLanguage = e.target.value;

    let newLanguages = [];

    if (languages.includes(bookLanguage)) {
      newLanguages = languages.filter((language) => language !== bookLanguage);
    } else {
      newLanguages = [...languages, bookLanguage];
    }

    setSearchParams((prev) => {
      if (newLanguages.length > 0) {
        prev.set("bookLanguage", newLanguages.join(","));
      } else {
        prev.delete("bookLanguage");
      }
      prev.set("page", "1");

      return prev;
    });
  };

  return (
    <div>
      <h3 className="border-b border-[#e1e1e1] pb-2 font-semibold tracking-wider">
        Language
      </h3>
      <div className="mt-4 flex gap-x-10 gap-y-3 md:flex-col">
        <FilterCheckBox
          value="বাংলা"
          handler={handleBookLanguage}
          list={languages}
        />
        <FilterCheckBox
          value="English"
          handler={handleBookLanguage}
          list={languages}
        />
      </div>
    </div>
  );
};

export default LanguageFilter;
