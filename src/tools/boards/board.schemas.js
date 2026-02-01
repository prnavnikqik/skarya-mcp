//  JSON schemas for board tool

export const BoardSummarySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    visibility: { type: "string" }
  }
};

export const CreateBoardInputSchema = {
  type: "object",
  properties: {
    boardName: { type: "string" },
    templateId: { type: "string" },
    visibility: {
      type: "string",
      enum: ["Public", "Private"]
    }
  },
  required: ["boardName"]
};
