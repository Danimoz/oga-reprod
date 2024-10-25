import { PrismaAdapter } from "./adapters/orm/PrismaAdapter";
import { generateAdminConfigFromPrisma } from "./lib/prismaUtils";
import { getAdapter } from "./actions/crudActions";
import { AdapterProvider } from "./context/adapterContext";

// Components
export { AdminPanel } from "./components/AdminPanel";

// Adapters and Utilities
export { 
  PrismaAdapter,
  generateAdminConfigFromPrisma,
  getAdapter,
  AdapterProvider
};
