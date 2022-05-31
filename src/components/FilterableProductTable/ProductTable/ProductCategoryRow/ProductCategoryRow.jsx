const ProductCategoryRow = (props) => {

  const {category} = props;
    return (
        <tr  colSpan="2">
          <th className="text">{category}</th>
        </tr>
    )
}

export default ProductCategoryRow;