import { findWorkspacePackages } from '@pnpm/find-workspace-packages';
import { projRoot } from '../configs';

export const getWorkspacePackages = () => findWorkspacePackages(projRoot);
