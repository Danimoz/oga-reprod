import { GenerateAdminConfigOptions, ModelMetadata } from "../types";
export declare function getPrismaModelNames(): string[];
export declare function getPrismaModelMetaDatas(): Record<string, any>;
export declare function generateAdminConfigFromPrisma(options?: GenerateAdminConfigOptions): {
    models: {
        [key: string]: {
            visible: boolean;
            label?: string;
            icon?: React.ReactNode;
            customComponents?: {
                list?: React.ComponentType;
                form?: React.ComponentType;
            };
            meta?: {
                fields?: import("../types").FieldMetadata[];
            };
        };
    };
};
export declare function mapPrismaTypeToFieldType(prismaType: string, fieldName: string): string;
export declare function getEditableFields(fields: ModelMetadata['fields']): import("../types").FieldMetadata[];
export declare function prismaCreate(prisma: any, modelName: string, data: any): Promise<any>;
//# sourceMappingURL=prismaUtils.d.ts.map