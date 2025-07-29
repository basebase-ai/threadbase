/**
 * Application Configuration
 *
 * Centralized configuration for app metadata, branding, and default settings.
 * Update these values to customize your BaseBase application.
 */

export const appConfig = {
  /** Application name displayed throughout the UI */
  name: "Welcome to Basebase!",

  /** Short description for metadata and about sections */
  description: "Basebase NextJS starter project.",

  /** Default project ID for authentication (can be overridden by users) */
  projectId: "test_project",

  /** GitHub URL for the project */
  githubUrl: "https://github.com/basebase-ai/nextjs-starter",

  /** Production URL for the project */
  productionUrl: "https://nextjs-starter.basebase.ai",
} as const;

/** Type-safe access to configuration values */
export type AppConfig = typeof appConfig;
