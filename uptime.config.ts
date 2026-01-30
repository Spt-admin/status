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
    // --- Prospec (Monitoramento detalhado) ---
    {
      id: 'Prospec App Health',
      name: 'App Prospec (Pre-prod)',
      method: 'GET',
      target: 'https://preprod.prospec.suite.energy/health',
      tooltip: 'Verificação de integridade do ambiente de pré-produção Prospec',
      statusPageLink: 'https://preprod.prospec.suite.energy/health',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'Prospec API Health',
      name: 'API Programática (Pre-prod)',
      method: 'GET',
      target: 'https://preprod.api.prospec.suite.energy/health',
      tooltip: 'Monitoramento da API programática de pré-produção',
      statusPageLink: 'https://preprod.api.prospec.suite.energy/health',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    // --- Suite Energy / Projeções ---
    {
      id: 'Suite Projeções Login',
      name: 'Norus Projeções Login',
      method: 'GET',
      target: 'https://norus.projecoes-preprod.suite.energy/login',
      tooltip: 'Interface de acesso ao sistema de projeções Suite Energy',
      statusPageLink: 'https://norus.projecoes-preprod.suite.energy/login',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    // --- Pluvia ---
    {
      id: 'Pluvia App',
      name: 'pluvia.app',
      method: 'GET',
      target: 'https://pluvia.app',
      tooltip: 'Sistema especializado em monitoramento e gestão de recursos hídricos',
      statusPageLink: 'https://pluvia.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    // --- Imeris ---
    {
      id: 'Imeris App',
      name: 'imeris.app',
      method: 'GET',
      target: 'https://imeris.app',
      tooltip: 'Ecossistema digital para gestão integrada e inteligência operacional',
      statusPageLink: 'https://imeris.app',
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
