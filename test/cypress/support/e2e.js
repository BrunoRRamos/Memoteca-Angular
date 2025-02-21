/// <reference types="Cypress" />

import 'cypress-network-idle';
import { registerCommand } from 'cypress-wait-for-stable-dom';
import { setupNetworkWait } from "cypress-network-wait";
setupNetworkWait({ timeout: 10000, verbose: true, apiHosts: ["/*"] });
registerCommand({ pollInterval: 500, timeout: 10000 });

import './commands';

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;

Cypress.on('uncaught:exception', (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
