
function getUserDiv(user) {
    return `
    <div class="my-online-user">
        <div class="user-username">${user.username}</div>
        <div class="user-online"></div>
    </div>
    `
}

async function getUsers(){
    let response = await fetch("users.json")
    let users = await response.json()
    return users
}

getUsers().then(users => {
    let sampleUser = users[0]
    let userDiv = getUserDiv(sampleUser)
    document.body.innerHTML = `
    <div class="header">Header</div>
    <div class="my-online-users">
    ${users.map(user => getUserDiv(user)).join('')}
    </div>
    <div class="main-content">Main Content</div>
    <div class="footer">Footer</div>
    `
})