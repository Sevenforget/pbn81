// API 응답 타입 정의
export interface ApiPostResponse {
  id: number;
  title: string;
  content: string;
  author_name: string;
  post_date: string;
  created_at: string;
  summary: string;
  tags: string;
}

// 기존 프로젝트에서 사용하는 Post 타입 (BlogPost와 호환)
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  tags: string[];
  date: string;
  createdAt?: string;
  excerpt?: string;
  slug?: string;
  readTime?: string;
}

// API 에러 클래스
export class ApiError extends Error {
  constructor(public status: number, message: string, public data?: any) {
    super(message);
    this.name = "ApiError";
  }
}
