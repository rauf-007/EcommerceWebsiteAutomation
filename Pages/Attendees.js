import {test, expect, chromium} from '@playwright/test';
const assert = require('assert');

export class Attendee{
    constructor(page){
        this.page = page
        this.attendee = "button[name='action_view_attendee_list']"
        this.eventClick = "//a[@name='event_id']"
        this.goToPreviousEvent = "//li[@class='breadcrumb-item o_back_button']//a"
        this.goAttendees = "div[name='attendee_count'] span[class='o_stat_text']"
        this.goAttendees1 = "div[name='seats_expected'] span[class='o_stat_text']"
        this.statusAttended = "td[title='Attended']"
        this.eventyGoAttendees = "div[name='seats_expected'] span[class='o_stat_text']"
        this.searchBox = "input[placeholder='Search...']"

        this.totalAttendees = "//div[@class = 'oe_kanban_global_click o_event_registration_kanban container-fluid p-0 o_kanban_record']"
        this.allRegistrations = "//span[@class = 'o_badge_text']"
        this.noOfRegistrations = "//span[text() = 'Registration']"
        this.noOfSpecialRegistrations = "//span[text() = 'Special Registration']"  
        this.registrationConfirmed = "//div[@class='o_list_view o_list_optional_columns']//tbody[@class='ui-sortable']/*[1]/*[7]"
        this.registrationUnconfirmed = "//div[@class='o_list_view o_list_optional_columns']//tbody[@class='ui-sortable']/*[1]/*[8]"
        this.SpecialRegistrationConfirmed = "//div[@class='o_list_view o_list_optional_columns']//tbody[@class='ui-sortable']/*[2]/*[7]"
        this.SpecialRegistrationUnconfirmed = "//div[@class='o_list_view o_list_optional_columns']//tbody[@class='ui-sortable']/*[2]/*[8]"

        this.firstRegistration = "(//a[@title='Confirm Registration'])[1]"
        this.secondRegistration = "(//a[@title='Confirm Registration'])[3]"
        this.firstSpecialRegistration = "(//a[@title='Confirm Registration'])[7]"
        this.secondSpecialRegistration = "(//a[@title='Confirm Registration'])[9]"

    }
    

    async goToBack(){
        await this.page.goBack()
        await this.page.waitForTimeout(2000)
    }

    async refreshPage(){
        this.page.reload();
        this.page.waitForTimeout(2000);
    }

    async goToPreviousPage(){
        await this.page.click(this.goToPreviousEvent)
    }

    async goToAttendees(){
        await this.page.click(this.goAttendees)
    }

    async goToAttendees1(){
        await this.page.waitForTimeout(1000)
        // await this.page.waitForSelector(this.goAttendees1)
        // await this.page.click(this.goAttendees1)
        await this.page.goForward()
    }

    async markAsAttending(){
        await this.page.getByRole('button', { name: ' Mark as Attending' }).first().click()
    }

    async verifyStatusAttended(){
        await expect.soft(await this.page.locator(this.statusAttended)).toContainText('Attended') //partial text

    }
    
    async clickOnEvent(){
        await this.page.click(this.eventClick)
    }

    async clickOnAttendees(){
        await this.page.click(this.eventyGoAttendees)
    }

    async clickSearchBox(){
        await this.page.click(this.searchBox)
        await this.page.waitForTimeout(1000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')
        await this.page.waitForTimeout(2000)
    }


    async verifyTotalAttendees(){
        await this.page.waitForSelector(this.totalAttendees)
        const options=await this.page.$$(this.totalAttendees)
        const totalAttendees= options.length
        console.log("Number of options:", totalAttendees)
    }

    async verifyAllRegistrations(){
        await this.page.waitForSelector(this.allRegistrations)
        const options=await this.page.$$(this.allRegistrations)
        const allRegistrations= options.length
        console.log("Number of options:", allRegistrations)
    }

    async verifynoOfRegistrations(){
        await this.page.waitForSelector(this.noOfRegistrations)
        const options=await this.page.$$(this.noOfRegistrations)
        const noOfRegistrations= options.length
        console.log("Number of options:", noOfRegistrations)
    }
 
    async verifynoOfSpecialRegistrations(){
        await this.page.waitForSelector(this.noOfSpecialRegistrations)
        const options=await this.page.$$(this.noOfSpecialRegistrations)
        const noOfSpecialRegistrations= options.length
        console.log("Number of options:", noOfSpecialRegistrations)
    }

    async verifyAssertions(){
        await this.page.waitForSelector(this.noOfRegistrations)
        const element1=await this.page.$$(this.noOfRegistrations)
        const a= element1.length
        console.log("Length is", a)
        
        await this.page.waitForSelector(this.noOfSpecialRegistrations)
        const element2 =await this.page.$$(this.noOfSpecialRegistrations)
        const b= element2.length
        console.log("Length is", b)

        await this.page.click(this.goToPreviousEvent)
        await this.page .waitForTimeout(3000)

        await this.page.waitForSelector(this.registrationUnconfirmed)
        const element3 =  this.page.locator(this.registrationUnconfirmed)
        const content = await element3.textContent()
        const c = parseInt(content, 10)
        console.log("Text is", c)

        await this.page.waitForSelector(this.SpecialRegistrationUnconfirmed)
        const element4 =  this.page.locator(this.SpecialRegistrationUnconfirmed)
        const content1 = await element4.textContent()
        const d = parseInt(content1, 10)
        console.log("Text is", d)
        
        assert.strictEqual(a, c)
        assert.strictEqual(b, d)
    }

    async verifyAssertions1(){
        // await this.page.click(this.goToPreviousEvent)
        await this.page.click(this.goAttendees1)
        await this.page.click(this.firstRegistration)
        await this.page.click(this.secondRegistration)
        await this.page.click(this.firstSpecialRegistration)
        await this.page.click(this.secondSpecialRegistration)
        await this.page.click(this.goToPreviousEvent)
        await this.page.waitForTimeout(3000)
        await this.page.reload()
        await this.page.waitForTimeout(3000)
    }

    async verifyAssertions2(){
        await this.page.waitForSelector(this.registrationConfirmed)
        await expect.soft(await this.page.locator(this.registrationConfirmed)).toHaveText('2')
        
        await this.page.waitForSelector(this.SpecialRegistrationConfirmed)     
        await expect.soft(await this.page.locator(this.SpecialRegistrationConfirmed)).toHaveText('2')
    }

}    

        