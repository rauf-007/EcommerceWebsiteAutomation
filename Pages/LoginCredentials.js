import {test, expect, chromium} from '@playwright/test';
export class LoginData{
    constructor(page){
        this.page = page
        this.baseUrl = 'https://perfect-golf-do-not-drop-training-11315992.dev.odoo.com/web#cids=1&home='
        this.continueError = "//button[contains(text(),'Continue')]"
        this.emailInput = "#login"
        this.passwordInput = "#password"
        this.loginBtn = "//button[contains(text(),'Log in')]"
          
    }
   
    async login(){
        await this.page.goto(this.baseUrl)
        await this.page.click(this.continueError)
        await this.page.type(this.emailInput,'perfectgolf@silverdaletech.com')
        await this.page.type(this.passwordInput,'35693569')
        await this.page.click(this.loginBtn)      
    }
}


