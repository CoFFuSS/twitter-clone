import { Timestamp } from 'firebase/firestore';

export interface TweetProps {
  name: string;
  email: string;
  createdAt: Timestamp;
  content: string;
  image: string;
  likes: number;
  likingUsers: string[];
}

export interface TweetsArrayProps {
  tweet: TweetProps;
  id: string;
  myEmail: string;
}
