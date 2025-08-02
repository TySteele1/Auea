import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TerminalSquare, Send } from "lucide-react";

const ModuleD = () => {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  const handleSubmit = () => {
    if (input.trim() === "") return;

    const newEntry = {
      timestamp: new Date().toLocaleTimeString(),
      content: input,
    };

    setLog((prev) => [newEntry, ...prev]);
    setInput("");
  };

  return (
    <div className="p-6">
      <Card className="rounded-2xl shadow-md dark:bg-gray-900">
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <TerminalSquare size={20} />
            Genesis Input Terminal
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Enter query, command, or CIF directive..."
              className="w-full min-h-[120px]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={handleSubmit} className="flex gap-2">
              <Send size={16} />
              Transmit
            </Button>
          </div>
          <div className="max-h-[300px] overflow-y-auto bg-gray-100 dark:bg-gray-800 p-3 rounded-lg space-y-2">
            {log.map((entry, index) => (
              <div key={index} className="text-sm text-gray-800 dark:text-gray-200">
                <span className="font-mono text-xs text-gray-500 mr-2">
                  [{entry.timestamp}]
                </span>
                {entry.content}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleD;
