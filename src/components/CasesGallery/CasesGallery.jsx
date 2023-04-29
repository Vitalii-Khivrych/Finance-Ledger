import React from 'react';
import 'lightbox2/dist/js/lightbox-plus-jquery';
import 'lightbox2/dist/css/lightbox.css';

import { casesGalleryItems } from 'assets/data/cases-gallery-items';
import { GalleryList, GalleryItem } from './CasesGallery.styled';

export const CasesGallery = () => {
  return (
    <GalleryList>
      {casesGalleryItems.map(
        ({ id, src, srcWebp, srcRetina, srcWebpRetina, alt }) => (
          <GalleryItem key={id}>
            <a href={src} data-lightbox="Business Cases" data-title={alt}>
              <picture>
                <source
                  srcSet={`${srcWebp} 1x,
              ${srcWebpRetina} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${src} 1x,
              ${srcRetina} 2x`}
                  type="image/jpeg"
                />
                <img src={src} alt={alt} loading="lazy" />
              </picture>
            </a>
          </GalleryItem>
        )
      )}
    </GalleryList>
  );
};
