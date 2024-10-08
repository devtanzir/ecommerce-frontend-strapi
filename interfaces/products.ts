import { ColorKey } from "./colors";

export interface Product {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      title: string;
      slug: string;
      description: string;
      category: string;
      size: string;
      color: ColorKey;
      price: number;
      availableQty: number;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
              small: ImageFormat;
              thumbnail: ImageFormat;
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: string | null;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
      categories?: {
        data: ProductCategory[];
      };
      brands?: {
        data: ProductBrand[];
      };
    };
  }

  interface ProductCategory {
    id: number;
    attributes: {
      title: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }
  interface ProductBrand {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }
  
  
  export interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
  }
  