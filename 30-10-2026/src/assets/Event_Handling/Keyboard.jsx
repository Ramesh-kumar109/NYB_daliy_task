function Keyboard(){

function keyboardown(event){
console.log("Keyboard pressed"+event.key);
}
function keyboardup(event){
console.log("Keyboard Release"+event.key);
}
return(
    <div>
        <h2>On keyboard event</h2>
           <input type="text"
           placeholder="Press any key"
            onKeyDown={keyboardown}
            onKeyUp={keyboardup} 
            />
    </div>
);
}
export default Keyboard;