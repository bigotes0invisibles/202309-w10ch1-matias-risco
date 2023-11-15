import type { Request, Response } from "express";
import { notFound } from "./errorMiddleware";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the middleware notFound", () => {
  describe("When notFound is call with a Response as a parameter", () => {
    const request = {};
    const response: Pick<Response, "status" | "json"> = {
      status: jest.fn(() => response as Response),
      json: jest.fn(),
    };

    test("Then it should call status with 404 as a Code", () => {
      const expectedCode = 404;

      notFound(request as Request, response as Response);

      expect(response.status).toHaveBeenCalledWith(expectedCode);
    });

    test("Then it should call json with message { error: 'Endpoint not found' }", () => {
      const expectedMessage = { error: "Endpoint not found" };

      notFound(request as Request, response as Response);

      expect(response.json).toHaveBeenCalledWith(expectedMessage);
      expect(response.json).toHaveBeenCalledTimes(1);
    });
  });
});
