import React from "react";
import { useSearchParams } from "react-router-dom";

const Language = ({ language, handleBookLanguage, languages }) => {
  return (
    <label className="my-2 flex cursor-pointer items-center">
      <input
        type="checkbox"
        name="bookLanguage"
        value={language}
        className="mr-2"
        onChange={handleBookLanguage}
        defaultChecked={languages.includes(language)}
      />
      {language}
    </label>
  );
};

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
    <div className="">
      <h3 className="border-b border-[#e1e1e1] pb-5 text-lg tracking-wider ">
        Language
      </h3>
      <div className="mt-5">
        <Language
          language="বাংলা"
          handleBookLanguage={handleBookLanguage}
          languages={languages}
        />
        <Language
          language="English"
          handleBookLanguage={handleBookLanguage}
          languages={languages}
        />
      </div>
    </div>
  );
};

export default LanguageFilter;
