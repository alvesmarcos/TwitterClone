import React from 'react';
import PropTypes from 'prop-types';

import AvatarImage from '~/components/AvatarImage';
import IconWrapper from '~/components/IconWrapper';
import ProfileLogo from '~/assets/alvsdev.jpg';
import { colors } from '~/styles';
import {
  Container,
  Content,
  ContentColumn,
  ContentRow,
  ActionContainer,
  Text,
  TextCount,
} from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number,
  replyCount: PropTypes.number,
  retweetCount: PropTypes.number,
};

const defaultProps = {
  favoriteCount: 0,
  replyCount: 0,
  retweetCount: 0,
};

function Tweet({
  name,
  username,
  date,
  text,
  favoriteCount,
  replyCount,
  retweetCount,
}) {
  return (
    <Container>
      <AvatarImage imgSrc={ProfileLogo} size={60} />
      <Content>
        <ContentRow>
          <Text color="black" weight="bold">
            {name}
          </Text>
          <Text color="gray">{` ${username}`}</Text>
          <Text color="gray">{` • ${date}`}</Text>
        </ContentRow>
        <ContentColumn>
          <Text color="gray">
            Replying to
            <Text color={colors.accent}> @spfc </Text>
          </Text>
        </ContentColumn>
        <ContentColumn>
          <Text color="black">{text}</Text>
        </ContentColumn>
        <ActionContainer>
          <ContentRow>
            <IconWrapper
              type="EvilIcons"
              name="comment"
              size={25}
              color="grey"
            />
            <TextCount>{replyCount}</TextCount>
          </ContentRow>
          <ContentRow>
            <IconWrapper
              type="EvilIcons"
              name="retweet"
              size={25}
              color="grey"
            />
            <TextCount>{retweetCount}</TextCount>
          </ContentRow>
          <ContentRow>
            <IconWrapper type="EvilIcons" name="heart" size={25} color="grey" />
            <TextCount>{favoriteCount}</TextCount>
          </ContentRow>
          <ContentRow>
            <IconWrapper
              type="EvilIcons"
              name="share-apple"
              size={25}
              color="grey"
            />
          </ContentRow>
        </ActionContainer>
      </Content>
    </Container>
  );
}

Tweet.propTypes = propTypes;
Tweet.defaultProps = defaultProps;

export default Tweet;
