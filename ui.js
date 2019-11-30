class UI{
    constructor(){
        this.profile = document.getElementById('profile');
}

//display profile in ui
showProfile(user){

//Formating the UNIX TIME to normal time
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date(user.lastlogoff *1000);
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();


let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)} `

    //Formating the Online/Offline status
    if(user.personastate === 0){
        user.personastate = 'Offline';
    }
    if(user.personastate === 1){
        user.personastate = 'Online';
    }

    //Checking if the profile is private or public

    if(user.communityvisibilitystate === 3 || user.communityvisibilitystate === 2){
        user.communityvisibilitystate = 'Public Profile';
    } 
    if (user.communityvisibilitystate === 1){
        user.communityvisibilitystate = 'Private Profile'
    }
    if (user.gameextrainfo === undefined){
        user.gameextrainfo = 'This user is not playing right now.'
    }

this.profile.innerHTML = `
    <div class="card card-body mb-3>
        <div class="row">
            <div class="col-md-3">
            <h3>${user.personaname}</h3>
            <img class="img-fluid mb-2" src="${user.avatarfull}">
            <a href="${user.profileurl}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile </a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Last Log Off: ${formattedTime}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group item">Current status: <strong> ${user.personastate} </strong></li>
                <li class="list-group item">Profile Privacy:<strong> ${user.communityvisibilitystate} </strong></li>
                <li class="list-group item">Location:<strong> ${user.loccountrycode} </strong></li>
                <li class="list-group item">Currently in-game :<strong> ${user.gameextrainfo} </strong></li>
            </ul>
            </div>
        </div>
    </div>
    `;
    }

    showAlert(msg, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search)

        setTimeout(() =>{
            this.clearAlert()
        },3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
 }