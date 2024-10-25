document.addEventListener('DOMContentLoaded', function() {
  fetch('users.json')
  .then(response => response.json())
  .then(users => {
      const userList = document.getElementById('userList');
      for (let i = 0; i < users.length; i++) {
          const user = users[i];
          const listItem = document.createElement('li');
          listItem.textContent = `名前: ${user.name}, 年齢: ${user.age}`;
          userList.appendChild(listItem);
      }
  })
  .catch(error => console.error('エラー:', error));
});
