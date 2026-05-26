#!/usr/bin/env node
/**
 * Startup wrapper for Expo on Replit.
 *
 * Sets the correct Replit environment variables for the Expo dev server
 * and starts Metro bundler. Uses --localhost to bind to 127.0.0.1.
 */
const { spawn } = require('child_process');

const PORT = parseInt(process.env.PORT || '21133', 10);

console.log(`[start.js] Starting Expo Metro on port ${PORT}`);

const env = {
  ...process.env,
  NODE_OPTIONS: '--dns-result-order=ipv4first',
  EXPO_PACKAGER_PROXY_URL: `https://${process.env.REPLIT_EXPO_DEV_DOMAIN || ''}`,
  EXPO_PUBLIC_DOMAIN: process.env.REPLIT_DEV_DOMAIN || '',
  EXPO_PUBLIC_REPL_ID: process.env.REPL_ID || '',
  REACT_NATIVE_PACKAGER_HOSTNAME: process.env.REPLIT_DEV_DOMAIN || '',
};

const child = spawn(
  'pnpm',
  ['exec', 'expo', 'start', '--localhost', '--port', String(PORT)],
  { env, stdio: 'inherit' }
);

child.on('exit', (code) => process.exit(code ?? 0));
