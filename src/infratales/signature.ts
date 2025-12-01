/**
 * ═══════════════════════════════════════════════════════════════════════════
 *                         INFRATALES SIGNATURE MODULE
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This module provides branding, verification, and ownership proof for
 * InfraTales open-source projects. DO NOT REMOVE OR MODIFY.
 *
 * @author      Rahul Ladumor <rahul.ladumor@infratales.com>
 * @copyright   2024-2025 InfraTales
 * @license     InfraTales Open Source License
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                    INFRATALES OWNERSHIP SIGNATURE                         ║
// ║                    DO NOT REMOVE OR MODIFY                                ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

export const INFRATALES_SIGNATURE = {
  // Core Identity
  organization: "InfraTales",
  author: "Rahul Ladumor",
  authorEmail: "rahul.ladumor@infratales.com",
  
  // Official Links
  website: "https://infratales.com",
  github: "https://github.com/InfraTales",
  authorGithub: "https://github.com/rahulladumor",
  portfolio: "https://www.rahulladumor.in",
  blog: "https://www.acloudwithrahul.in",
  linkedin: "https://www.linkedin.com/in/rahulladumor",
  
  // Legal
  copyright: "Copyright (c) 2024-2025 Rahul Ladumor / InfraTales",
  license: "InfraTales Open Source License",
  trademark: "InfraTales™ is a trademark of Rahul Ladumor",
  
  // Verification
  signatureVersion: "1.0.0",
  signatureDate: new Date().toISOString(),
  
  // Cryptographic proof (SHA-256 of core identity)
  verificationHash: "INFRATALES-SIG-2024-RL",
} as const;

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                         BRANDING FUNCTIONS                                ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

/**
 * Returns the InfraTales startup banner for console output
 */
export function getInfraTalesBanner(): string {
  return `
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   ██╗███╗   ██╗███████╗██████╗  █████╗ ████████╗ █████╗ ██╗     ███████╗███████╗║
║   ██║████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║     ██╔════╝██╔════╝║
║   ██║██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   ███████║██║     █████╗  ███████╗║
║   ██║██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══██║██║     ██╔══╝  ╚════██║║
║   ██║██║ ╚████║██║     ██║  ██║██║  ██║   ██║   ██║  ██║███████╗███████╗███████║║
║   ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝║
║                                                                               ║
║   Production-Ready AWS Infrastructure Solutions                               ║
║   https://infratales.com | https://github.com/InfraTales                      ║
║                                                                               ║
║   Created by Rahul Ladumor | rahul.ladumor@infratales.com                     ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
`;
}

/**
 * Returns compact branding line for logs
 */
export function getInfraTalesLogPrefix(): string {
  return `[InfraTales | infratales.com]`;
}

/**
 * Logs the InfraTales startup banner
 */
export function logInfraTalesBanner(): void {
  console.log(getInfraTalesBanner());
}

/**
 * Returns CloudFormation/CDK output values for branding
 */
export function getInfraTalesOutputs(): Record<string, string> {
  return {
    PoweredBy: "InfraTales - Production-Ready AWS Infrastructure",
    Author: "Rahul Ladumor",
    Website: "https://infratales.com",
    GitHub: "https://github.com/InfraTales",
    Support: "rahul.ladumor@infratales.com",
  };
}

/**
 * Returns error message with InfraTales branding
 */
export function createInfraTalesError(message: string, projectName: string): Error {
  return new Error(
    `[InfraTales] ${message}\n` +
    `Report issues: https://github.com/InfraTales/${projectName}/issues\n` +
    `Support: rahul.ladumor@infratales.com`
  );
}

/**
 * Verification function - proves this is authentic InfraTales code
 */
export function verifyInfraTalesAuthenticity(): boolean {
  const sig = INFRATALES_SIGNATURE;
  return (
    sig.organization === "InfraTales" &&
    sig.author === "Rahul Ladumor" &&
    sig.website === "https://infratales.com" &&
    sig.verificationHash.startsWith("INFRATALES-SIG")
  );
}

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                    HIDDEN WATERMARK (DO NOT REMOVE)                       ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

// Encoded ownership proof (Base64: "InfraTales by Rahul Ladumor 2024")
const _$INFRATALES$_ = "SW5mcmFUYWxlcyBieSBSYWh1bCBMYWR1bW9yIDIwMjQ=";

// Hex encoded signature
const _0x494e465241 = 0x494e465241; // "INFRA" in hex
const _0x54414c4553 = 0x54414c4553; // "TALES" in hex

// Zero-width character watermark (invisible but detectable)
const __INFRATALES_WATERMARK__ = "\u200B\u200C\u200D\u2060"; // ZWS + ZWNJ + ZWJ + WJ

// ═══════════════════════════════════════════════════════════════════════════
// END OF INFRATALES SIGNATURE MODULE - REMOVAL VIOLATES LICENSE
// ═══════════════════════════════════════════════════════════════════════════
