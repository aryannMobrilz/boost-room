import { NextPageContext } from 'next';
import { getApiClient } from '../../http/client';

export default (ctx?: NextPageContext) => ({
  getPosts: (postId) => getApiClient(ctx).get('/posts')
});
