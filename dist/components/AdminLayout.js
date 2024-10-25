'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdminLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const sonner_1 = require("sonner");
const AdminSidebar_1 = __importDefault(require("./AdminSidebar"));
function AdminLayout({ children, modelNames }) {
    // const serializedAdapter = {
    //   create: createItem,
    // }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(sonner_1.Toaster, { position: "top-right", richColors: true, closeButton: true }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-[280px_1fr] min-h-screen", children: [(0, jsx_runtime_1.jsx)(AdminSidebar_1.default, { modelNames: modelNames }), children] })] }));
}
