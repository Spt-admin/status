import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Norus Status Page",
  links: [],
}

const workerConfig: WorkerConfig = {
  monitors: [
    // --- Norus ---
    {
      id: 'Site da Norus',
      name: 'norus.com.br',
      method: 'GET',
      target: 'https://norus.com.br',
      tooltip: 'Soluções inteligentes para gestão e eficiência no setor de energia',
      statusPageLink: 'https://norus.com.br',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
  ],
  notification: {
    webhook: {
      url: 'SUA_URL_DO_WEBHOOK_DO_TEAMS_AQUI',
      method: 'POST',
      payloadType: 'json',
      payload: {
        text: 'Aviso de Status: $MSG',
      },
      timeout: 10000,
    },
    timeZone: 'America/Sao_Paulo',
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
