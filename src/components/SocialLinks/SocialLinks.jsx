import React from 'react';

import { SvgIcon } from 'components';
import { socialLinksItems } from 'assets/data/social-links-items';
import {
  SocialLinksList,
  SocialLinksItem,
  SocialLink,
} from './SocialLinks.styled';

export const SocialLinks = ({ visible }) => {
  return (
    <SocialLinksList visible={visible}>
      {socialLinksItems.map(({ id, alt, href }) => (
        <SocialLinksItem key={id}>
          <SocialLink href={href} alt={alt}>
            <SvgIcon id={id} />
          </SocialLink>
        </SocialLinksItem>
      ))}
    </SocialLinksList>
  );
};
