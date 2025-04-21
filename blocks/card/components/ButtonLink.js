import { TextControl } from '@wordpress/components';

export default function ButtonLink({ texto, url, onChange }) {
  return (
    <div className="button-config">
      <TextControl
        label="Texto do botão"
        value={texto}
        onChange={(val) => onChange({ texto: val, url })}
      />
      <TextControl
        label="Link do botão"
        value={url}
        onChange={(val) => onChange({ texto, url: val })}
      />
    </div>
  );
}
