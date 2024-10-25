'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterProvider = AdapterProvider;
exports.useAdapter = useAdapter;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdapterContext = (0, react_1.createContext)(null);
function AdapterProvider({ children, adapter }) {
    return ((0, jsx_runtime_1.jsx)(AdapterContext.Provider, { value: { adapter }, children: children }));
}
function useAdapter() {
    const context = (0, react_1.useContext)(AdapterContext);
    if (!context)
        throw new Error('useAdapter must be used within an Adapter Provider');
    return context;
}
