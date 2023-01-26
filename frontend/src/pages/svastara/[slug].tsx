import React from 'react';
import { getStaticPaths } from '@/lib/getStaticPathsSvastara';
import { getStaticProps } from '@/lib/getStaticPropsIndividualSvastara';
import { SinglePostProps } from '@/types';
import { FC } from 'react';
import { Container } from 'src/components';
import PodstranicaBloga from '@/components/blog/recenzije/PodstranicaBloga';

const SvastaraPost: FC<SinglePostProps> = ({ post }) => {
  return (
    <Container>
      <PodstranicaBloga
        post={post}
        pageSeoDescription="Blog o svemu i svačemu."
        pageSeoTitle="Čitalo - Svaštara o svemu i svačemu"
      />
    </Container>
  );
};

export default SvastaraPost;

export { getStaticPaths };
export { getStaticProps };
