import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<{
        id: string;
        sellerId: string | null;
        title: string;
        description: string | null;
        priceCents: number;
        inventory: number;
        media: string[];
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        sellerId: string | null;
        title: string;
        description: string | null;
        priceCents: number;
        inventory: number;
        media: string[];
        createdAt: Date;
    }>;
}
