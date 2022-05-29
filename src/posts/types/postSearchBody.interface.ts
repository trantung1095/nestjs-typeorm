import PostSearchBody from './postSearch.interface';

interface PostSearchResult {
  hits: {
    total: {
      value: number;
    };
    hits: Array<{
      _source: PostSearchBody;
    }>;
  };
}

export default PostSearchResult;
