import { CreateLeadPage } from "./05-createLeadPage";


export class ViewLeadPage extends CreateLeadPage{

    async getFirstName(){

        const fName = await this.page.locator("#viewLead_firstName_sp").innerText()
        console.log(fName);
        
    }

}