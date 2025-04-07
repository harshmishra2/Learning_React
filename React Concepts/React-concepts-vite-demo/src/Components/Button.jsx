function Button(){

    let count = 0;

    const handleClick = (name) => {
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }else{
            console.log('stop clicking me');
        }
    }

    // const handleClick = () => {console.log("ouch!");}

    return (<button onClick= {() => handleClick("rash")}>Click me dawg</button>);
}

export default Button

//onClick is the event-handler here.