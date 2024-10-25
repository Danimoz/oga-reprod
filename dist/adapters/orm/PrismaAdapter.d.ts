import { ListOptions, ORMAdapter } from "../../types";
export declare class PrismaAdapter implements ORMAdapter {
    private prisma;
    constructor(prismaClient: any);
    create(modelName: string, data: any): Promise<any>;
    read(modelName: string, id: string | number): Promise<any>;
    update(modelName: string, id: string | number, data: any): Promise<any>;
    delete(modelName: string, id: string | number): Promise<void>;
    list(modelName: string, options: ListOptions): Promise<{
        items: any;
        totalCount: any;
    }>;
    private buildFilters;
}
//# sourceMappingURL=PrismaAdapter.d.ts.map