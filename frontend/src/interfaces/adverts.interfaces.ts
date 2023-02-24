export interface iAdvertProduct {
  title_adverts: string;
  description_adverts: string;
  year_adverts: string;
  kilometers_adverts: string;
  price_adverts: number;
}

export interface iAdvertRequest extends iAdvertProduct {
  type_adverts: "sell" | "auction";
  type_veicule: "car" | "motorcycle";
}

export interface iAdvertUpdate {
  title_adverts?: string;
  year_adverts?: string;
  type_adverts?: "sell" | "auction";
  type_veicule?: "car" | "motorcycle";
  kilometers_adverts?: string;
  description_adverts?: string;
  price_adverts: number;
}

export interface iImageAdvertRequest {
  image_adverts: string;
  description_image: string;
  advertsId: string;
}

export interface iAdvert {
  id: string;
  title_adverts: string;
  year_adverts: string;
  type_adverts: "sell" | "auction";
  type_veicule: "car" | "motorcycle";
  kilometers_adverts: string;
  description_adverts: string;
  price_adverts: number;
  isAvailable: boolean;
  createdAt_adverts: Date;
  updatedAt_adverts: Date;
}
