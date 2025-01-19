import Product from "./Product";

function ProductTab(){
    let newArray = [<li>hello</li>, <li>gello</li>, <li>Cello</li>];
    return (
        <>
        <Product title="phone" price={30000} elements={["hello", "world", "jihad", "rabeya"]} newElement={newArray} listArray={["hello", "gello", "cello"]} />
        <Product title="laptop" price={300} elements={["hello", "world", "jihad", "rabeya"]} newElement={newArray}  listArray={["hello", "gello", "cello"]} />
        <Product title="computer" price={30000} elements={["hello", "world", "jihad", "rabeya"]} newElement={newArray}  listArray={["hello", "gello", "cello"]} />
        </>
    )
}

export default ProductTab