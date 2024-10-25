"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAdapter = void 0;
class PrismaAdapter {
    prisma;
    constructor(prismaClient) {
        this.prisma = prismaClient;
    }
    async create(modelName, data) {
        return this.prisma[modelName].create({ data });
    }
    async read(modelName, id) {
        return this.prisma[modelName.toLowerCase()].findUnique({ where: { id } });
    }
    async update(modelName, id, data) {
        return this.prisma[modelName.toLowerCase()].update({ where: { id }, data });
    }
    async delete(modelName, id) {
        await this.prisma[modelName.toLowerCase()].delete({ where: { id } });
    }
    async list(modelName, options) {
        const { page, pageSize, filters, sort } = options;
        const skip = (page - 1) * pageSize;
        const take = pageSize;
        const where = this.buildFilters(filters);
        const orderBy = sort ? { [sort.field]: sort.order } : undefined;
        const [items, totalCount] = await Promise.all([
            this.prisma[modelName.toLowerCase()].findMany({ skip, take, where, orderBy }),
            this.prisma[modelName.toLowerCase()].count({ where }),
        ]);
        return { items, totalCount };
    }
    buildFilters(filters) {
        if (!filters)
            return {};
        const prismaFilters = {};
        for (const [key, value] of Object.entries(filters)) {
            if (typeof value === 'string') {
                prismaFilters[key] = { contains: value };
            }
            else {
                prismaFilters[key] = value;
            }
        }
        return prismaFilters;
    }
}
exports.PrismaAdapter = PrismaAdapter;
