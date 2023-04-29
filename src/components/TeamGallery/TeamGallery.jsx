import React from 'react';

import { teamItems } from 'assets/data/team-items';
import { TeamCard } from 'components';
import { TeamList } from './TeamGallery.styled';

export const TeamGallery = () => {
  return (
    <TeamList>
      {teamItems.map(person => (
        <TeamCard key={person.id} person={person} />
      ))}
    </TeamList>
  );
};
