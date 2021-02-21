document.getElementById('add-expense-btn').addEventListener('click', () => {
  const personName = document.getElementById('person-name');
  const subject = document.getElementById('subject');
  const date = document.getElementById('date');
  const amount = document.getElementById('amount');
  const tbody = document.getElementById('tbody');
  const tr = `
  <tr>
    <td>${personName.value}</td>
    <td>${subject.value}</td>
    <td>${date.value}</td>
    <td>${amount.value}</td>
    <td id="remove-row" class="text-center">❌</td>
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