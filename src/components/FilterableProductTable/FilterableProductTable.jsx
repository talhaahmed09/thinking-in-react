import { useEffect, useState } from "react";
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";


function FilterableProductTable({data}) {

  const [filteredText, setFilteredText] = useState("");
  const [checked, setChecked] = useState(false);
  // const [filteredData, setfilteredData ] = useState(data);


  // useEffect(() => {
  //   updateFilteredData();
  // }, [filteredText,checked])
  

  // const updateFilteredData = () => {
  //   console.log("I was run");

  //   let filteredResults = data.filter(item => item.name.toLowerCase().indexOf(filteredText.toLowerCase()) > -1);

  //   if(checked) {
  //     filteredResults= filteredResults.filter(item => item.stocked == checked);
  //   }

  //   setfilteredData(filteredResults);

  //   console.log(filteredResults);
  // };

  const handleCheckBox = (e) => {
    console.log('handleCheckBox');
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
