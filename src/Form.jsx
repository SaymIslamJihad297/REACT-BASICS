function handleSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

export default function Form(){
    return (
        <>
        <form action="">
            <input type="text" placeholder="write soemthing" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}