import { Constants } from "../constants"
import * as Config from "../config"

it('user token must be equal to CHECK_USER_TOKEN config', () => {
    expect(Constants.CHECK_USER_TOKEN).toBe(false);
});


