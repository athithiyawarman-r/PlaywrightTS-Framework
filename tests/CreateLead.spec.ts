
import {test1} from "../utility/customFixture"

import { LoginPage  } from "../pages/01-login";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import dotenv from "dotenv" 

dotenv.config({ path:"Data/prod.env" });


test1(`Create Lead using POM`, async ({ loginFixture, page }) =>
{

    await loginFixture.loadUrl(process.env.BaseURL as string)
    await loginFixture.enterCredentials(process.env.LF_UserName as string, process.env.LF_Password as string)
    await loginFixture.clickLogin()
       
    
// const login = new LoginPage(page) // constructor // p2352434343
// await login.loadUrl(process.env.BaseURL!)
// await login.enterCredentials(process.env.LF_UserName!, process.env.LF_Password!)
// await login.clickLogin()

const wp = new WelcomePage(page)
await wp.clickCRM()

const hp = new HomePage(page)
await hp.clickLead()

const lp = new LeadPage(page)
await lp.clickCreateLead()

const clp = new CreateLeadPage(page)
await clp.enterMandatoryFields()
await clp.clickSubmit()

const vp = new ViewLeadPage(page)
await vp.getFirstName()


await page.waitForTimeout(3000)


})