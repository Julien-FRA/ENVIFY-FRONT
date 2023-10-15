import { Configs } from '@/utils/types/config.type';
import { create } from 'zustand';

type ConfigsState = {
  configs: Configs;
  setConfigs: (configs: Configs) => void;
};

export const useConfigsStore = create<ConfigsState>((set) => ({
  configs: [],
  setConfigs: (configs) => set({ configs }),
}));
