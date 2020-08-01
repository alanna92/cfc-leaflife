export default interface Post {
  id: number;
  name: string;
  profilePhoto?: string;
  postLocation: string;
  plantSpecies: string;
  comment: string;
  postImage?: string;
  likeCount: number;
  commentsCount: number;
  postTime: string;
}
