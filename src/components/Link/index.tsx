import NextLink from 'next/link';
import React from 'react';

type Props = React.ComponentProps<typeof NextLink> & {
  children: React.ReactNode;
};

export const Link: React.FC<Props> = ({ children, ...linkProps }) => {
  return (
    <NextLink {...linkProps}>
      <a>{children}</a>
    </NextLink>
  );
};
