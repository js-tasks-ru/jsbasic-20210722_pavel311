function showSalary(users, age) {
  let answer = '';
  for (let i = 0; i < users.length; i++){  
  if (users[i].age <= age){
    answer += `${answer.length ? '\n' : ''}${users[i].name}, ${users[i].balance}`;
  }
}
return answer;
}
