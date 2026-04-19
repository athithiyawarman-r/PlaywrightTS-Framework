
import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

import { LoginPage  } from "../pages/01-login";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";   
import { AccountPage } from "../pages/07-accountPage";
import { CreateAccount } from "../pages/08-createAccountPage";

import dotenv from "dotenv";
import { PWWrapper } from "../utility/playwrightWrapper";
dotenv.config({ path:"Data/prod.env" });

test(`Create Account using POM`,async ({page}) => {

const login = new LoginPage(page) // constructor // p2352434343
await login.loadUrl(process.env.BaseURL!)
await login.enterCredentials(process.env.LF_UserName!, process.env.LF_Password!);
await login.clickLogin()

const wp = new WelcomePage(page)
await wp.clickCRM()

const hp = new HomePage(page)
await hp.clickAccount()

const ap = new AccountPage(page)
await ap.clickCreateAccount()


const cap = new CreateAccount(page)
let randomName = faker.person.firstName();
await cap.FillMandotaryFields(randomName)
await cap.clickCreateAccount()
await cap.ValidateAccountCreation(randomName);



await page.waitForTimeout(3000)


})