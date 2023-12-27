import React from "react";
import { GiCheckMark } from "react-icons/gi";

const FilterCheckBox = ({ value, handler, list, genre }) => {
  return (
    <label className="group relative flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        name="bookLanguage"
        value={value}
        onChange={handler}
        checked={list.includes(value)}
        hidden
        className="[&:checked~span]:text-primary"
      />
      <span className="flex aspect-square h-4 items-center justify-center rounded-[4px] border border-[#e1e1e1] text-xs text-white duration-300 lg:group-hover:text-primary">
        <GiCheckMark />
      </span>
      <span className="text-sm leading-[1.3] text-[#1d1d1d] duration-300 lg:group-hover:text-primary">
        {genre || value}
      </span>
    </label>
  );
};

export default FilterCheckBox;
