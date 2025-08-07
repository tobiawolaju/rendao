
'use client';

import { useState } from 'react';
import { uploadToIPFS } from '@/lib/ipfs';
import { Paperclip } from 'lucide-react';

export const UploadDocs = ({ onUpload }: { onUpload: (cids: string[]) => void }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    const cids = await Promise.all(files.map(uploadToIPFS));
    onUpload(cids);
    setLoading(false);
  };

  return (
    <div className="p-4 border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black text-center">
      <Paperclip className="mx-auto h-12 w-12 text-nouns-black" />
      <input type="file" multiple onChange={handleFileChange} className="mt-4 block mx-auto" />
      <button 
        onClick={handleUpload} 
        disabled={loading || files.length === 0}
        className="mt-4 py-3 px-6 bg-nouns-purple text-nouns-white font-bold text-lg border-2 border-nouns-black shadow-nouns-sm hover:bg-nouns-white hover:text-nouns-black dark:hover:bg-nouns-black dark:hover:text-nouns-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Uploading...' : 'Upload Documents'}
      </button>
    </div>
  );
};
