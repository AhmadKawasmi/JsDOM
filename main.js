const header = document.getElementById('header')
const title = document.getElementById('title')
const user = {
    firstName: "Ahmad",
    lastName: "Kawasmi",
    dob: "13/10/2003"
}

header.innerHTML = `
    <h1>Welcome Mr.${user.firstName} ${user.lastName}</h1>

    <h2>your birth date in our DataBase is ${user.dob}</h2>
`

const renderUser = function(firstName, lastName) {
    header.innerHTML = `
        <h1>Welcome Mr.${firstName} ${lastName}</h1>
    `
}