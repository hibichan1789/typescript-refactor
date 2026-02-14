interface Post {
  id: string;
  title: string;
  content: string;
  authorId: number;
  tags: string[];
  viewCount: number;
  isPublished: boolean;
}

//課題1
type PostDetail = Omit<Post, "authorId"|"viewCount">;

//課題2
type PostDraft =  Pick<Post, "id">&Partial<Omit<Post, "id">>;

//課題3
type Tag = "sample1"|"sample2";
type TagMap = Record<Tag, Post[]>;

//課題4
function getPostProperty<T, K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key];
}

