import { Fragment, useEffect } from "react";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";

const ProductTable = (props) => {
  const { data, checked, filteredText } = props;

  let filteredData = [];

  let filteredResults = data.filter(
    (item) => item.name.toLowerCase().indexOf(filteredText.toLowerCase()) > -1
  );

  if (checked) {
    filteredResults = filteredResults.filter((item) => item.stocked == checked);
  }

  // setfilteredData(filteredResults);
  filteredData = filteredResults;
  let category = null;

  const updateCategory = (prev) => {
    category = prev;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item,i) => {
            
            return (
              <Fragment key={i}>
               
              { item.category !== category && <ProductCategoryRow category={item.category} />}
              {updateCategory(item.category) }
                <ProductRow product={item}  />
              </Fragment>
            );
            
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
