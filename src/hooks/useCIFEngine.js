import { useState } from 'react';

// Temporary in-memory CIF store
let cifMemory = [];

export function useCIFEngine() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  function injectValidationPath(queryText, sourceModule = 'ModuleC') {
    setLoading(true);

    const type = classifyQuery(queryText);
    const signals = generateSignalPaths(queryText, type);

    const memoryEntry = {
      timestamp: Date.now(),
      module: sourceModule,
      query: queryText,
      type,
      signalPaths: signals,
    };

    cifMemory.push(memoryEntry);
    setResponse({ type, ...signals });
    setLoading(false);
  }

  return { response, loading, injectValidationPath };
}

// --- Signal classifiers ---
function classifyQuery(text) {
  const lower = text.toLowerCase();
  if (lower.includes('legal')) return 'legal';
  if (lower.includes('money') || lower.includes('finance')) return 'financial';
  if (lower.includes('code') || lower.includes('react')) return 'technical';
  return 'general';
}

// --- Multi-path response engine ---
function generateSignalPaths(text, type) {
  return {
    cognitive: `Cognitive pattern detected in: "${text}"`,
    emotional: getEmotionalSignal(text),
    structural: getStructuralSignal(type),
    legal:
      type === 'legal'
        ? 'This may require legal oversight or routing to Genesis Law Stack.'
        : null,
  };
}

function getEmotionalSignal(text) {
  const mood = text.toLowerCase();
  if (mood.includes('help') || mood.includes('lost'))
    return 'User may be seeking guidance or support.';
  if (mood.includes('angry') || mood.includes('broken'))
    return 'Frustration signal detected.';
  return 'Emotional tone neutral.';
}

function getStructuralSignal(type) {
  switch (type) {
    case 'technical':
      return 'Routing to development stack for code diagnostics.';
    case 'financial':
      return 'Routing through BIG App passive income protocol.';
    case 'legal':
      return 'Flagging for Genesis compliance path.';
    default:
      return 'Default routing channel active.';
  }
}
