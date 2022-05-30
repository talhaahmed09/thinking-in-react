import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";

const FilterableProductTable = (props) => {
    const {data} = props;

    return (
        <div>
       <SearchBar/>
       <ProductTable/>
       </div>
    )
}

export default FilterableProductTable;