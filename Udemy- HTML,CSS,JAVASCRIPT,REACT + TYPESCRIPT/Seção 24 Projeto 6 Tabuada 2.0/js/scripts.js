// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const operatorInputs = document.querySelectorAll('input[name="operator"]');

const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// Funções
const createTable = (number, multiplicatorNumber, operators) => {
  multiplicationTable.innerHTML = "";

  operators.forEach((operator) => {
    const sectionTitle = document.createElement("h3");
    sectionTitle.innerText = `Operador: ${operator}`;
    multiplicationTable.appendChild(sectionTitle);

    for (let i = 1; i <= multiplicatorNumber; i++) {
      let result;
      switch (operator) {
        case "+":
          result = number + i;
          break;
        case "-":
          result = number - i;
          break;
        case "x":
          result = number * i;
          break;
        case "÷":
          result = number / i;
          break;
        default:
          result = number * i;
      }
      if (!Number.isInteger(result)) {
        result = result.toFixed(2);
      }

      const template = `
        <div class="row">
          <div class="operation">${number} ${operator} ${i} = </div>
          <div class="result">${result}</div>
        </div>
      `;

      const parser = new DOMParser();
      const htmlTemplate = parser.parseFromString(template, "text/html");
      const row = htmlTemplate.querySelector(".row");

      multiplicationTable.appendChild(row);
    }
  });
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;
  console.log("operatorInputs", operatorInputs);
  const operators = Array.from(operatorInputs)
    .filter((input) => input.checked)
    .map((input) => input.value);

  if (multiplicationNumber === 0 || multiplicatorNumber === 0) {
    alert("Os valores não pode ser 0 ");
  }
  if (!multiplicationNumber || !multiplicatorNumber || operators.length === 0)
    return;

  createTable(multiplicationNumber, multiplicatorNumber, operators);
});
