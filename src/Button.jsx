function doSomething(event){
    console.log("hello world");
    console.log(event);
}
function hvr(){
    console.log("hover");
}
function handleDbl(){
    console.log("Double clicked");
}
export default function Button(){
    return (
        <>
        <button onClick={doSomething}>Click me</button>
        <p onMouseOver={hvr}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestias nisi corporis expedita veritatis, culpa enim quibusdam corrupti nobis iste, cum magni odit excepturi ad maxime. Labore veritatis nesciunt doloremque.</p>
        <button onDoubleClick={handleDbl}>Double Click</button>
        </>
    )
}