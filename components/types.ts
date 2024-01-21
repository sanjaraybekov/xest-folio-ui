export type BlogType = {
  image: string;
  type: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

export type FeatureType = {
  image: string;
  title: string;
  description: string;
};

export type Count = {
  count: number;
  title: string;
};

 export type ProjectType = {
    image: string;
    name?: string;
    type?: string;
  };

  export type TerterType = {
    image?: string;
    comment: string;
    fullName: string;
    rate: number;
  };