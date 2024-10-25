"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPanel = AdminPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const AdminLayout_1 = __importDefault(require("./AdminLayout"));
const ModelPage_1 = __importDefault(require("./ModelPage"));
const card_1 = require("./ui/card");
function AdminPanel({ ormAdapter, config, params, searchParams }) {
    const modelNames = Object.keys(config.models);
    function getModelMetadata(modelName) {
        const metaData = config.models[modelName];
        return { name: modelName, fields: metaData?.meta?.fields || [] };
    }
    return ((0, jsx_runtime_1.jsx)(AdminLayout_1.default, { modelNames: modelNames, children: (0, jsx_runtime_1.jsx)("div", { className: "p-6", children: params?.admin ? ((0, jsx_runtime_1.jsx)(ModelPage_1.default, { modelMetadata: getModelMetadata(params.admin[0]) })) : ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: modelNames.map((modelName) => ((0, jsx_runtime_1.jsx)(link_1.default, { href: `/admin/${modelName}`, children: (0, jsx_runtime_1.jsx)(card_1.Card, { className: "cursor-pointer hover:shadow-lg", children: (0, jsx_runtime_1.jsx)(card_1.CardHeader, { children: config.models[modelName]?.label || modelName }) }) }, modelName))) })) }) }));
}
