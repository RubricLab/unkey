import { InferSelectModel } from "drizzle-orm";
import * as schema from "./schema";

export type Key = InferSelectModel<typeof schema.keys>;
export type Api = InferSelectModel<typeof schema.apis>;
export type Workspace = InferSelectModel<typeof schema.workspaces>;
export type KeyAuth = InferSelectModel<typeof schema.keyAuth>;
export type VercelIntegration = InferSelectModel<typeof schema.vercelIntegrations>;
export type VercelBinding = InferSelectModel<typeof schema.vercelBindings>;
export type Permission = InferSelectModel<typeof schema.permissions>;
export type Role = InferSelectModel<typeof schema.roles>;
export type Ratelimit = InferSelectModel<typeof schema.ratelimits>;
export type RatelimitNamespace = InferSelectModel<typeof schema.ratelimitNamespaces>;
