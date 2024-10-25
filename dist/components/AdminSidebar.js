"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdminSidebar;
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
function AdminSidebar({ modelNames }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "border-r border-muted/40 bg-muted/40", children: [(0, jsx_runtime_1.jsx)("div", { className: "p-6", children: (0, jsx_runtime_1.jsx)(link_1.default, { href: '/admin', className: "h-16", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-xl font-bold", children: "Admin Panel" }) }) }), (0, jsx_runtime_1.jsx)("nav", { className: "p-4 text-sm font-medium", children: modelNames.map(modelName => ((0, jsx_runtime_1.jsx)(link_1.default, { className: "hover:text-primary hover:bg-muted transition-all text-muted-foreground px-3 py-2 rounded-lg block", href: `/admin/${modelName}`, children: modelName }, modelName))) })] }));
}
