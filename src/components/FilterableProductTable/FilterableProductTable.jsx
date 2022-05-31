import { useEffect, useState } from "react";
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";


function FilterableProductTable({data}) {

  const [filteredText, setFilteredText] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheckBox = (e) => {
    setChecked((checked) => !checked);
  };

  const handleInputChange = (e) => {
    console.log('handleInputChange');
    setFilteredText(e.target.value);   
  };



  return (
    <div>
      <SearchBar
        filteredText={filteredText}
        checked={checked}
        handleCheckBox={handleCheckBox}
        handleInputChange={handleInputChange}
      />
      <ProductTable data={data} checked={checked} filteredText={filteredText}  />
    </div>
  );
};

export default FilterableProductTable;
