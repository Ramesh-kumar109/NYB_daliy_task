
function Logical_and() {
  const condition=true;
//  const condition=false;
  return (
    <div>
      <h2>Logical AND Operator</h2>
      <p>Logical AND operator is used to conditionally render elements.</p>
      {condition && <p>Condition is true!</p>}

    </div>
  )
}

export default Logical_and;