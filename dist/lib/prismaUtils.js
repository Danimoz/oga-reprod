"use strict";
// src/utils/prismaUtils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaModelNames = getPrismaModelNames;
exports.getPrismaModelMetaDatas = getPrismaModelMetaDatas;
exports.generateAdminConfigFromPrisma = generateAdminConfigFromPrisma;
exports.mapPrismaTypeToFieldType = mapPrismaTypeToFieldType;
exports.getEditableFields = getEditableFields;
exports.prismaCreate = prismaCreate;
const client_1 = require("@prisma/client");
function getPrismaModelNames() {
    return client_1.Prisma.dmmf.datamodel.models.map(model => model.name);
}
function getPrismaModelMetaDatas() {
    return client_1.Prisma.dmmf.datamodel.models.reduce((acc, model) => {
        acc[model.name] = {
            name: model.name,
            fields: model.fields.map(field => ({
                name: field.name,
                type: field.type,
                isId: field.isId,
                kind: field.kind,
                hasDefaultValue: field.hasDefaultValue,
                required: field.isRequired,
                isRelation: !!field.relationName,
            }))
        };
        return acc;
    }, {});
}
function generateAdminConfigFromPrisma(options = {}) {
    const modelNames = getPrismaModelNames();
    const modelMetaDatas = getPrismaModelMetaDatas();
    const config = {};
    for (const modelName of modelNames) {
        // Check if the model should be included
        if (options.include && !options.include.includes(modelName)) {
            continue;
        }
        // Check if the model should be excluded
        if (options.exclude && options.exclude.includes(modelName)) {
            continue;
        }
        // Use provided config or default
        config[modelName] = {
            visible: true,
            label: modelName,
            meta: modelMetaDatas[modelName],
            ...(options.modelConfigs?.[modelName] || {})
        };
    }
    return { models: config };
}
function mapPrismaTypeToFieldType(prismaType, fieldName) {
    const typeMap = {
        'String': 'string',
        'Boolean': 'checkbox',
        'Int': 'number',
        'Float': 'number',
        'DateTime': 'date',
        // Add more mappings as needed
    };
    if (fieldName.includes('password'))
        return 'password';
    if (fieldName.includes('email'))
        return 'email';
    return typeMap[prismaType] || 'string';
}
function getEditableFields(fields) {
    return fields.filter(field => !field.isId && !field.hasDefaultValue && !field.isRelation);
}
async function prismaCreate(prisma, modelName, data) {
    return await prisma[modelName].create({ data });
}
