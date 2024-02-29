const {test, expect}=require('@playwright/test')

export class CreateEvents{
    constructor(page){
        this.page = page
        this.events = "//div[contains(text(),'Events')]"
        this.createEventBtn = "//button[contains(text(),'Create')]"
        this.eventName = "//div[@class='oe_title']//h1//input"
        this.startDate = "//div[@class='o_row']//input[@name='date_begin']"
        this.endDate = "//div[@class='o_row']//input[@name='date_end']"
        this.template = "//div[@name='event_type_id']"
        this.tags = "//div[@name='tag_ids' ]//input"
        this.eventNmbr = "//input[@name = 'golfcourse_event_number']"
        this.limitCheckBox = "//div[@name='seats_limited']"
        this.typeLimit = "//input[@name='seats_max']"
        this.clickPrice = "//td[@title='0.00']"
        this.typePrice = "input[name='price']"
        this.salesStart = "input[name='start_sale_date'][type='text']"
        this.salesEnd = "input[name='end_sale_date'][type='text']"
        this.maximum = "//input[@class='o_field_integer o_field_number o_field_widget o_input']"
        this.addAline = "//td[@colspan='9']//a[normalize-space()='Add a line']"
        this.addName = "td[title='Registration for TEST EVENT 100'] input[name='name']"
        this.saveBtn = ".btn.btn-primary.o_form_button_save"
        this.previewBatches = "button[name='action_open_badge_editor'] span"
        this.goToWebsite = "button[name='is_published']"
        this.publishedBtn = "label[accesskey='p'] span[class='css_publish']"
        this.unpublishedBtn = "label[accesskey='p'] span[class='css_unpublish']"
        this.bookedStage = "//button[normalize-space()='Booked']"
        this.bookedStageTrue = "//button[@title='Current state' and @aria-checked='true']"
        this.announcedStage = "//button[normalize-space()='Announced']"
    
        const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
        this.eventname = `TEST TEST EVENT ${randomNumber}`;

}
    
    async clickOnEvents(){
        await this.page.click(this.events)

    }

    getEventName() {
        return this.eventname; 
      }
    
    generateRandomNumber() {
        return Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
      }

    async verifyEventsTitle(){
        await this.page.waitForSelector(this.createEventBtn)
        await expect(this.page).toHaveTitle('Events - Odoo')
    }  

    async clickOnCreateEvents(){
        await this.page.click(this.createEventBtn)
    }

    async enterEventName(){
        await this.page.type(this.eventName, this.getEventName())
        await this.page.keyboard.press('Control+A')
        await this.page.keyboard.press('Control+C')
    }  
    
    async enterStartDate(){
        await this.page.type(this.startDate,"01/11/2023 09:10:00")
        
    }  

    async enterEndDate(){
        await this.page.type(this.endDate,"01/21/2024 09:10:00")
    }  

    async clickOnTemplate(){
        await this.page.click(this.template)
        await this.page.type(this.template, "Sell Online")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }

    async clickOnTags(){
        await this.page.click(this.tags)
        await this.page.type(this.tags, "PDQA")
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
    }

    async enterEventNmbr(){
        await this.page.type(this.eventNmbr,"E100")
    }  

    async ClicklimitCheckBox(){
        await this.page.click(this.limitCheckBox)
        // await this.page.locator(this.limitCheckBox).check();
    }
 
    async enterTypeLimit(){             
        await this.page.waitForSelector(this.typeLimit)
        await this.page.click(this.typeLimit)
        await this.page.type(this.typeLimit,"50")
    }

    async clickOnPrice(){
        await this.page.click(this.clickPrice)
        await this.page.type(this.typePrice,"50")
    }

    async clickOnSalesStart(){
        await this.page.click(this.salesStart)
        await this.page.type(this.salesStart,"08/01/2023")
    }

    async clickOnSalesEnd(){
        await this.page.click(this.salesEnd)
        await this.page.type(this.salesEnd,"08/03/2024")
    } 

    async clickOnMaximum(){
        await this.page.click(this.maximum) 
        await this.page.type(this.maximum,"25")
    } 

    async clickOnAddAline(){
        await this.page.click(this.addAline)
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Backspace')
        await this.page.keyboard.up('Backspace')
    }

    async clickOnAddName(){
        await this.page.type(this.maximum,"Special Registration")
    } 

    async clickOnMaximum1(){
        await this.page.click(this.maximum) 
        await this.page.type(this.maximum,"25")
    } 

    async clickOnSaveBtn(){
        await this.page.click(this.saveBtn)
    }

    async clickOnWebsiteBtn(){
        await this.page.click(this.goToWebsite)
        await this.page.waitForSelector(this.publishedBtn)
        await this.page.waitForTimeout(3000)
    }

    async clickOnPublishedBtn(){
        await this.page.click(this.publishedBtn)
        await this.page.waitForSelector(this.unpublishedBtn)
        await expect(await this.page.locator(this.unpublishedBtn)).toHaveText('Published')  
    }

    async goBack(){
        await this.page.goBack()
    }

    async clickOnBookedStage(){
        await this.page.click(this.bookedStage)
        const bookedStageisTrue=await this.page.locator(this.bookedStageTrue)
        await expect(bookedStageisTrue).toBeVisible()
    }

    async clickOnAnnouncedStage(){
        await this.page.click(this.announcedStage)
        const announcedStageisTrue=await this.page.locator(this.bookedStageTrue)
        await expect(announcedStageisTrue).toBeVisible()
    }

}   

