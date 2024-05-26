export interface data{
    product_id: string | undefined;
    product_name: string | undefined;
    category_id: string | undefined;
    description: string | undefined;
    made_in: string | undefined;
    color: string | undefined;
    size: number | undefined;
    count: number | undefined;
    cost: number | undefined;
    discount: number | undefined;
    age_min: number | undefined;
    age_max: number | undefined;
    for_gender: string | undefined;
    image_url: string | undefined;
}

export interface getCard{
    key: number | undefined;
    datas: data | undefined;
}

export interface Page{
    page: number | undefined;
    limit: number | undefined;
    name?: string | undefined;
}

export interface ProductId{
    id: string | null;
}

export interface ProductPhoto{
    id: string | null;
}

export interface Request{
    products: data[]
    getProducts: (payload: Page) => Promise<any>;
    getProductbyId: (payload: ProductId) => Promise<any>;
    getProductPhoto: (payload: ProductPhoto) => Promise<any>;
}