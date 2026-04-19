import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/01-login";


type MyFixtures = {   //Type alias is used to create a new name for a type. It is a way to give a type a new name. It is not creating a new type, but it is creating a new name for an existing type.
    loginFixture: LoginPage // here we are creating a type for our custom fixture and assigning the type of LoginPage to it
}

export const test1 = baseTest.extend<MyFixtures>({

  // here we are creating a custome fixture called "data" and assigning the value of "testData" to it
    loginFixture: async ({page}, use) => {
        const login = new LoginPage(page) // constructor // p2352434343
        await use(login) // here we are passing the value of login to the test file and using it there
    }

    
})