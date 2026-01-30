// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Norus Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    //{ link: 'https://github.com/lyc8503', label: 'GitHub' },
    //{ link: 'https://blog.lyc8503.net/', label: 'Blog' },
    //{ link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // --- Norus ---
    {
      id: 'Site da Norus',
      name: 'norus.com.br',
      method: 'GET',
      target: 'https://norus.com.br',
      tooltip: 'Active',
      statusPageLink: 'https://norus.com.br',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // --- Prospec ---
    {
      id: 'Prospec App',
      name: 'prospec.app',
      method: 'GET',
      target: 'https://prospec.app',
      tooltip: 'Active • Pro • ~44.69k',
      statusPageLink: 'https://prospec.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // --- Pluvia ---
    {
      id: 'Pluvia App',
      name: 'pluvia.app',
      method: 'GET',
      target: 'https://pluvia.app',
      tooltip: 'Active • Pro • ~6.3k',
      statusPageLink: 'https://pluvia.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // --- Imeris ---
    {
      id: 'Imeris App',
      name: 'imeris.app',
      method: 'GET',
      target: 'https://imeris.app',
      tooltip: 'Active • Pro • ~1.45k',
      statusPageLink: 'https://imeris.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  // [Optional] Notification settings
}

// Manutenções comentadas para não exibirem alertas
const maintenances: MaintenanceConfig[] = [
  /*
  {
    monitors: ['norus_energy'],
    title: 'Test Maintenance',
    body: 'This is a test maintenance, server software upgrade',
    start: '2020-01-01T00:00:00+08:00',
    end: '2050-01-01T00:00:00+08:00',
    color: 'blue',
  },
  */
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
