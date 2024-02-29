import {test, expect, chromium} from '@playwright/test';
import { LoginH } from '../Pages/SaleOrderFlow';
import { CreateEvents } from '../Pages/CreateEvent';
import { Portal } from '../Pages/PortalUser';
import { Insurance } from '../Pages/InsuranceDetails';
import { InvoiceDelivery } from '../Pages/InvoicesDelivery';
import { Attendee } from '../Pages/Attendees';
import { Purchase } from '../Pages/PurchaseOrder';
import { CRM } from '../Pages/CRM';
import { EventRegister } from '../Pages/RegisterEvent';
import { LoginData } from '../Pages/LoginCredentials';


let page;

test.beforeAll(async ({browser})=>{
  page=await browser.newPage();
  //Login
  const ld = new LoginData(page)
  await ld.login()
});


test('Verify Purchase Order', async () => {
    const pur = new Purchase(page)
    await pur.clickOnPurchase()
    await pur.verifyRFQTitle()
    await pur.verifyNewRFQTitle()
    
  });
  
  test('Verify Purchase Order Order', async () => {
    const pur = new Purchase(page)
    await pur.verifyRFQDetails()
    await pur.clickOnAddProduct()
    await pur.enterProduct1()
    await pur.enterQuantity()
    await pur.clickOnAddProduct()
    await pur.enterProduct2()
    await pur.clickOnAddProduct()
    await pur.enterProduct3()
  
  });
  
  
  test('Verify Details saved in Purchase Order', async () => {
    const pur = new Purchase(page)
    await pur.clickSaveBtn()
    await pur.nextFunction()
  });
  
  test('Verify Purchase Order is Confirmed', async () => {
    const pur = new Purchase(page)
    await pur.verifyPOConfirm()
  });
  
  test('Verify Receive Products in Purchase Order', async () => {
    const pur = new Purchase(page)
    await pur.verifyReceiveProducts()
  });
  
  test('Verify bill is created', async () => {
    const pur = new Purchase(page)
    await pur.verifyBillCreated()
  });
  
  test('Verify Payment is registered', async () => {
    const pur = new Purchase(page)
    await pur.verifyPaymentRegister()
  });
  
  test('Verify PO is send by email', async () => {
    const pur = new Purchase(page)
    await pur.verifyPOSendByEmail()
  });
  
  test('Verify Receipt is created', async () => {
    const pur = new Purchase(page)
    await pur.verifyReceipt()
  });
  