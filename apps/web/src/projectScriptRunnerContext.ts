import { createContext, use, type RefObject } from "react";
import type { ProjectScript } from "./types";

export type ProjectScriptRunnerRef = RefObject<((script: ProjectScript) => Promise<void>) | null>;

export const ProjectScriptRunnerContext = createContext<ProjectScriptRunnerRef | null>(null);

export function useProjectScriptRunnerContext(): ProjectScriptRunnerRef | null {
  return use(ProjectScriptRunnerContext);
}
