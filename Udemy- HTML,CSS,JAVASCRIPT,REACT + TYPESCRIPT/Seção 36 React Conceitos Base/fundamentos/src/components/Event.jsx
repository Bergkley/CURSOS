
const Event = () => {
    const handleClick = () => {
        console.log('Executou')
    };

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Não renderizando isso!</h1>
        }
    }
  return (
    <div>
      <div>
        <button onClick={() => console.log("Clicou")}>Clique aqui</button>
      </div>
      <div>
        <button onClick={handleClick}>Clique aqui função</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Event
