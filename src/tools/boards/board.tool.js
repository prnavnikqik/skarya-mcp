// MCP tool definitions
import { createBoard, listBoards } from "./board.service.js";

export function registerBoardTools(server) {
  server.tool(
    "list_boards",
    {
      description: "List all boards in the current workspace",
      inputSchema: {
        type: "object",
        properties: {}
      }
    },
    async (_, ctx) => {
      return await listBoards(ctx);
    }
  );

  server.tool(
    "create_board",
    {
      description: "Create a new board using a template",
      inputSchema: {
        type: "object",
        properties: {
          boardName: { type: "string" },
          templateId: { type: "string" },
          visibility: { type: "string", enum: ["Public", "Private"] }
        },
        required: ["boardName"]
      }
    },
    async (input, ctx) => {
      return await createBoard(input, ctx);
    }
  );
}
