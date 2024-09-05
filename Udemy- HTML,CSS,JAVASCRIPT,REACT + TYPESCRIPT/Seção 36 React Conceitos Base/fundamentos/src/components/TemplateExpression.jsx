const TemplateExpression = () => {
    const name = "Berg";
    const data = {
      age: 20,
      job: "Programador"
    }
  return (
    <div>
      <p>{`soma é ${2 + 2}`}</p>
      <h3>O nome é {name}</h3>
      <p>{`A idade é ${data.age} e o trabalho é ${data.job}`}</p>
    </div>
  )
}

export default TemplateExpression
