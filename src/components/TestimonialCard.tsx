import Image from 'next/image';

type TestimonialProps = {
  quote: string;
  author: string;
  imageUrl: string;
};

export const TestimonialCard = ({ quote, author, imageUrl }: TestimonialProps) => {
  return (
    <div className="border-4 border-nouns-black shadow-nouns p-6 bg-nouns-white text-nouns-black text-center">
      <Image
        src={imageUrl}
        alt={author}
        width={80}
        height={80}
        unoptimized
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-nouns-black"
      />
      <p className="italic text-lg">&quot;{quote}&quot;</p>
      <p className="text-right mt-4 font-bold text-xl">- {author}</p>
    </div>
  );
};
