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


test('Verify CRM FLOW', async () => {
    const cr = new CRM(page)
    await cr.verifyCRMTitle()
  });
  
  
  test('Verify redirects to leads', async () => {
    const cr = new CRM(page)
    await cr.verifyLeadsTitle()
  });
  

  test('Verify leads details', async () => {
    const cr = new CRM(page)
    await cr.verifyLeadsDetails()
  });
  
  test('Verify lead is saved', async () => {
    const cr = new CRM(page)
    await cr.verifyLeadSaved()
  });
  
  test('Verify enrich Functionality on leads', async () => {
    const cr = new CRM(page)
    await cr.verifyEnrichFunctionality()
  });
  

  test('Verify lead is converted to oportunity', async () => {
    const cr = new CRM(page)
    await cr.verifyConvertToOportunity()
  });
    
  test('Verify stages on leads', async () => {
    const cr = new CRM(page)
    // await cr.verifyQualifiedStage()
    await cr.verifyPropositionStage()
  });
  
  test('Verify leads new quotation', async () => {
    const cr = new CRM(page)
    await cr.verifyLeadNewQuotation()
  });
  
  test('Verify send message on leads chatter', async () => {
    const cr = new CRM(page)
    await cr.verifySendMsgOnChatter()
  });
  
  
  test('Verify log notes', async () => {
    const cr = new CRM(page)
    await cr.verifyLogNote()
  });
  
  test('Verify Schedule Activity functionality is working properly', async () => {
    const cr = new CRM(page)
    await cr.verifyScheduleActivity()
  });
  
  test('Verify lead is marked as lost', async () => {
    const cr = new CRM(page)
    await cr.verifyLeadLost()
  });
  
  test('Verify lead is restored', async () => {
    const cr = new CRM(page)
    await cr.verifyLeadRestore()
  });
  
  test('Verify lead is won', async () => {
    const cr = new CRM(page)
    await cr.verifyLeadWon()
  });
  
  
  test('Verify edit functionality on leads is working properly', async () => {
    const cr = new CRM(page)
    await cr.verifyEditFunctionality()
  });
  
  
  test('Verify new quotation functinality it is created', async () => {
    const cr = new CRM(page)
    await cr.verifyNewQuotationLeads()
  });
  
   

  