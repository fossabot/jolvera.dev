/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";
import { withTheme } from "emotion-theming";
import { Box, Text } from "@rebass/emotion";
import PublishedAt from "./utils/published-at";

const Post = ({ title, summary, date, path }) => (
  <Box as="article" mb={5}>
    <Box as="header" mb={3}>
      <Text as="h2" mb={0}>
        <Link href={path}>
          <a css={theme => ({ color: theme.color })}>{title}</a>
        </Link>
      </Text>

      <PublishedAt link={path} date={date} />
    </Box>
    <div className="post-summary">{summary}</div>
  </Box>
);

export default withTheme(Post);
