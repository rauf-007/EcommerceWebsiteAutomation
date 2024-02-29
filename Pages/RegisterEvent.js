import {test, expect, chromium} from '@playwright/test';
export class EventRegister{
    constructor(page){
        this.page = page
        this.url = "https://perfect-golf-do-not-drop-training-11315992.dev.odoo.com/events"
        this.attendee = "button[name='action_view_attendee_list']"
        this.eventClick = "//a[@name='event_id']"
        this.admin = ".oe_topbar_name"
        this.logOut = "a[data-menu='logout']"   
        this.eventCardBody = ".card-body"
        this.firstRegistrationMenu = "//div[@id='o_wevent_tickets_collapse']/*[1]//div[@class= 'w-auto ml-auto']//select"
        this.selectThree = "//div[@id='o_wevent_tickets_collapse']/*[1]//div[@class= 'w-auto ml-auto']//select/*[4]"
        this.secondRegistrationMenu = "//div[@id='o_wevent_tickets_collapse']/*[2]//div[@class= 'w-auto ml-auto']//select"
    }
    
    async verifyLogout(){
        await this.page.click(this.admin)               
        await this.page.click(this.logOut)
    }

    async registerDesiredEvent(){
        const browser=await chromium.launch()
        const context=await browser.newContext()  
        const page1=await context.newPage()
  
        await page1.goto(this.url)
        await page1.getByPlaceholder('Search an event...').click();
        await page1.keyboard.press('Control+V')
        await page1.getByLabel('Search').click();
        await page1.click(this.eventCardBody)
        await page1.getByRole('link', { name: 'Register' }).click();   
        await page1.waitForTimeout(2000);
        await page1.locator(this.firstRegistrationMenu).selectOption('3');
        await page1.locator(this.secondRegistrationMenu).selectOption('2');
        await page1.getByRole('button', { name: 'Register' }).click();
        await page1.locator('input[name="\\31 -name"]').click(); 
        await page1.locator('input[name="\\31 -name"]').fill('TEST 1');
        await page1.locator('input[name="\\32 -name"]').click();
        await page1.locator('input[name="\\32 -name"]').fill('TEST 2');
        await page1.locator('input[name="\\33 -name"]').click();
        await page1.locator('input[name="\\33 -name"]').fill('TEST 3');
        await page1.locator('input[name="\\34 -name"]').click();
        await page1.locator('input[name="\\34 -name"]').fill('TEST 4');
        await page1.locator('input[name="\\35 -name"]').click();
        await page1.locator('input[name="\\35 -name"]').fill('TEST 5');
        await page1.locator('input[name="\\31 -email"]').click();
        await page1.locator('input[name="\\31 -email"]').fill('test1@example.com');
        await page1.locator('input[name="\\32 -email"]').click();
        await page1.locator('input[name="\\32 -email"]').fill('test2@example.com');
        await page1.locator('input[name="\\33 -email"]').click();
        await page1.locator('input[name="\\33 -email"]').fill('test3@example.com');
        await page1.locator('input[name="\\34 -email"]').click();
        await page1.locator('input[name="\\34 -email"]').fill('test4@example.com');
        await page1.locator('input[name="\\35 -email"]').click();
        await page1.locator('input[name="\\35 -email"]').fill('test5@example.com');
        await page1.locator('input[name="\\31 -phone"]').click();
        await page1.locator('input[name="\\31 -phone"]').fill('435435435');
        await page1.locator('input[name="\\32 -phone"]').click();
        await page1.locator('input[name="\\32 -phone"]').fill('4354354355');
        await page1.locator('input[name="\\33 -phone"]').fill('43');
        await page1.locator('input[name="\\33 -phone"]').click();
        await page1.locator('input[name="\\33 -phone"]').fill('43543543543');
        await page1.locator('input[name="\\34 -phone"]').click();
        await page1.locator('input[name="\\34 -phone"]').fill('4354343435');
        await page1.getByRole('button', { name: 'Continue' }).click();
        await page1.getByRole('heading', { name: 'Registration confirmed!' }).click({ button: 'right' });
        await page1.getByRole('heading', { name: 'Registration confirmed!' }).click();
        await browser.close()
    }
    
}

