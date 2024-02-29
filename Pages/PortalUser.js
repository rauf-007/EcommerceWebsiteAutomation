import {test, expect, chromium} from '@playwright/test';
export class Portal{
    constructor(page){       
        this.page = page
    
        this.url = "https://perfect-golf-do-not-drop-training-11315992.dev.odoo.com"
        this.emailInput = "#login"
        this.passwordInput = "#password"
        this.loginBtn = "//button[contains(text(),'Log in')]"
        this.portalTestCustomer = "a[role='button'] span"
        this.myAccount = "//a[contains(text(),'My Account')]"
        this.payOnline = "#o_sale_portal_paynow"
        this.payConfirm = "#o_payment_form_pay"   
        this.guestPayment = "button[class='Button LinkCancelPartialLoginButton--text Button--link Button--md Button--fullWidth'] div[class='flex-container justify-content-center align-items-center']"
        this.cardNo = "#cardNumber"
        this.cardExpiry = "#cardExpiry"
        this.Cvc = "#cardCvc"
        this.cardHolderName = "#billingName"              
        this.payBtn = ".SubmitButton-IconContainer"           
        this.closeBtnPay = "#closeBtn"
        this.paymentConfirmMsg = "div[class='alert alert-success alert-dismissable'] span p"
        this.testCustomerQuotation = "a[title='Quotations']"
        this.testCustomerFirstQuotation = "//tbody/tr[1]/td[1]//a"
        this.fillInsuranceDetails = "a[title='Insurance']"
        this.testNoOfGolfers = "#number_of_golfers"
        this.submitFillInsuranceDetails = "body > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(2)"
        this.submitMsg = "h5[class='text-center']"
        this.firstHole = "body > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > section:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)"
        this.secondHole = "body > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > section:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(1)"     
    }
    


    async verifyTestCustomerLogin(){
        const browser=await chromium.launch()
        const context=await browser.newContext()
  
        const page1=await context.newPage()
        await page1.goto(this.url)
        await page1.type(this.emailInput,"customer1@silverdaletech.com")
        await page1.type(this.passwordInput, "12345")
        await page1.click(this.loginBtn)    
        await page1.click(this.testCustomerQuotation)
        await page1.click(this.testCustomerFirstQuotation)
        await page1.click(this.fillInsuranceDetails)
        await page1.type(this.testNoOfGolfers, "21")
        await page1.type(this.firstHole, "21-1")
        await page1.type(this.secondHole, "21-2")
        await page1.click(this.submitFillInsuranceDetails)
        await expect.soft(page1.locator(this.submitMsg)).toHaveText('You have successfully submitted your insurance form.')
        await browser.close()
    }


    async verifyPaymentIsSuccessfull(){   
        const browser=await chromium.launch()
        const context=await browser.newContext() 
        const page1=await context.newPage()
        
        await page1.goto(this.url)
        await page1.type(this.emailInput,"customer1@silverdaletech.com")
        await page1.type(this.passwordInput, "12345")
        await page1.click(this.loginBtn)    
        await page1.click(this.testCustomerQuotation)
        await page1.click(this.testCustomerFirstQuotation)
        await page1.waitForSelector(this.payOnline)
        await page1.waitForTimeout(1000)
        await page1.click(this.payOnline);
        await page1.getByRole('button', { name: ' Pay & Confirm' }).click();
        await page1.waitForTimeout(1000) 
        // await page1.getByRole('button', { name: 'Check out as guest' }).click()
        // await page1.type(this.cardNo, "4242 4242 4242 4242")
        // await page1.type(this.cardExpiry, "01 / 28")
        // await page1.type(this.Cvc, "123")
        // await page1.type(this.cardHolderName, "TEST CUSTOMER")
        // await page1.click(this.payBtn)
        // await page1.waitForSelector(this.closeBtnPay)
        // await page1.click(this.closeBtnPay)
                                                                                              
        await page1.frameLocator('#AcceptUIContainer iframe').getByLabel('Card Number').click()
        await page1.frameLocator('#AcceptUIContainer iframe').getByPlaceholder('5678 9012 3456').fill('4242 4242 4242 4242')
        await page1.frameLocator('#AcceptUIContainer iframe').getByLabel('Exp. Date').click()
        await page1.frameLocator('#AcceptUIContainer iframe').getByPlaceholder('MM/YY').fill('01/28')
        await page1.frameLocator('#AcceptUIContainer iframe').getByLabel('Card Code').click()
        await page1.frameLocator('#AcceptUIContainer iframe').getByLabel('Card Code').fill("123")
        await this.page.waitForTimeout(2000)
        await page1.frameLocator('#AcceptUIContainer iframe').getByRole('button', { name: 'Pay' }).click()
        await page1.waitForSelector(this.paymentConfirmMsg)
        
        await expect(page1.locator(this.paymentConfirmMsg)).toHaveText('Your payment has been successfully processed. Thank you!')
        await browser.close()
    }

}


