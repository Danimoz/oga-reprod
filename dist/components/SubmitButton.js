'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SubmitButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = require("react-dom");
const button_1 = require("../components/ui/button");
const lucide_react_1 = require("lucide-react");
function SubmitButton({ buttonText }) {
    const { pending } = (0, react_dom_1.useFormStatus)();
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { disabled: pending, type: 'submit', children: pending ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.LoaderIcon, { className: 'animate-spin mr-4 h-4 w-4' }), buttonText] })) : buttonText }));
}
