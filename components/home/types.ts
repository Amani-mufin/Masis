// Common types used across components
export interface AICardProps {
  title: string;
  description: string;
  image: string;
  altText: string;
  badgeText: string;
  rating?: string;
  hasComments?: boolean;
}

export interface NavItemProps {
  icon: string;
  label: string;
}
