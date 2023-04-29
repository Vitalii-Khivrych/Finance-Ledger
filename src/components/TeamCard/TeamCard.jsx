import React from 'react';
import PropTypes from 'prop-types';

import {
  TeamItem,
  PersonName,
  PersonPosition,
  Thumb,
  Wrapper,
} from './TeamCard.styled';
import { SocialLinks } from 'components';

export const TeamCard = ({ person }) => {
  const { id, src, srcWebp, srcRetina, srcWebpRetina, name, position } = person;

  return (
    <TeamItem key={id}>
      <Wrapper>
        <Thumb>
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
            <img src={src} alt={position} loading="lazy" />
          </picture>
          <SocialLinks />
        </Thumb>
      </Wrapper>

      <PersonName>{name}</PersonName>
      <PersonPosition>{position}</PersonPosition>
    </TeamItem>
  );
};

TeamCard.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcWebp: PropTypes.string.isRequired,
    srcRetina: PropTypes.string.isRequired,
    srcWebpRetina: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }),
};
