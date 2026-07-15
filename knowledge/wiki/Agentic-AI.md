# Agentic AI

An AI agent is a model-centered system that can pursue a goal through multiple steps, select or call tools, observe results, maintain context, and adapt its plan. Autonomy is a spectrum: an agent may only draft, may act after approval, or may execute bounded actions independently.

## Production pattern

Goal → plan → tool call → observation → state update → evaluation → approval or next action.

Useful agents combine probabilistic reasoning with deterministic software. They need explicit tool contracts, constrained permissions, termination rules, durable state, and recovery paths. Multi-agent designs can parallelize or specialize work, but also increase coordination cost and failure surfaces.

Related: [[Enterprise Agent Runtime]], [[Agent Interoperability]], [[Evaluation and Observability]], [[AI Coding Agents]].
