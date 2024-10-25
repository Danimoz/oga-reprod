'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateForm;
const jsx_runtime_1 = require("react/jsx-runtime");
const sonner_1 = require("sonner");
const prismaUtils_1 = require("../lib/prismaUtils");
const SubmitButton_1 = __importDefault(require("./SubmitButton"));
const input_1 = require("./ui/input");
const label_1 = require("./ui/label");
const crudActions_1 = require("../actions/crudActions");
function CreateForm({ modelMetadata }) {
    //const { adapter } = useAdapter();
    async function handleCreate(formData) {
        const data = Object.fromEntries(formData.entries());
        await (0, crudActions_1.createItem)(modelMetadata.name, data);
        sonner_1.toast.success(`Created ${modelMetadata.name}`);
    }
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("form", { className: "space-y-4", action: handleCreate, children: [(0, prismaUtils_1.getEditableFields)(modelMetadata.fields).map((field) => ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-1", children: [(0, jsx_runtime_1.jsxs)(label_1.Label, { htmlFor: field.name, className: "capitalize inline-flex gap-x-1", children: [field.name, field.required && (0, jsx_runtime_1.jsx)("span", { className: "text-red-500", children: "*" })] }), (0, jsx_runtime_1.jsx)(input_1.Input, { type: (0, prismaUtils_1.mapPrismaTypeToFieldType)(field.type, field.name), id: field.name, name: field.name, required: field.required })] }, field.name))), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-end", children: (0, jsx_runtime_1.jsx)(SubmitButton_1.default, { buttonText: `Create ${modelMetadata.name}` }) })] }) }));
}
