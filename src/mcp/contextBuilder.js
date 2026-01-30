//  Build user / workspace context for MCP operations
class ContextBuilder {
    constructor(userService, workspaceService) {
        this.userService = userService;
        this.workspaceService = workspaceService;
    }
    async buildContext(userId, workspaceId) {
        const user = await this.userService.getUserById(userId);
        const workspace = await this.workspaceService.getWorkspaceById(workspaceId);
        return {
            user,
            workspace
        };
    }
}
module.exports = ContextBuilder;