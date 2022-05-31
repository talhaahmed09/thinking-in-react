const SearchBar = (props) => {
    const {filteredText, checked, handleCheckBox, handleInputChange} = props;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filteredText}
          onChange={(e) => handleInputChange(e)}
        />
        <p>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => handleCheckBox(e)}
          />{" "}
          Only show products in stock
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
