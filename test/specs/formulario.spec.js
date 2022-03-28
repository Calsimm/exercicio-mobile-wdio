const homeScreen = require("../screens/home.screen")

describe('Acess o Forms Panel', () => {
    it('should forms successfully ', async () => {
        await homeScreen.goToForm()   
        await homeScreen.goToInput()     
        
    });
});