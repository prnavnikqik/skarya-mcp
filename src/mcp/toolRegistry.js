// Register MCP tools
const toolRegistry = require('./mcp/toolRegistry');
toolRegistry.registerTool('codeFormatter', require('./tools/codeFormatter'));
toolRegistry.registerTool('bugFinder', require('./tools/bugFinder'));
toolRegistry.registerTool('testGenerator', require('./tools/testGenerator'));
module.exports = toolRegistry;
