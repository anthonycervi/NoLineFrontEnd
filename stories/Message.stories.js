import React from 'react';
import Message from '../comps/Message';

export default {
    title: 'Message',
    component: Message
  }
  
  export const ReviewMessage = () => <Message title="Amazing Place!" messageBody="Of course one expects really fresh sushi in Vancouver. Restaurant sushi is not only fresh but well portioned and presented. With a beautiful ambiance overlooking the water it is a pleasure to dine at." timestamp="2m ago" username="@user123"/>;
  export const CommentMessage = () => <Message title="Jane Appleseed" messageBody="Of course one expects really fresh sushi in Vancouver. Restaurant sushi is not only fresh but well portioned and presented. With a beautiful ambiance overlooking the water it is a pleasure to dine at." timestamp="2m ago" username=""/>;