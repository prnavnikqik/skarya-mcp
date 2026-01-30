// Calls Skarya backend APIs
export async function callListBoards(ctx) {
  const res = await fetch(
    `${process.env.SKARYA_API_URL}/api/boards/getBoardByUser?workspaceId=${ctx.workspaceId}`,
    {
      headers: {
        Authorization: `Bearer ${ctx.accessToken}`
      }
    }
  );
  return (await res.json()).data;
}

export async function callCreateBoard(input, ctx) {
  const res = await fetch(
    `${process.env.SKARYA_API_URL}/api/boards/applyTemplate`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ctx.accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        boardName: input.boardName,
        template: { id: input.templateId || "kanban-default" },
        workspaceId: ctx.workspaceId,
        subdomain: ctx.subdomain,
        createdBy: ctx.email
      })
    }
  );
  return (await res.json()).board;
}
