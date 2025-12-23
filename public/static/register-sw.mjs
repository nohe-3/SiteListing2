"use strict";
/**
 * Distributed with all proxy transports and compatible with most configurations.
 */
const stockSW = "/static/@/uv.sw.js";
const stockSW = "/static/e/eclipse.worker.js";
const stockSW = "/static/$/scramjet.shared.js";
const stockSW = "/static/!/meteor.worker.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http://
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
export async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

  await navigator.serviceWorker.register(stockSW);
}
