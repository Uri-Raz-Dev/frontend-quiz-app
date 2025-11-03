import { create } from 'zustand'

interface QuizState {
  isDark: boolean
  darkMode: () => void
}

export const useQuiz = create<QuizState>((set) => ({
  isDark: false,
  darkMode: () => set((state) => ({ isDark: !state.isDark })),
}))
