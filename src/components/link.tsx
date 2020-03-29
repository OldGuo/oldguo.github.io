import { Link } from "gatsby";
// tslint:disable-next-line:no-submodule-imports
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as React from "react";
import { ComponentProps } from "react";

type Props = Partial<ComponentProps<typeof Link>>;

export const FadeLink = (props: Props) => {
  const { children, ...linkProps } = props;

  return <AniLink {...linkProps}>{children}</AniLink>;
};
