const ConditionalRender = () => {
    const x = 5;
  return (
    <div>
      {/* 7 - render condicional */}
      <h3>Isso será exibido?</h3>
      {x>2 && <p>é maior que 2 </p>}
    </div>
  )
}

export default ConditionalRender
