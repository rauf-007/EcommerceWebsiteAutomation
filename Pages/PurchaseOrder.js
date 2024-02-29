import {test, expect, chromium} from '@playwright/test';
export class Purchase{
    constructor(page){
        this.page = page
        this.attendee = "button[name='action_view_attendee_list']"
        this.eventClick = "//a[@name='event_id']"
        this.addProduct = "//a[contains(text(),'Add a product')]"
        this.firstProduct = "div[name='product_id'] input[type='text']"
        this.quantity = "input[name='product_qty']"
        this.tax = "div[name='tax_id'] input[type='text']"
        this.sendBtn = "button[class='btn btn-primary o_mail_send'] span"
        this.sendByEmail = "button[class='btn btn-primary']" 
        this.saveBtn = "//button[contains(text(),'Save')]"
        this.productUnitPrice = "input[name='price_unit']"
        this.print = "button[aria-expanded='true'] span[class='o_dropdown_title']"
        
    }

    async goToPreviousPage(){
        await this.page.goto('https://perfect-golf-do-not-drop-training-11017751.dev.odoo.com/web#cids=1&home=')
    }

    async clickOnPurchase(){
        await this.page.getByRole('option', { name: 'Purchase' }).click();
    }

    async verifyRFQTitle(){
        await expect.soft(this.page).toHaveTitle('Requests for Quotation - Odoo')
           
    }    
        
       
    async verifyNewRFQTitle(){
        await this.page.getByRole('button', { name: 'Create' }).click();
        await expect.soft(this.page).toHaveTitle('New - Odoo')
    }    

    async verifyRFQDetails(){
        await this.page.getByPlaceholder('N﻿a﻿m﻿e﻿,﻿ ﻿T﻿I﻿N﻿,﻿ ﻿E﻿m﻿a﻿i').click();
        await this.page.getByPlaceholder('N﻿a﻿m﻿e﻿,﻿ ﻿T﻿I﻿N﻿,﻿ ﻿E﻿m﻿a﻿i').fill('TEST Vendor');
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.down('Enter')
        await this.page.keyboard.up('Enter')


        await this.page.getByLabel('Vendor Reference').click();
        await this.page.getByLabel('Vendor Reference').fill('TEST 207');
        await this.page.getByLabel('Event').click();
        await this.page.getByLabel('Event').fill('TEST TEST EVENT');
        await this.page.getByLabel('Event').press('ArrowLeft');
        await this.page.getByLabel('Event').fill('TEST TEST EVENT ');
        await this.page.getByLabel('Event').press('Enter');
        await this.page.getByLabel('Stage').selectOption('"proof_approved"');
        await this.page.getByLabel('Receipt Date').click();
        await this.page.getByLabel('Receipt Date').fill('08/02/2023 23:59:41');      
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
    
    
    async enterProduct2(){
            await this.page.type(this.firstProduct, "**TEST PRODUCT 2**")
            await this.page.waitForTimeout(1000)
            await this.page.keyboard.down('Enter')
            await this.page.keyboard.up('Enter')
        }
    
    async enterProduct3(){
            await this.page.click(this.firstProduct)
            await this.page.type(this.firstProduct, "**TEST PRODUCT 3**")
            await this.page.waitForTimeout(1000)
            await this.page.keyboard.down('Enter')
            await this.page.keyboard.up('Enter')
            await this.page.waitForTimeout(1000)
            await this.page.type(this.productUnitPrice, "23")
        }

    async clickSaveBtn(){
        await this.page.click(this.saveBtn)
        }    
 
    async nextFunction(){
        await this.page.getByRole('button', { name: 'Send by Email' }).click();
        await this.page.getByRole('button', { name: 'Send', exact: true }).click();
    }

    async verifyPOConfirm(){
        await this.page.getByRole('button', { name: 'Confirm Order' }).click();
    }

    async verifyReceiveProducts(){
        await this.page.getByRole('button', { name: 'Receive Products' }).click();
        await this.page.getByRole('button', { name: 'Validate' }).click();
        await this.page.getByRole('button', { name: 'Apply' }).click();

        // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Picking Operations' }).click();
        
        // await this.page.waitForTimeout(2000)
        // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Delivery Slip' }).click();
        
        // await this.page.waitForTimeout(1000)
        // // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Barcodes (ZPL)' }).click();
        
        // await this.page.waitForTimeout(1000)
        // // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Barcodes (PDF)' }).click();
        
        await this.page.waitForTimeout(3000)
        await this.page.goBack();
    }

    async verifyBillCreated(){   
        await this.page.getByRole('button', { name: 'Create Bill' }).click();
        await this.page.getByRole('button', { name: 'Edit' }).click();
        await this.page.getByLabel('Invoice Date').click();
        await this.page.getByLabel('Invoice Date').click();
        await this.page.getByLabel('Invoice Date').fill('08/02/2023');
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByRole('button', { name: 'Confirm' }).click();
    }

    async verifyPaymentRegister(){
        await this.page.getByRole('button', { name: 'Register Payment' }).click();
        await this.page.getByRole('button', { name: 'Create Payment' }).click();

        // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Invoices', exact: true }).click();
   
        // await this.page.waitForTimeout(3000)
        // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Invoices without Payment' }).click();
        await this.page.waitForTimeout(4000)
        
        await this.page.goBack()
        // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Purchase Order', exact: true }).click();
        // await this.page.waitForTimeout(2000)
        // await this.page.getByRole('button', { name: ' Print' }).click();
        // await this.page.getByRole('menuitemcheckbox', { name: 'Request for Quotation' }).click();
        await this.page.waitForTimeout(2000)
    }

    async verifyPOSendByEmail(){
        await this.page.getByRole('button', { name: 'Send PO by Email' }).click();
        await this.page.getByRole('button', { name: 'Send', exact: true }).click();
    }
    
    async verifyReceipt(){
        await this.page.getByRole('button', { name: ' 1 Receipt' }).click();
        await this.page.getByRole('button', { name: ' Print' }).click();   
    }
}


