/* export interface Phone {
  id: number;
  name: string;
  year: number;
  count: number;
  developer: Developer;
  color: Color;
  size: Size;
  popular: Pop;
  picture: string;
}

export enum Color {
  White = 'White',
  Blue = 'Blue',
  Black = 'Black',
}

export enum Size {
  Small = 'Small',
  Middle = 'Middle',
  Large = 'Large',
}

export enum Developer {
  ASUS = 'ASUS',
  HUAWEI = 'HUAWEI',
  APPLE = 'APPLE',
  SAMSUNG = 'SAMSUNG',
}

export enum Pop {
  yes = 'Yes',
  no = 'No',
}

export interface IPhotoApiAnswer {
  id: string;
  title?: string;
  description?: { _content?: string };
  ownername?: string;
  datetaken?: string;
  dateupload?: string;
  lastupdate?: string;
  views?: string;
  tags?: string;
  latitude?: string;
  longitude?: string;
  url?: string;
  url_sq?: string;
  url_t?: string;
  url_s?: string;
  url_q?: string;
  url_m?: string;
  url_n?: string;
  url_z?: string;
  url_c?: string;
  url_l?: string;
  url_o?: string;
}

export interface IPhotosData {
  textError?: string;
  data: IPhotoApiAnswer[];
  totalPages: string;
}

export interface IFormData {
  name: string;
  count: string;
  year: string;
  developer: string;
  color: string;
  size: string;
  picture: FileList;
  popular: boolean;
}

export type NameFields =
  | 'name'
  | 'count'
  | 'year'
  | 'developer'
  | 'color'
  | 'size'
  | 'picture'
  | 'popular';

export type MainType = {
  search: string;
  sort: string;
  cardsPerPage: string;
  currentPage: string;
  totalPages: string;
  cards: IPhotoApiAnswer[];
};

export interface MainState extends MainType {
  isLoading: boolean;
  error: string;
}

export type SetSearchAction = {
  search: string;
  currentPage: string;
};

export type SetPerPageAction = {
  cardsPerPage: string;
  currentPage: string;
};

export type FormType = {
  name: string;
  year: number;
  count: number;
  developer: Developer;
  color: Color;
  size: Size;
  popular: Pop;
  picture: string;
  cards: Phone[];
};

export type InitialStateType = {
  main: MainType;
  form: FormType;
};

type MainTypeUnd = {
  search?: string;
  sort?: string;
  cardsPerPage?: string;
  currentPage?: string;
  totalPages?: string;
  cards?: IPhotoApiAnswer[];
};

export type MainActionType = {
  type: string;
  payload?: IPhotoApiAnswer | MainTypeUnd;
};

export type FormActionType = {
  type: string;
  payload?: Phone;
};

export type ActionType = MainActionType | FormActionType;

export type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
};

export interface FormState {
  cards: Phone[];
}
 */