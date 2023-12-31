import express from "express";

export const get = async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).json({
      status: "OK",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
