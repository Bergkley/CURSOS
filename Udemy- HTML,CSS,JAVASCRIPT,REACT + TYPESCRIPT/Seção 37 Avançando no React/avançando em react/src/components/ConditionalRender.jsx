const ConditionalRender = () => {
    const x = 5;
    const name = "Berg";

  return (
    <div>
      {/* 7 - render condicional */}
      <h3>Isso será exibido?</h3>
      {x>2 && <p>é maior que 2 </p>}
      {/* 8 - ternário */}
      <h3>Ternário</h3>
      {name === "Berg" ? (
        <div>
            <p>O nome é Berg</p>
        </div>
      ):(
        <div>
            <p>O nome não é Berg</p>
        </div>
      )}
    </div>
  )
}

export default ConditionalRender
