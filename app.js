

const getInfo = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then( data => data)
};

const usersList = document.getElementById('user-list');

getInfo()
  .then( users => {
    console.log(users)
    users.forEach(( user ) => {
      const newli = document.createElement('li');
      newli.textContent = user.name;
      usersList.appendChild( newli )
    })
  })
  .catch( error => {
    console.error( 'Error:', error );
  });
