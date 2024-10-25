import { SerializedAdapter } from "../types";
interface AdapterContextType {
    adapter: SerializedAdapter;
}
interface AdapterProviderProps {
    children: React.ReactNode;
    adapter: SerializedAdapter;
}
export declare function AdapterProvider({ children, adapter }: AdapterProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useAdapter(): AdapterContextType;
export {};
//# sourceMappingURL=adapterContext.d.ts.map