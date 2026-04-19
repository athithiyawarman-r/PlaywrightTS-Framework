import { Page } from "@playwright/test"

export abstract class PWWrapper {

        page:Page // globale varibae // property


       constructor(Localpage:Page){ //here Lpage will capture/hold the value of page fixture

        //Page os the type of page fixture
        this.page=Localpage
    }


async clearAndFill(locator: string, value: string) {
    await this.page.locator(locator).fill(value)
}


}