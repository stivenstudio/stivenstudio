import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

export default function MarkdownRenderer({ content }) {
	return (
		<ReactMarkdown rehypePlugins={[rehypeSanitize]}>
			{content}
		</ReactMarkdown>
	)
}