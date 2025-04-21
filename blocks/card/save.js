import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { imagem, titulo, descricao, botao } = attributes;

  return (
    <div {...useBlockProps.save()} className="wp-block-wp24h-card">
      {imagem && <img src={imagem} alt="" />}
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={botao.url} className="btn-link">{botao.texto}</a>
    </div>
  );
}
