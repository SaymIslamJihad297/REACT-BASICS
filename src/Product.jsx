import './Product.css';

function Product({title, price, elements, newElement, listArray}){
    // const list = listArray.map((list) => <li>{list}</li>);
    // const styles = {backgroundColor: price>=3000 ? "yellow" : "green"};

    let isDiscount = price>=3000;
    const styles = {backgroundColor: isDiscount ? "yellow" : "green"};
    return (
        <div className='Product' style={styles}>
        <div>
        <h1>{title}</h1>
        <p>Price: {price}</p>
        {/* <p>{price >= 3000 ? "Discount: 5%" : ""}</p> */}
        {/* {price >= 3000 ? <p>Discount: 5%</p> : null} */}
        {isDiscount && <p>Discount: 5%</p>}
        <p>{elements}</p>
        <p>{newElement}</p>
        {/* <p>{listArray.map((list) => <li>{list}</li>)}</p> */}
        </div>
        </div>
    )
}

export default Product