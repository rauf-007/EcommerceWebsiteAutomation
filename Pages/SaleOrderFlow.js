import {test, expect, chromium} from '@playwright/test';
import { CreateEvents } from './CreateEvent';

export class LoginH{
    constructor(page){  
        this.page = page
        this.sales = "//div[contains(text(),'Sales')]"
        this.newQuotaion = "//button[contains(text(),'Create')]"      
        this.waffleScreen = "a[title='Applications']"
        this.selectSourceElement = "//select//option[contains(text(),'HIO Form - New Customer')]"
        this.addProduct = "//a[contains(text(),'Add a product')]"
        this.firstProduct = "div[name='product_id'] input[type='text']"
        this.quantity = "input[name='product_uom_qty']"
        this.tax = "div[name='tax_id'] input[type='text']"
        this.sideMenu = "table[class='o_list_table table table-sm table-hover table-striped o_list_table_ungrouped o_section_and_note_list_view'] i[class='o_optional_columns_dropdown_toggle fa fa-ellipsis-v']"
        this.afterMenuEvent = "td[class='o_data_cell o_field_cell o_list_many2one']"
        this.testEvent1 = "td[class='o_data_cell o_field_cell o_list_many2one'] input[type='text']"
        this.testEvent2 = "tbody tr:nth-child(2) td:nth-child(3)"
        this.testEvent3 = "tbody tr:nth-child(3) td:nth-child(3)"
        this.saveBtn = "//button[contains(text(),'Save')]"
        this.saleOrderMsg = "div[class='o_Message_prettyBody'] p"
        this.reminderEmailMsg = "//body/div[@class='o_action_manager']/div[@class='o_action o_view_controller']/div[@class='o_content']/div[@class='o_form_view o_xxl_form_view o_sale_order o_form_readonly']/div[@class='o_FormRenderer_chatterContainer o-aside']/div[@class='o_ChatterContainer']/div[@class='o_Chatter']/div[@class='o_Chatter_scrollPanel']/div[@class='o_ThreadView o_Chatter_thread']/div[@class='o_MessageList o_ThreadView_messageList']/div[@aria-label='Message']/div[@class='o_Message_core']/div[@class='o_Message_content']/div[@class='o_Message_prettyBody']/div[1]"
        this.imageDisplayed = "div[aria-label='View image']"
        this.sendReminderEmail = "button[name='action_send_email'] span"
        this.sendBtn = "button[class='btn btn-primary o_mail_send'] span"
        this.sendByEmail = "button[class='btn btn-primary']"      
        this.editBtn = ".btn.btn-primary.o_form_button_edit"
    }
      
    async clickWaffleScreen(){
        await this.page.click(this.waffleScreen)                                   
    }
   
    async clickOnSales(){
        await this.page.click(this.sales)
    }

    async verifyQuotationTitle(){
        await this.page.waitForSelector(this.newQuotaion);
        await this.page.waitForTimeout(1000)
        await expect.soft(this.page).toHaveTitle('Quotations - Odoo')
    }  

    async clickOnNewQuotation(){
        await this.page.click(this.newQuotaion)
    }
 
    async verifyNewQuotationTitle(){
        await this.page.waitForTimeout(1000)
        await expect.soft(this.page).toHaveTitle('New - Odoo')
    }  

    async enterCustomer(){
        await this.page.getByLabel('Customer', { exact: true }).fill("**TEST CUSTOMER 1**")
        // await this.page.type(this.createCustomer,"**TEST CUSTOMER 1**")
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
        await this.page.waitForTimeout(3000)
    }    

    async enterExpiration(){
        await this.page.getByLabel('Expiration').fill("03/26/2024")
    }

    async enterEvent(){
        await this.page.getByRole('textbox', { name: 'Event' }).click()
        await this.page.keyboard.press('Control+V')
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }
 
    async enterGolfCourse(){
        await this.page.getByRole('textbox', { name: 'Golf Course' }).fill("Test Golf Course")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }
 
    async enterSource(){
        await this.page.getByRole('row', { name: 'Source' }).getByLabel('Source').selectOption('HIO Form - New Customer')
        
        // await this.page.click(this.selectSourceElement)
    }

    async clickOnAddProduct(){
        await this.page.click(this.addProduct) 
    }

    async enterProduct1(){
        await this.page.type(this.firstProduct, "**TEST PRODUCT**")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }

    async enterQuantity(){
        await this.page.fill(this.quantity, '');
        await this.page.type(this.quantity, "2")
        await this.page.waitForTimeout(1000)
    }

    async enterTax1(){
        await this.page.type(this.tax, "default")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
        await this.page.waitForTimeout(2000)
       
    }
  
    async enterProduct2(){
        await this.page.type(this.firstProduct, "**TEST PRODUCT 2**")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }

    async enterTax2(){
        await this.page.type(this.tax, "Florida")
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
        await this.page.waitForTimeout(3000)
    }
  
    async enterProduct3(){
        await this.page.type(this.firstProduct, "**TEST PRODUCT 3**")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter') 
    }

    async enterTax3(){
        await this.page.type(this.tax, "florida")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
        await this.page.waitForTimeout(2000)
    }

    async clickOnSideMenu(){
        await this.page.click(this.sideMenu)
    }
    
    async clickOnEventSide(){
        await this.page.locator('div').filter({ hasText: /^Event$/ }).first().click()
    }

    async clickOnAfterMenuEvent(){
        await this.page.click(this.afterMenuEvent)
    }

    async enterTestEventName1(){
        await this.page.click(this.testEvent1)
        await this.page.keyboard.press('Control+V')
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }

    async enterTestEventName2(){
        await this.page.click(this.testEvent2)
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('row', { name: 'External Link 1.00 1.20 $ 1.' }).locator('input[type="text"]').nth(1).click()
        await this.page.keyboard.press('Control+V')
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }

    async enterTestEventName3(){ 
        await this.page.click(this.testEvent3)
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('row', { name: 'External Link 1.00  1.20 $ 1' }).locator('input[type="text"]').nth(1).click()
        await this.page.keyboard.press('Control+V')  
        await this.page.waitForTimeout(1000) 
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }
  
    async clickSaveBtn(){
        await this.page.click(this.saveBtn)
    }
  
    async verifySaleOrderMsg(){
        await this.page.waitForSelector(this.saleOrderMsg)
        await expect.soft(await this.page.locator(this.saleOrderMsg)).toContainText('Sales Order create')         
    }
  
    async clickSendReminderEmail(){
        await this.page.click(this.sendReminderEmail)
        await this.page.waitForTimeout(1000)
    }
  
    async clickSendBtn(){
        await this.page.click(this.sendBtn)
    }
  
    async verifyReminderEmailMsg(){
        await this.page.waitForSelector(this.reminderEmailMsg)
        await expect.soft(await this.page.locator(this.reminderEmailMsg)).toContainText('Please click on the button above to fill in the hole details for your Perfect Golf Event order') //partial text
    }

    async clickSendByEmail(){
        await this.page.click(this.sendByEmail)
    }
  
    async verifyQuotationSendMsg(){
        await this.page.waitForSelector(this.imageDisplayed)
        const logoElement=await page.locator(this.imageDisplayed)
        await expect.soft(logoElement).toBeVisible()
    }  

}
 