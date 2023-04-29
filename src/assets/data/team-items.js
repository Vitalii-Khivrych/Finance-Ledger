import { nanoid } from 'nanoid';

import person1 from 'images/team/person1.jpg';
import person1Webp from 'images/team/person1.webp';
import person1Retina from 'images/team/person1@2x.jpg';
import person1WebpRetina from 'images/team/person1@2x.webp';

import person2 from 'images/team/person2.jpg';
import person2Webp from 'images/team/person2.webp';
import person2Retina from 'images/team/person2@2x.jpg';
import person2WebpRetina from 'images/team/person2@2x.webp';

import person3 from 'images/team/person3.jpg';
import person3Webp from 'images/team/person3.webp';
import person3Retina from 'images/team/person3@2x.jpg';
import person3WebpRetina from 'images/team/person3@2x.webp';

export const teamItems = [
  {
    id: nanoid(),
    src: person1,
    srcWebp: person1Webp,
    srcRetina: person1Retina,
    srcWebpRetina: person1WebpRetina,
    name: 'John Doe',
    position: 'President',
  },
  {
    id: nanoid(),
    src: person2,
    srcWebp: person2Webp,
    srcRetina: person2Retina,
    srcWebpRetina: person2WebpRetina,
    name: 'Jane Doe',
    position: 'Vice President',
  },
  {
    id: nanoid(),
    src: person3,
    srcWebp: person3Webp,
    srcRetina: person3Retina,
    srcWebpRetina: person3WebpRetina,
    name: 'Steve Smith',
    position: 'Marketing Head',
  },
];
