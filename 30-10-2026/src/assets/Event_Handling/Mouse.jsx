
function Mouse(){
   function handleClick(){
    alert("Mouse click");
   }
    
   function handleMouseover(){
    console.log("Mouse is over the button");
   }

   function handleMouseout(){
    console.log("mouse left the button");
   }

return(
    <div>
         <button
         onClick={handleClick}
         onMouseOver={handleMouseover}
         onMouseOut={handleMouseout}
         >
            click Me
         </button>

    </div>
);
}
export default Mouse;