//INIT STEAM CLASS
const steam = new Steam;
//init UI class
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) =>{
    //get input text
    const userInput = e.target.value;
    if(userInput !== ''){
        steam.getUser(userInput)
        .then(data =>{
            console.log(data);
            if(data.response.players.length === 0){
                ui.showAlert('User not found/Enter a valid ID', 'alert alert-danger')
            } else {
                ui.showProfile(data.response.players["0"])
            }
            
        })
    }

})