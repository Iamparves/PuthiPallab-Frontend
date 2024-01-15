import React from 'react';
import { useState, useEffect } from 'react';

const CultoOnlineCard = ({ service }) => {
  const { title, description, youtubeUrl } = service;
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  useEffect(() => {
    const getYouTubeThumbnail = async () => {
      try {
        const response = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(youtubeUrl)}`);
        const data = await response.json();
        setThumbnailUrl(data.thumbnail_url);
      } catch (error) {
        console.error('Error fetching YouTube thumbnail:', error);
      }
    };

    if (youtubeUrl) {
      getYouTubeThumbnail();
    }
  }, [youtubeUrl]);

  return (
    <div className="border-[#ebebeb] bg-white px-5 py-8 duration-300 sm:py-10 md:hover:scale-[calc(101%)] md:hover:border-transparent md:hover:shadow-[0_0_20px_0_rgba(0,0,0,0.03)] xl:py-12 [&:not(:last-child)]:border-b md:[&:not(:nth-child(3n))]:border-r sm:[&:nth-child(2n-1)]:border-r md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(4)]:border-b-0 sm:[&:nth-child(5)]:border-b-0">
      <div className="mx-auto max-w-[260px] text-center sm:text-left">
        {thumbnailUrl && (
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <span className="mx-auto inline-block aspect-square w-24 sm:w-16 sm:mx-0">
              {/* Ajustei a classe da miniatura (w-24) para aumentar o tamanho */}
              <img src={thumbnailUrl} alt={title} />
            </span>
            <h3 className="my-3 text-base font-bold lg:text-lg">
            {/* Ajustei a classe do título (text-base, lg:text-lg) para diminuir o tamanho */}
            {title}
            </h3>
            <p className="text-sm text-gray-500 sm:text-xs">
            {/* Ajustei a classe da descrição (text-sm, sm:text-xs) para diminuir o tamanho */}
            {description}
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default CultoOnlineCard;
