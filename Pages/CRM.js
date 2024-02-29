import {test, expect, chromium} from '@playwright/test';
export class CRM{
    constructor(page){
        this.page = page
        this.leadPage = "a[class='o_menu_entry_lvl_1'] span"
        this.create = ".btn.btn-primary.o_list_button_add"
        this.lead_name = "//input[@name = 'name']" 
        this.log = "//button[normalize-space()='Log']"
        this.leadCreatedMsg = "//p[contains(text(),'Lead/Opportunity created')]"
        this.enrichMsg = "//p[contains(text(),'Lead Enrichment based on email address')]"
        this.oportunityMsg = "//div[contains(text(),'Opportunity')]"
        this.qualifiedMsg = "//div[@class='o_Message_trackingValueNewValue o_Message_trackingValueItem'][normalize-space()='Qualified']"
        this.propositionMsg = "//div[normalize-space()='Proposition']"
        this.restoredMsg = "//p[normalize-space()='Opportunity restored']"
        this.sendMsg = "div[aria-label='Message'] p"
        this.logNoteMsg = "div[aria-label='Note'] p"
        this.scheduleActivityMsg = ".o_Activity_icon.fa.fa-tasks"
        this.oportunityLostMsg = "//p[contains(text(),'Opportunity lost')]"
        this.tooExpensiveMsg = "//div[@class='o_Chatter_scrollPanel']//div[2]//div[2]//div[2]//ul[1]//li[2]//div[1]//div[3]"
        this.oportunityWonMsg = "//p[contains(text(),'Opportunity won')]"
        this.cof = "//label[contains(text(),'Convert to opportunity')]"
          
    }

    async verifyCRMTitle(){
        await this.page.getByRole('option', { name: 'CRM' }).click()
        await expect.soft(this.page).toHaveTitle('Pipeline - Odoo')
    }
    
    async verifyLeadsTitle(){
        await this.page.click(this.leadPage)
        await expect.soft(this.page).toHaveTitle('Leads - Odoo')
        await this.page.click(this.create)
        await this.page.waitForTimeout(3000);
    }
 
    async verifyLeadsDetails(){
        await this.page.getByPlaceholder('e.g. Product Pricing').fill('TEST LEAD 147');
        await this.page.getByRole('textbox', { name: 'Company Name' }).click();
        await this.page.getByRole('textbox', { name: 'Company Name' }).fill('QA@Silverdale');
        await this.page.getByRole('textbox', { name: 'Address' }).click();
        await this.page.getByRole('textbox', { name: 'Address' }).fill('Suite L');
        await this.page.getByRole('textbox', { name: 'City' }).click();
        await this.page.getByRole('textbox', { name: 'City' }).fill('Silverdale');
        await this.page.getByRole('textbox', { name: 'ZIP' }).click();
        await this.page.getByRole('textbox', { name: 'ZIP' }).fill('232134');
        await this.page.getByRole('textbox', { name: 'S﻿t﻿a﻿t﻿e' }).click();
        await this.page.getByRole('textbox', { name: 'S﻿t﻿a﻿t﻿e' }).fill('Washington');
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')


        await this.page.getByRole('textbox', { name: 'C﻿o﻿u﻿n﻿t﻿r﻿y' }).click();
        await this.page.getByRole('textbox', { name: 'C﻿o﻿u﻿n﻿t﻿r﻿y' }).fill('US');
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')


        await this.page.getByRole('textbox', { name: 'Contact Name' }).click();
        await this.page.getByRole('textbox', { name: 'Contact Name' }).fill('Albert Einstien');
        await this.page.getByRole('textbox', { name: 'Email' }).click();
        await this.page.getByRole('textbox', { name: 'Email' }).fill('albert@gmail.com');
        await this.page.getByRole('textbox', { name: 'Phone' }).click();
        await this.page.getByRole('textbox', { name: 'Phone' }).fill('234234432');
        await this.page.getByRole('textbox', { name: 'T﻿i﻿t﻿l﻿e' }).click();
        await this.page.getByRole('textbox', { name: 'T﻿i﻿t﻿l﻿e' }).fill('Mister');
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
        await this.page.getByRole('textbox', { name: 'Job Position' }).click();
        await this.page.getByRole('textbox', { name: 'Job Position' }).fill('CODER');
        await this.page.getByRole('radio', { name: 'Very High' }).click();
        await this.page.getByRole('textbox', { name: 'Tags' }).click();
        await this.page.getByRole('textbox', { name: 'Tags' }).fill('Managed');   
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
        
        await this.page.getByPlaceholder('Add a description...').click();
        await this.page.getByPlaceholder('Add a description...').fill('This is for test purpose.');
    }

    async verifyLeadSaved(){
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForSelector(this.leadCreatedMsg)
        await expect.soft(await this.page.locator(this.leadCreatedMsg)).toContainText('Lead/Opportunity created')

    }

    async verifyEnrichFunctionality(){
        await this.page.getByRole('button', { name: 'Enrich' }).click();
        await this.page.waitForSelector(this.enrichMsg)
        await expect.soft(await this.page.locator(this.enrichMsg)).toContainText('Lead Enrichment based on email address')
    }

    async verifyLeadRestore(){
        await this.page.getByRole('button', { name: 'Restore' }).click();
        await this.page.waitForSelector(this.restoredMsg)
        await expect.soft(await this.page.locator(this.restoredMsg)).toContainText('Opportunity')
    }

    async verifyConvertToOportunity(){
        await this.page.getByRole('button', { name: 'Convert to Opportunity' }).click()
        await this.page.click(this.cof)
        await this.page.getByRole('button', { name: 'Create Opportunity' }).click()
        // await this.page.waitForSelector(this.oportunityMsg)
        // await expect.soft(await this.page.locator(this.oportunityMsg)).toContainText('Opportunity')
    }
    
    async verifyQualifiedStage(){
        await this.page.getByRole('radio', { name: 'Qualified' }).click()
        await this.page.waitForSelector(this.qualifiedMsg)
        await expect.soft(await this.page.locator(this.qualifiedMsg)).toContainText('Qualified')
    }

    async verifyPropositionStage(){
        await this.page.getByRole('radio', { name: 'Proposition' }).click();
        await this.page.waitForSelector(this.propositionMsg)
        await expect.soft(await this.page.locator(this.propositionMsg)).toContainText('Proposition')
    }

    async verifyLeadNewQuotation(){    
        await this.page.getByRole('button', { name: 'New Quotation' }).press('ArrowRight');
        // await this.page.getByText('LeadsTEST LEAD 2TEST LEAD 2 Edit Create Save Discard Action1 /').click();
        // await this.page.locator('body').press('ArrowRight');      
    }  
  
    async verifySendMsgOnChatter(){ 
        await this.page.getByRole('button', { name: 'Send message' }).click()
        await this.page.getByPlaceholder('Send a message to followers...').fill('TEST Send message on chatter')
        await this.page.getByRole('button', { name: 'Send', exact: true }).click()
        await this.page.waitForSelector(this.sendMsg)
        await expect.soft(await this.page.locator(this.sendMsg)).toContainText('TEST Send message on chatter')
    }
    
    async verifyLogNote(){
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('button', { name: 'Log note' }).click();
        await this.page.getByPlaceholder('Log an internal note...').fill('TEST Log Note on chatter');
        await this.page.waitForTimeout(1000)
        await this.page.click(this.log)
        await this.page.waitForSelector(this.logNoteMsg)
        await expect.soft(await this.page.locator(this.logNoteMsg)).toContainText('TEST Log Note on chatter')
    }
    
    async verifyScheduleActivity(){
        await this.page.getByRole('button', { name: ' Schedule activity' }).click();
        await this.page.getByPlaceholder('e.g. Discuss proposal').click();
        await this.page.getByPlaceholder('e.g. Discuss proposal').fill('TEST Summary');
        await this.page.locator('.note-editable').click();
        await this.page.locator('.note-editable').fill('Test Description');
        await this.page.getByRole('button', { name: 'Schedule', exact: true }).click();
        await this.page.getByRole('button', { name: ' Mark Done' }).click();
        await this.page.getByRole('button', { name: 'Done', exact: true }).click();
        // await expect.soft(await this.page.locator(this.scheduleActivityMsg)).toContainText('')
    }
      
    async verifyLeadLost(){       
        await this.page.getByRole('button', { name: 'Mark Lost' }).click();
        await this.page.getByLabel('Lost Reason').click();
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
   
        await this.page.getByRole('button', { name: 'Submit' }).click();
        await this.page.waitForSelector(this.oportunityLostMsg)
        await expect.soft(await this.page.locator(this.oportunityLostMsg)).toContainText('Opportunity lost')
        await this.page.waitForSelector(this.tooExpensiveMsg)
        await expect.soft(await this.page.locator(this.tooExpensiveMsg)).toContainText('Too expensive')
    }
    

    async verifyLeadWon(){
        await this.page.getByRole('button', { name: 'Mark Won' }).click();
        await this.page.waitForSelector(this.oportunityWonMsg);
        await expect.soft(await this.page.locator(this.oportunityWonMsg)).toContainText('Opportunity won')
    }
    
    async verifyEditFunctionality(){
        await this.page.getByRole('button', { name: 'Edit' }).click();
        await this.page.getByLabel('Probability', { exact: true }).click();
        await this.page.getByLabel('Probability', { exact: true }).dblclick();
        await this.page.getByLabel('Probability', { exact: true }).fill('50');
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByRole('radio', { name: 'Proposition' }).click();
    }
  
    async verifyNewQuotationLeads(){
        await this.page.getByRole('button', { name: 'New Quotation' }).click();
        await this.page.getByRole('button', { name: 'Add a product' }).click();
        await this.page.getByRole('row', { name: '0.00 $ 0.00 Delete row 1' }).locator('input[type="text"]').first().fill('TEST');
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    
        await this.page.getByRole('button', { name: 'Save' }).click()
        await this.page.waitForTimeout(3000)    
        // await this.page.getByRole('link', { name: 'TEST LEAD' }).nth(1).click();
        // await this.page.getByRole('button', { name: ' 1 Quotations' }).click();
    }
}

  





