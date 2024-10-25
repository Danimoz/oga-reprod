import { AdminConfig, ORMAdapter } from "../types";
interface AdminPanelProps {
    ormAdapter: ORMAdapter;
    config: AdminConfig;
    params?: {
        admin?: string[];
    };
    searchParams?: {
        [key: string]: string | string[];
    };
}
export declare function AdminPanel({ ormAdapter, config, params, searchParams }: AdminPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AdminPanel.d.ts.map