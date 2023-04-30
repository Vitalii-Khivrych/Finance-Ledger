import React from 'react';

import { ButtonInverseHover, PreTitle, Title, Text } from 'components';
import {
  BlogSectionStyled,
  Wrapper,
  BlogImage,
  BlogContainer,
  TextWrapper,
} from './BlogsSection.styled';

import blogImage from 'images/home/blog.jpg';
import blogImageWebp from 'images/home/blog.webp';
import blogImageRetina from 'images/home/blog@2x.jpg';
import blogImageWebpRetina from 'images/home/blog@2x.webp';

export const BlogsSection = () => {
  return (
    <BlogSectionStyled id="blog">
      <Wrapper>
        <BlogImage>
          <source
            srcSet={`${blogImageWebp} 1x,
              ${blogImageWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${blogImage} 1x,
              ${blogImageRetina} 2x`}
            type="image/jpeg"
          />
          <img src={blogImage} alt="books on the table" loading="lazy" />
        </BlogImage>
        <BlogContainer>
          <TextWrapper>
            <PreTitle>April 16 2020</PreTitle>
            <Title lh="54">Blog Post One</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <ButtonInverseHover blue post>
              Read Our Blog
            </ButtonInverseHover>
          </TextWrapper>
        </BlogContainer>
      </Wrapper>
    </BlogSectionStyled>
  );
};
