document.getElementById('add-expense-btn').addEventListener('click', () => {
  const personName = document.getElementById('person-name');
  const subject = document.getElementById('subject');
  const date = document.getElementById('date');
  const amount = document.getElementById('amount');
  const tbody = document.getElementById('tbody');
  const tr = `
  <tr onclick="removeFromTable(event)">
    <td>${personName.value}</td>
    <td>${subject.value}</td>
    <td>${date.value}</td>
    <td>${amount.value}</td>
    <td class="text-center mouse">❌</td>
  </tr>
  `
  if(personName.value !== "" && subject.value !== "" && date.value !== "" && amount.value !== ""){
    tbody.innerHTML += tr;
  }
  personName.value = "";
  subject.value = "";
  date.value = "";
  amount.value = "";
  
  
})

const removeFromTable = (event) => {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}