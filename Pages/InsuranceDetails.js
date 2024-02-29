import {test, expect, chromium} from '@playwright/test';
export class Insurance{
    constructor(page){
        this.page = page
        this.insuranceDetailsTab = "//a[contains(text(),'Insurance Detail')]"
        this.editBtn = ".btn.btn-primary.o_form_button_edit"
        this.fillInsuranceDetails = "a[title='Insurance']"
        this.testNoOfGolfers = "#number_of_golfers"
        
        this.submitFillInsuranceDetails = "body > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(2)"
        this.submitMsg = "h5[class='text-center']"
        this.holeText1 = "td[title='21-1']"
        this.holeText2 = "td[title='21-2']"
        this.textNoOfGolfers = "span[name='number_of_golfers']"
        this.editInsurance = "tbody tr:nth-child(1) td:nth-child(9) button:nth-child(1) span:nth-child(1)"
        this.isInsure = "div[name='is_insurance_product']"
        this.attempts = "//input[@name='attempts']"
        this.insuranceDescription = "//textarea[@name='insurance_description']"
        this.saveInsuranceDetails = "div[class='modal-content'] div div:nth-child(1) button:nth-child(1)"
        this.closeInsuranceDetails = "button[aria-label='Close']"

        this.textNoOfGolfers = "span[name='number_of_golfers']"
        this.saveBtn = "//button[contains(text(),'Save')]"
        
    }


    async clickInsuranceDetailsTab(){
        await this.page.click(this.insuranceDetailsTab)
        await this.page.waitForTimeout(1000) 
    
    }

    async clickEditBtn(){
        await this.page.click(this.editBtn)
        await this.page.waitForTimeout(2000) 
    }

    async clickGolfersRequired(){
        await this.page.getByText('Golfers Required').click()
    }

    async clickSaveBtn(){
        await this.page.click(this.saveBtn)
    }


    async verifyInsuranceDetails(){    
        await this.page.reload()
        await this.page.click(this.insuranceDetailsTab)
        await expect.soft(this.page.locator(this.textNoOfGolfers)).toHaveText('21')
        await this.page.waitForTimeout(1000)
        await expect.soft(this.page.locator(this.holeText1)).toHaveText('21-1')
        await expect.soft(this.page.locator(this.holeText2)).toHaveText('21-2')
    }

    async verifyInsuranceDetailsEntered(){  
        await this.page.click(this.editInsurance)
        await this.page.click(this.isInsure)
        await this.page.getByRole('textbox', { name: 'Attempts' }).fill("333")
        await this.page.getByRole('textbox', { name: 'Premium' }).fill("888")
        await this.page.getByRole('textbox', { name: 'Yardage-Men' }).fill("555")
        await this.page.getByRole('textbox', { name: 'Yardage-Women' }).fill("666")
        await this.page.getByRole('textbox', { name: 'Prize Value' }).fill("777")
        await this.page.type(this.insuranceDescription, "This is for Test Purpose")
        await this.page.getByRole('button', { name: 'Save' }).click()
        await this.page.click(this.closeInsuranceDetails)       
        await this.page.waitForTimeout(1000)
    }

    async verifyInsuranceDetailsSame(){ 
        await expect.soft(this.page.getByRole('cell', { name: '333' })).toHaveText('333')
        await expect.soft(this.page.getByRole('cell', { name: '888' })).toHaveText('888')
        await expect.soft(this.page.getByRole('cell', { name: '555' })).toHaveText('555')
        await expect.soft(this.page.getByRole('cell', { name: '666' })).toHaveText('666')
        await expect.soft(this.page.getByRole('cell', { name: '777' })).toHaveText('777')
    }

    
    async verifyInsuranceDataNotLost(){
        await this.page.reload()
        await this.page.click(this.insuranceDetailsTab)
        await expect.soft(this.page.locator(this.textNoOfGolfers)).toHaveText('21')
        await this.page.waitForTimeout(1000)
        await expect.soft(this.page.locator(this.holeText1)).toHaveText('21-1')
        await expect.soft(this.page.locator(this.holeText2)).toHaveText('21-2')
        await this.page.waitForTimeout(1000)
        await expect.soft(this.page.getByRole('cell', { name: '333' })).toHaveText('333')
        await expect.soft(this.page.getByRole('cell', { name: '888' })).toHaveText('888')
        await expect.soft(this.page.getByRole('cell', { name: '555' })).toHaveText('555')
        await expect.soft(this.page.getByRole('cell', { name: '666' })).toHaveText('666')
        await expect.soft(this.page.getByRole('cell', { name: '777' })).toHaveText('777')
    }

}

