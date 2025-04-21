import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import ImageUploader from './components/ImageUploader';
import ButtonLink from './components/ButtonLink';

export default function Edit({ attributes, setAttributes }) {
  const { imagem, titulo, descricao, botao } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Conteúdo do Card">
          <TextControl
            label="Título"
            value={titulo}
            onChange={(val) => setAttributes({ titulo: val })}
          />
          <TextareaControl
            label="Descrição"
            value={descricao}
            onChange={(val) => setAttributes({ descricao: val })}
          />
          <ButtonLink
            texto={botao.texto}
            url={botao.url}
            onChange={(novo) => setAttributes({ botao: novo })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...useBlockProps()} className="wp-block-wp24h-card">
        <ImageUploader imagem={imagem} onChange={(val) => setAttributes({ imagem: val })} />
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <a href={botao.url} className="btn-link">{botao.texto}</a>
      </div>
    </>
  );
}
