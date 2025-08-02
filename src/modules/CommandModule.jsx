import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Code2 } from "lucide-react";

const CommandModule = () => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const handleCommand = () => {
    // Placeholder logic for command execution
    const output = `> ${command}\n\nSystem response: Command '${command}' received and processed.`;
    setResponse(output);
    setCommand('');
  };

  return (
    <div className="p-6 space-y-6">
      <Card className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Code2 size={20} /> Command Node Interface
          </h2>
          <div className="flex gap-2">
            <Input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Enter command string..."
              className="flex-1"
            />
            <Button onClick={handleCommand}>
              <Send size={16} className="mr-1" />
              Execute
            </Button>
          </div>
          {response && (
            <pre className="bg-black text-green-400 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
              {response}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CommandModule;
