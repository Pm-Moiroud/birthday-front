export interface TimeStamps {
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export type JWTresponse = {
  userId: string;
  jti: string;
  iat: number;
  exp: number;
};

export type RootSuccessResponse = {
  message: string;
  status: number;
};

export interface Status extends TimeStamps {
  id: string;
  label: string;
  slug: string;
  color: string;
}
