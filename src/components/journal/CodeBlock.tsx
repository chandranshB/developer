import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-[20px] overflow-hidden bg-[#1d1d1f] dark:bg-black border border-white/10">
      {filename && (
        <div className="px-6 py-3 border-b border-white/10 flex items-center justify-between">
          <span className="text-[13px] text-white/60">{filename}</span>
          <span className="text-[11px] text-white/40 uppercase tracking-wide">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-6 overflow-x-auto text-[15px] leading-[1.6]">
          <code className="text-white/90 font-mono">{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="absolute top-4 right-4 rounded-lg bg-white/10 hover:bg-white/20 text-white"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}
