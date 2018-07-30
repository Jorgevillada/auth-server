import * as express from "express";
import { Constants } from "../util/constants";
import { MessageHelper } from "../util/message_helper";
import { Validation } from "../util/validation";

const IndexController = express.Router();

IndexController.get("/", async (req, res) => {
  const authToken: string = req.headers[Constants.HEADER_AUTH] as string;
  const storeId: string = req.headers[Constants.HEADER_STORE] as string;
  const userId: string = req.headers[Constants.HEADER_USER] as string;

  try {

    // check auth header
    Validation.nonEmpty(authToken,
      MessageHelper.createMessage(Constants.CODE_INVALID_AUTH_HEADER, "missing " + Constants.HEADER_AUTH),
    );

    // check store header
    Validation.nonEmpty(storeId,
      MessageHelper.createMessage(Constants.CODE_INVALID_AUTH_HEADER, "missing " + Constants.HEADER_STORE),
    );
    // check user header
    Validation.nonEmpty(userId,
      MessageHelper.createMessage(Constants.CODE_INVALID_AUTH_HEADER, "missing " + Constants.HEADER_USER),
    );

    res.sendStatus(Constants.STATUS_OK);
  } catch (error) {
    res.status(error.status || Constants.STATUS_MISSING_INFO);
    res.send(error);
  }
});

export { IndexController };
