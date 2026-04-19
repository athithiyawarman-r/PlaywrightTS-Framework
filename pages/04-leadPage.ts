import { HomePage } from "./03-homePage";


export class LeadPage extends HomePage{

async clickCreateLead(){

        await this.page.locator("//a[text()='Create Lead']").click()
}
    
}