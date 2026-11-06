function ComponentCopostion(props) {
  return (
    <div style={{border:"1px solid black",padding:"15px"}}>
         {props.children}
    </div>
  )
}

export default ComponentCopostion