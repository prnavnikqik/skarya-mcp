// Business orchestration for board management tool
import { callCreateBoard, callListBoards } from "./board.api.js";

export async function listBoards(ctx) {
  const boards = await callListBoards(ctx);
  return {
    boards: boards.map(b => ({
      name: b.boardName,
      visibility: b.visibility
    }))
  };
}

export async function createBoard(input, ctx) {
  const board = await callCreateBoard(input, ctx);
  return {
    message: `Board '${board.boardName}' created successfully`
  };
}
