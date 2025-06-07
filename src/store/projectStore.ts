import { create } from 'zustand';

interface ProjectInfo {
  projectType: string;
  timeline: string;
  budget: string;
  teamSize: string;
  keyFeatures: string[];
  technicalRequirements: string[];
  targetAudience?: string;
  existingSystems?: string;
  successMetrics?: string;
  securityRequirements?: string;
}

interface ProjectStore {
  projectInfo: Partial<ProjectInfo>;
  setProjectInfo: (info: Partial<ProjectInfo>) => void;
  updateProjectInfo: (key: keyof ProjectInfo, value: any) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projectInfo: {},
  setProjectInfo: (info) => set({ projectInfo: info }),
  updateProjectInfo: (key, value) =>
    set((state) => ({
      projectInfo: { ...state.projectInfo, [key]: value },
    })),
})); 