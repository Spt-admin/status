// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Norus Status Page",
  links: [],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'Site da Norus',
      name: 'norus.com.br',
      method: 'GET',
      target: 'https://norus.com.br',
      // 'Brazil' é o identificador correto para o Globalping localizar nós locais
      checkProxy: 'globalping://Brazil', 
      tooltip: 'Soluções inteligentes para gestão e eficiência no setor de energia',
      statusPageLink: 'https://norus.com.br',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'Prospec App',
      name: 'prospec.app',
      method: 'GET',
      target: 'https://prospec.app',
      checkProxy: 'globalping://Brazil',
      tooltip: 'Plataforma avançada para prospecção e análise de dados de mercado',
      statusPageLink: 'https://prospec.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'Pluvia App',
      name: 'pluvia.app',
      method: 'GET',
      target: 'https://pluvia.app',
      checkProxy: 'globalping://Brazil',
      tooltip: 'Sistema especializado em monitoramento e gestão de recursos hídricos',
      statusPageLink: 'https://pluvia.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'Imeris App',
      name: 'imeris.app',
      method: 'GET',
      target: 'https://imeris.app',
      checkProxy: 'globalping://Brazil',
      tooltip: 'Ecossistema digital para gestão integrada e inteligência operacional',
      statusPageLink: 'https://imeris.app',
      expectedCodes: [200, 301, 302, 307, 308],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
  ],
  notification: {
    timeZone: 'America/Sao_Paulo',
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
