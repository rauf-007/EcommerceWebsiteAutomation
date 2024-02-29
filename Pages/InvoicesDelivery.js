import {test, expect, chromium} from '@playwright/test';
export class InvoiceDelivery{
    constructor(page){
        this.page = page
        this.invoicesBtn = "div[name='invoice_count']"
        this.sendAndPrint = "button[class='btn btn-primary'] span"
        this.printCheckBox = "//label[contains(text(),'Print')]"
        this.invoiceSendBtn = "//button[@name='send_and_print_action']//span[contains(text(),'Send & Print')]"
        this.printBtn = "button[aria-expanded='true'] span[class='o_dropdown_title']"
        this.printInvoices = "div[class='o_cp_bottom'] li:nth-child(1) a:nth-child(1)"
        this.printInvoicesWithoutPayment = "div[class='o_cp_bottom'] li:nth-child(2) a:nth-child(1)"
        this.previewBtn = "button[name='preview_invoice'] span"
        this.downloadBtn = "//a[normalize-space()='Download']"
        this.updateAddress = "#modal_update_address"
        this.street1 = "#street"
        this.street2 = "#street2"
        this.zip = "#zip"
        this.city = "#city"
        this.submitUpdateAddress = "//button[contains(text(),'Update Address')]"
        this.editMode = "//a[normalize-space()='Back to edit mode']"
        this.waffleScreen = "a[title='Applications']"
        this.sales = "//div[contains(text(),'Sales')]"
        this.firstSaleOrder = "//tbody/tr[1]/td[4]"
        this.delivery = "//span[normalize-space()='Delivery']"
        this.deliveryPrint = "button[name='do_print_picking'] span"
        this.applyDoneQty = "button[name='process']"
        this.checkAvailibility = "//span[contains(text(),'Check Availability')]"
        this.noBackOrder = "//span[contains(text(),'No Backorder')]"
        
}

    async verifyRedirectstoInvoices(){
        await this.page.click(this.invoicesBtn)
    }

    async verifyInvoicesSend(){
        await this.page.click(this.sendAndPrint)
        await this.page.click(this.printCheckBox)
        await this.page.click(this.invoiceSendBtn)
    }
    
    async verifyInvoicesPrint(){
        await this.page.getByRole('button', { name: ' Print' }).click()
        await this.page.click(this.printInvoices)
        await this.page.click(this.printInvoicesWithoutPayment)
        await this.page.waitForTimeout(2000)
    }

    async verifyUpdateAddress(){
        await this.page.click(this.previewBtn)
        await this.page.waitForTimeout(2000)
        await this.page.type(this.street1, "Test Street 1")
        await this.page.type(this.street2, "Test Street 2")
        await this.page.type(this.zip, "04403")
        await this.page.type(this.city, "Islamabad")
        await this.page.click(this.submitUpdateAddress)
        await this.page.waitForTimeout(2000)
    }

    async verifyInvoiceDownload(){
        await this.page.getByRole('link', { name: ' Download' }).click()  
    }
    
    async verifyDelivery(){
        await this.page.waitForTimeout(2000)
        await this.page.click(this.waffleScreen)
        await this.page.click(this.sales)
        await this.page.click(this.firstSaleOrder)

        await this.page.click(this.delivery)
        await this.page.getByRole('button', { name: 'Print', exact: true }).click()
        // await this.page.click(this.checkAvailibility)
        await this.page.getByRole('button', { name: 'Validate' }).click()
        await this.page.click(this.applyDoneQty)
        // await this.page.click(this.noBackOrder)

        // await this.page.getByRole('button', { name: ' Print' }).click();
        // const download1Promise = this.page.waitForEvent('download');
        // await this.page.getByRole('menuitemcheckbox', { name: 'Picking Operations' }).click();
        // const download1 = await download1Promise;
        // const download2Promise = this.page.waitForEvent('download');
        // await this.page.getByRole('menuitemcheckbox', { name: 'Delivery Slip' }).click();
        // const download2 = await download2Promise;
        // const download3Promise = this.page.waitForEvent('download');
        // await this.page.getByRole('menuitemcheckbox', { name: 'Barcodes (ZPL)' }).click();
        // const download3 = await download3Promise;
        // const download4Promise = this.page.waitForEvent('download');
        // await this.page.getByRole('menuitemcheckbox', { name: 'Barcodes (PDF)' }).click();
        // const download4 = await download4Promise;      
    }
 
}    



