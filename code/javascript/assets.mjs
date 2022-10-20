const LOGO = ` _______                         _____                  __             
|   |   |.-----.-----.-----.    |     |_.---.-.-----.--|  |.-----.----.
|       ||  _  |  _  |     |    |       |  _  |     |  _  ||  -__|   _|
|__|_|__||_____|_____|__|__|    |_______|___._|__|__|_____||_____|__|




`;

const GAMEOVER = `
_______                        _______                   
|     __|.---.-.--------.-----.|       |.--.--.-----.----.
|    |  ||  _  |        |  -__||   -   ||  |  |  -__|   _|
|_______||___._|__|__|__|_____||_______| \___/|_____|__|                                                  




`;

const HUD = `
Fuel:{fuel}                    Score:{score}
--------------------------------------------
`

const LEVELS = [
    {
        name: "Mare Serenitatis",
        fuel: 10,
        score: 5,
        map:
            `                                     
M                                    
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     
▲▲▲▲▲▲▲▲▲▲▲▲▲▲         ▲▲▲▲▲▲▲▲▲▲▲▲▲▲
██████████████_________██████████████`},
    {
        name: "Vallis Capella",
        fuel: 5,
        map: `
                            
                            
                            
                            
▲              ▲▲
█▲▲▲         ◀︎████►     M
████►       ◀︎██████►
███►      ◀︎██████████►
████____███████████████████
`}
];

export { LOGO, GAMEOVER, LEVELS }
