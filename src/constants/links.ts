export const EXTERNAL_LINKS = {
  BOT_INVITE: import.meta.env.VITE_BOT_INVITE_URL || 'https://discord.com',
  GITHUB_OWNER: import.meta.env.VITE_GITHUB_OWNER_URL || 'https://github.com/Dev-Etto',
  GITHUB_REPO: import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com/Dev-Etto/voice-league',
  BUY_ME_A_COFFEE: import.meta.env.VITE_BUY_ME_A_COFFEE_URL || '#',
} as const;
