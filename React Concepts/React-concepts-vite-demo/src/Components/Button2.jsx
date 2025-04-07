function Button2 () {
    // const handleClick = (e) => console.log(e);

    const handleClick = (e) => {
        if(e.target.textContent === "Ouch!"){
            e.target.textContent = "Stop!";
        }else{
            e.target.textContent = "Ouch!";
        }
    }

    return (<button onDoubleClick = {(e) => handleClick(e)}>Click me 2</button>);
}
export default Button2;

//adding all the 