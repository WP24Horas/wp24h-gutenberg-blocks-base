import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { mensagem, destaque } = attributes;

  return (
    <div {...useBlockProps.save()} className={destaque ? 'is-highlighted' : ''}>
      <p>{mensagem}</p>
    </div>
  );
}
