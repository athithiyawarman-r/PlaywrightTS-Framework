import { PWWrapper } from "../utility/playwrightWrapper"

export class LoginPage extends PWWrapper {

    async loadUrl(url: string) { // actionables
        await this.page.goto(url)


    }


    async enterCredentials(username: string, password: string) {
        // await this.page.locator("#username").fill(username)
        // await this.page.locator("#password").fill(password)
        await this.clearAndFill("#username", username)
        await this.clearAndFill("#password", password)
    }  

    async clickLogin() {
        await this.page.locator(".decorativeSubmit").click()
    }


}



