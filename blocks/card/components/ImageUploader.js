import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function ImageUploader({ imagem, onChange }) {
  return (
    <div className="image-uploader">
      {imagem && <img src={imagem} alt="Imagem do card" style={{ maxWidth: '100%' }} />}
      <MediaUpload
        onSelect={(media) => onChange(media.url)}
        allowedTypes={['image']}
        render={({ open }) => (
          <Button onClick={open} variant="secondary">
            {imagem ? 'Trocar imagem' : 'Selecionar imagem'}
          </Button>
        )}
      />
    </div>
  );
}
