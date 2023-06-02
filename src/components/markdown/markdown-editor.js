
function MarkdownEditor({ markdown, setMarkdown }) {
  return (
    <textarea
      className="markdown-editor"
      value={markdown}
      onChange={e => setMarkdown(e.target.value)}
    />
  );
}

export default MarkdownEditor;