/*
 * Service worker entry point for Manifest V3.
 * Replaces the MV2 background.scripts array by using importScripts().
 */
importScripts(
    '../polyfills/browser-polyfill.min.js',
    '../common/colors.js',
    '../common/commands.js',
    '../common/extension.js',
    '../common/options.js',
    'background.js'
);
