import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { mensagem, destaque } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Configurações">
          <TextControl
            label="Mensagem"
            value={mensagem}
            onChange={(val) => setAttributes({ mensagem: val })}
          />
          <ToggleControl
            label="Destaque"
            checked={destaque}
            onChange={(val) => setAttributes({ destaque: val })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()} className={destaque ? 'is-highlighted' : ''}>
        <p>{mensagem}</p>
      </div>
    </>
  );
}
