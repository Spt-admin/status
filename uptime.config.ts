// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Norus Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [],
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
      checkProxy: 'worker://sams', // South America
      tooltip: 'Soluções inteligentes para gestão e eficiência no setor de energia',
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
      checkProxy: 'worker://sams', // South America
      tooltip: 'Plataforma avançada para prospecção e análise de dados de mercado',
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
      checkProxy: 'worker://sams', // South America
      tooltip: 'Sistema especializado em monitoramento e gestão de recursos hídricos',
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
      checkProxy: 'worker://sams', // South America
      tooltip: 'Ecossistema digital para gestão integrada e inteligência operacional',
      statusPageLink: 'https://imeris.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  // [Optional] Notification settings
  notification: {
    timeZone: 'America/Sao_Paulo',
    gracePeriod: 5,
  },
}

// Manutenções comentadas para não exibirem alertas
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
