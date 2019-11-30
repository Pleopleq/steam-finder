
class Steam{
    constructor(){
        this.apiKey = '97331CD7A373E984C77C8564B4E49EFA';
    }
    async getUser(user){
        const profileResponse = await fetch (`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${this.apiKey}&steamids=${user}`);

        const profile = await profileResponse.json();
        
        return profile
    }
}