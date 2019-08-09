import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import AvatarImage from '~/components/AvatarImage';
import IconWrapper from '~/components/IconWrapper';
import { formatNumberVolume } from '~/util';
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
  profileImage: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  replyName: PropTypes.string.isRequired,
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
  profileImage,
  username,
  replyName,
  date,
  text,
  favoriteCount,
  replyCount,
  retweetCount,
  ...rest
}) {
  const theme = useSelector(state => state.themeReducer.mode);

  return (
    <Container {...rest}>
      <AvatarImage imgSrc={profileImage} size={60} isRemote />
      <Content>
        <ContentRow>
          <Text color={theme.contrast} weight="bold">
            {name}
          </Text>
          <Text color={theme.hint}>{` @${username}`}</Text>
          <Text color={theme.hint}>{` • ${format(date, 'MMM D')}`}</Text>
        </ContentRow>
        {replyName && (
          <ContentColumn>
            <Text color={theme.hint}>
              Replying to
              <Text color={theme.accent}>{` @${replyName}`}</Text>
            </Text>
          </ContentColumn>
        )}
        <ContentColumn>
          <Text color={theme.contrast}>{text}</Text>
        </ContentColumn>
        <ActionContainer>
          <ContentRow>
            <IconWrapper
              type="EvilIcons"
              name="comment"
              size={25}
              color={theme.hint}
            />
            <TextCount>
              {replyCount ? formatNumberVolume(replyCount) : ''}
            </TextCount>
          </ContentRow>
          <ContentRow>
            <IconWrapper
              type="EvilIcons"
              name="retweet"
              size={25}
              color={theme.hint}
            />
            <TextCount>
              {retweetCount ? formatNumberVolume(retweetCount) : ''}
            </TextCount>
          </ContentRow>
          <ContentRow>
            <IconWrapper
              type="EvilIcons"
              name="heart"
              size={25}
              color={theme.hint}
            />
            <TextCount>
              {favoriteCount ? formatNumberVolume(favoriteCount) : ''}
            </TextCount>
          </ContentRow>
          <ContentRow>
            <IconWrapper
              type="EvilIcons"
              name="share-apple"
              size={25}
              color={theme.hint}
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
