
import ReactMarkdown from 'react-markdown';

function MarkdownPreview(props) {
  return (
    <div className="markdown-preview">
      <ReactMarkdown source={props.source} />
    </div>
  );
}

export default MarkdownPreview;