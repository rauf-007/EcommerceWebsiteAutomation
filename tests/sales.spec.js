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

// test.afterAll(async()=>{
//   await page.locator('#logout2').click()
// });

test('Verify Events, When you click on events module, it successfully redirects to events', async () => {


  // const log = new LoginH(page)
  const event = new CreateEvents(page)

  // await log.gotoPerfectGolf()
  // await log.login('perfectgolf@silverdaletech.com', '35693569')

  await event.clickOnEvents()
  await event.verifyEventsTitle()
});

test('Verify events created, all details entered and saved successfully when creating new events.', async () => {

  const event = new CreateEvents(page)

  await event.clickOnCreateEvents()
  await event.enterEventName()
  await event.enterStartDate()
  await event.enterEndDate()
  await event.clickOnTemplate()
  await event.clickOnTags()
  await event.enterEventNmbr()
  await event.ClicklimitCheckBox()
  await event.enterTypeLimit()
  await event.clickOnPrice()
  await event.clickOnSalesStart()
  await event.clickOnSalesEnd()
  await event.clickOnMaximum()
  await event.clickOnAddAline()
  await event.clickOnAddName()
  await event.clickOnSalesStart()
  await event.clickOnSalesEnd()
  await event.clickOnMaximum1()
  await event.clickOnSaveBtn()
});


test('Verify Event is published when you click on the publish button', async () => {

  const event = new CreateEvents(page)

  await event.clickOnWebsiteBtn()
  await event.clickOnPublishedBtn()
  await event.goBack()
  await event.clickOnBookedStage()

});

test('Verify it redirects to the sale module', async () => {
  const log = new LoginH(page)
  await log.clickWaffleScreen()
  await log.clickOnSales()
  await log.verifyQuotationTitle()
});

test('Verify it redirects to the New Quotation', async () => {
  const log = new LoginH(page)
  await log.clickOnNewQuotation()
  await log.verifyNewQuotationTitle()
});

test('Verify all details in the New Quotation Entered Successfully', async () => {
  const log = new LoginH(page)
  await log.enterCustomer()
  await log.enterEvent()
  await log.enterExpiration()
  await log.enterGolfCourse()
  await log.enterSource()
  await log.clickOnAddProduct()
  await log.enterProduct1()
  await log.enterQuantity()
  await log.enterTax1()
  await log.clickOnAddProduct()
  await log.enterProduct2()
  await log.enterTax2()
  await log.clickOnAddProduct()
  await log.enterProduct3()
  await log.enterTax3()
  await log.clickOnSideMenu()
  await log.clickOnEventSide()
  await log.clickOnAfterMenuEvent()
  await log.enterTestEventName1()
  await log.enterTestEventName2()
  await log.enterTestEventName3()
  await log.clickSaveBtn()
});

test('Verify Quotation got saved after clicking saved button and verify sales order messsage is displayed on chatter', async () => {
  const log = new LoginH(page)
  await log.verifySaleOrderMsg()
});


test('Verify send reminder email send successfully and message is displayed in chatter after clicking send reminder email button', async () => {
  const log = new LoginH(page)
  await log.clickSendReminderEmail()
  await log.clickSendBtn()
  await log.verifyReminderEmailMsg()
  
});

test('Verify quotation email is send after clicking send by email button and also messsage is displayed on chatter', async () => {
  const log = new LoginH(page)

  await log.clickSendByEmail()
  await log.clickSendBtn()
});


test('Verify Insurance detail tab', async () => {
  const Inc = new Insurance(page)
  await Inc.clickInsuranceDetailsTab()
  await Inc.clickEditBtn()
  await Inc.clickGolfersRequired()
  await Inc.clickSaveBtn()
});


test('Verify Portal User Login in successfully and verify Insurance details are filled Successfully', async () => {

  const port = new Portal(page)
  await port.verifyTestCustomerLogin()
});


test('Verify that in backend the insurance details come exactly same as portal user entered details', async () => {
  const Inc = new Insurance(page)
  await Inc.verifyInsuranceDetails()
});

test('Verify that in Insurance Line all the details entered and saved successfully including Attempts, Premium, Hole ,Men, Women, Prize Value Etc', async () => {
  const Inc = new Insurance(page)
  await Inc.verifyInsuranceDetailsEntered()
});

test('Verify that in sale order form in surance details are exactly same which you entered in Insurance Line form', async () => {
  const Inc = new Insurance(page)
  await Inc.verifyInsuranceDetailsSame()
});

test('Verify that Payment is Successfull', async () => {
  test.setTimeout(150000);
  const port = new Portal(page)
  await port.verifyPaymentIsSuccessfull()
});


test('Verify that Insurance details do not lost when you make payment', async () => {
  const Inc = new Insurance(page)
  await Inc.verifyInsuranceDataNotLost()
});

test('Verify that when you click on the invoices then it redirect you to that invoice which was created earlier', async () => {
  const Id = new InvoiceDelivery(page)
  await Id.verifyRedirectstoInvoices()
});

test('Verify that invoices send successfully when you click on the send button', async () => {
  const Id = new InvoiceDelivery(page)
  await Id.verifyInvoicesSend()
});

// test('Verify that invoices and invoices without payment prints successfully', async () => {
//   const Id = new InvoiceDelivery(page)
//   await Id.verifyInvoicesPrint()
// });

test('Verify that after clicking on update address then address updates successfully in the Invoice', async () => {
  const Id = new InvoiceDelivery(page)
  await Id.verifyUpdateAddress()
});

test('Verify that in the customer preview invoice downloaded successfully', async () => {
  const Id = new InvoiceDelivery(page)
  await Id.verifyInvoiceDownload()
});

test('Verify Delivery created', async () => {
  const Id = new InvoiceDelivery(page)
  await Id.verifyDelivery()
});

test('Verify Attendees', async () => {
  const Att = new Attendee(page)
  const ev = new EventRegister(page) 

  await Att.goToPreviousPage()
  await Att.goToAttendees()
  await Att.markAsAttending()
  await Att.verifyStatusAttended()
  await Att.goToPreviousPage()
  await Att.clickOnEvent()
  await Att.clickOnAttendees()

  await ev.registerDesiredEvent()
  
  // await Att.goToPreviousPage()
  // await Att.goToAttendees1()
  await Att.clickSearchBox()
  await Att.verifyTotalAttendees()
  await Att.verifyAllRegistrations()
  await Att.verifynoOfRegistrations()
  await Att.verifynoOfSpecialRegistrations()
  await Att.verifyAssertions()
  await Att.verifyAssertions1()
  await Att.verifyAssertions2()
});


// test('Verify Registered Event', async () => {
//   const ev = new EventRegister(page) 
//   await ev.registerDesiredEvent()
// });


// test('test', async ({page}) => {
//   const log = new LoginH(page)

//   await log.gotoPerfectGolf()
//   await log.login('perfectgolf@silverdaletech.com', '35693569')

//   // await log.clickWaffleScreen()
//   await log.clickOnSales()
//   await log.verifyQuotationTitle()
//   await log.clickOnNewQuotation()
//   await log.verifyNewQuotationTitle()
//   await log.enterCustomer()
//   await log.enterEvent()
//   await log.enterExpiration()
//   await log.enterGolfCourse()
//   await log.enterSource()
//   await log.clickOnAddProduct()
//   await log.enterProduct1()
//   await log.enterQuantity()
//   await log.enterTax1()
//   await log.clickOnAddProduct()
//   await log.enterProduct2()
//   await log.enterTax2()
//   await log.clickOnAddProduct()
//   await log.enterProduct3()
//   await log.enterTax3()
//   await log.clickOnSideMenu()
//   await log.clickOnEventSide()
//   await log.clickOnAfterMenuEvent()
//   await log.enterTestEventName1()
//   await log.enterTestEventName2()
//   await log.enterTestEventName3()
//   await log.clickSaveBtn()
//   await log.clickSendReminderEmail()
//   await log.clickSendBtn()
//   await log.clickSendByEmail()
//   await log.clickSendBtn()
//   await log.clickInsuranceDetailsTab()
//   await log.clickEditBtn()
//   await log.clickGolfersRequired()
//   await log.clickSaveBtn()

//   await log.verifyNewPage()
// });


