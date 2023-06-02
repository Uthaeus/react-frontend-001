import { useState } from "react";

import MarkdownEditor from "./markdown-editor";
import MarkdownPreview from "./markdown-preview";

// const initialMarkdown = ```
// # Markdown Previewer

// ## Sub-heading...

// ### Another deeper heading...

// Paragraphs are separated
// by a blank line.

// ```;

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="markdown-previewer">
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      <MarkdownPreview markdown={markdown} />
    </div>
  );
}

export default MarkdownPreviewer;