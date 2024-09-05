
const Event = () => {
    const handleClick = () => {
        console.log('Executou')
    };
  return (
    <div>
      <div>
        <button onClick={() => console.log("Clicou")}>Clique aqui</button>
      </div>
      <div>
        <button onClick={handleClick}>Clique aqui função</button>
      </div>
    </div>
  )
}

export default Event
