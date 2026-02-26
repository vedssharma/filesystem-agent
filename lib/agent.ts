import { ToolLoopAgent} from "ai";

const agent = new ToolLoopAgent(
    {
        model: "anthropic/claude-opus-4.6",
        tools: {},
        instructions: ""
    }
)

export {agent};
