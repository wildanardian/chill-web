export const BadgeType = {
  PREMIUM: 'PREMIUM',
  TOP_10: 'TOP_10',
  NEW_EPISODE: 'NEW_EPISODE',
  EXCLUSIVE: 'EXCLUSIVE',
  COMING_SOON: 'COMING_SOON',
} as const;

export type BadgeType = typeof BadgeType[keyof typeof BadgeType];