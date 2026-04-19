import { faker } from "@faker-js/faker";
import { LeadPage } from "./04-leadPage";



export class CreateLeadPage extends LeadPage {

    async enterMandatoryFields() {

        // await this.page.locator("#createLeadForm_companyName"
        await this.clearAndFill("#createLeadForm_companyName", faker.company.name())
        await this.clearAndFill("#createLeadForm_firstName", faker.person.firstName())
        await this.clearAndFill("#createLeadForm_lastName", faker.person.lastName())
    }      

    async clickSubmit(){
        await this.page.locator('.smallSubmit').click()

    }


}