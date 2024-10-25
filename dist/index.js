"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterProvider = exports.getAdapter = exports.generateAdminConfigFromPrisma = exports.PrismaAdapter = exports.AdminPanel = void 0;
const PrismaAdapter_1 = require("./adapters/orm/PrismaAdapter");
Object.defineProperty(exports, "PrismaAdapter", { enumerable: true, get: function () { return PrismaAdapter_1.PrismaAdapter; } });
const prismaUtils_1 = require("./lib/prismaUtils");
Object.defineProperty(exports, "generateAdminConfigFromPrisma", { enumerable: true, get: function () { return prismaUtils_1.generateAdminConfigFromPrisma; } });
const crudActions_1 = require("./actions/crudActions");
Object.defineProperty(exports, "getAdapter", { enumerable: true, get: function () { return crudActions_1.getAdapter; } });
const adapterContext_1 = require("./context/adapterContext");
Object.defineProperty(exports, "AdapterProvider", { enumerable: true, get: function () { return adapterContext_1.AdapterProvider; } });
// Components
var AdminPanel_1 = require("./components/AdminPanel");
Object.defineProperty(exports, "AdminPanel", { enumerable: true, get: function () { return AdminPanel_1.AdminPanel; } });
