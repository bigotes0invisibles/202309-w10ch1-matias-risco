import type { Request, Response } from "express";
import PingController from "./PingController";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the controller PingController", () => {
  describe("When getPing is call with a Response as a parameter", () => {
    const request = {};
    const response: Pick<Response, "status" | "json"> = {
      status: jest.fn(() => response as Response),
      json: jest.fn(),
    };

    test("Then it should call status with 200 as a Code", () => {
      const expectedCode = 200;
      const pingController = new PingController();

      pingController.getPing(request as Request, response as Response);

      expect(response.status).toHaveBeenCalledWith(expectedCode);
    });

    test("Then it should call json with message { message: '🏓' }", () => {
      const expectedMessage = { message: "🏓" };
      const pingController = new PingController();

      pingController.getPing(request as Request, response as Response);

      expect(response.json).toHaveBeenCalledWith(expectedMessage);
      expect(response.json).toHaveBeenCalledTimes(1);
    });
  });
});
