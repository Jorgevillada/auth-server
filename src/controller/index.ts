import * as express from "express";
import { ValidationService } from "../service/validate-token";
import { Constants } from "../util/constants";
import { Logger } from "../util/logger";
import { MessageHelper } from "../util/message_helper";
import { Validation } from "../util/validation";


const IndexController = express.Router();

IndexController.get("/", async (req, res) => {
  const authToken: string = req.headers[Constants.HEADER_AUTH] as string;
  const storeId: string = req.headers[Constants.HEADER_STORE] as string;
  const userId: string = req.headers[Constants.HEADER_USER] as string;

  try {
    Logger.info("params", { authToken, storeId, userId });
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
    if (!(await ValidationService.validateToken(authToken, storeId, userId))) {
      Logger.debug("invalid token", authToken, storeId, userId, ValidationService.validateToken(authToken, storeId, userId));
      throw MessageHelper.createMessage(Constants.CODE_INVALID_AUTH_HEADER, "invalid token ");
    }
    res.sendStatus(Constants.STATUS_OK);
  } catch (error) {
    Logger.error("eror in request", error);
    res.status(error.status || Constants.STATUS_MISSING_INFO);
    res.send(error);
  }
});

export { IndexController };
