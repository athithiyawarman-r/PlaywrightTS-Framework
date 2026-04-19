import { expect } from "@playwright/test";
import { HomePage } from "./03-homePage";
import { AccountPage } from "./07-accountPage";

export class CreateAccount extends HomePage{

async FillMandotaryFields(randomName:string){
        await this.page.locator("#accountName").fill(randomName);
}
    

async clickCreateAccount(){

        await this.page.locator(".smallSubmit").click();
}

async ValidateAccountCreation(randomName:string){
        expect(this.page.locator(`//span[@class='tabletext' and contains(text(), '${randomName}')]`)).toBeVisible();
}
}