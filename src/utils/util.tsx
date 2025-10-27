import type { ReactElement } from 'react';
import sanitizeHtml from 'sanitize-html';

export function sanitizeText(text: string): string {
  return sanitizeHtml(text, {
    allowedTags: [
      'em',
      'i',
      'strong',
      'b',
      'a',
      'br',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'span',
      'ol',
      'ul',
      'li',
    ],
    allowedAttributes: {
      '*': ['class'],
      a: ['href', 'name', 'target'],
    },
  });
}

export function formatText(text: string, customClass: string | undefined = undefined): ReactElement {
  return (
    <span
      className={customClass}
      dangerouslySetInnerHTML={{
        __html: sanitizeText(text),
      }}
    />
  );
}
