export interface IImageAdvertsRequest {
    image_adverts: string;
    description_adverts: string;
    
  }
  
  export interface IImageAdverts {
    id: string;
    image_adverts: string;
    description_adverts: string;
    createdAt_adverts: Date;
    updatedAt_adverts: Date;
    advertsId: string;
  }

  export interface IImageAdvertsCreate {
    image_adverts: string;
    description_adverts: string;
    advertsId: string;
  }