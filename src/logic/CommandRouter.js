// CommandRouter.js
import { handlePhase2Logic } from "./Phase2";

export function routeCommand(inputText, systemState) {
  const { activePhase } = systemState;

  if (activePhase === 2) {
    return handlePhase2Logic(inputText);
  }

  return {
    response: `Phase ${activePhase} is active. No Phase 2 logic triggered.`,
    metadata: { reason: "Wrong phase", timestamp: Date.now() }
  };
}
