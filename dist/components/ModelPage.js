"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ModelPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const createForm_1 = __importDefault(require("./createForm"));
const button_1 = require("./ui/button");
const dialog_1 = require("./ui/dialog");
function ModelPage({ modelMetadata }) {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: modelMetadata.name }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-end items-center", children: (0, jsx_runtime_1.jsxs)(dialog_1.Dialog, { children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { children: ["Add ", modelMetadata.name] }) }), (0, jsx_runtime_1.jsx)(dialog_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(createForm_1.default, { modelMetadata: modelMetadata }) })] }) })] }));
}
