class HomeScreen {
    get btForms(){
        return $('id:Forms')
    }

    async goToForm (){
        this.btForms.click()
    }

    get btInput(){
        return $('id:text-input')
    }

    get dropdown(){
        return $('class:android.widget.EditText')
    }

    get btActive(){
        return $('id:button-Active')
    }

    get btOk(){
        return $('id:android:id/button1')
    }

    async goToInput (){
        this.btInput.click().type('Ola, teste da Maria')
        this.dropdown.contains('This app is awesome')
        this.btActive.click()
        this.btOk.click()
    }
}

module.exports = new HomeScreen()