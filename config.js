/**
 * Configuração do Dashboard de Ocorrências
 *
 * Após fazer o deploy do Apps Script, cole a URL aqui:
 */
var CONFIG = {
  // URL do Google Apps Script Web App (após deploy)
  // Exemplo: 'https://script.google.com/macros/s/AKfycbx.../exec'
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyWk9jJiMwxlL0gH1y1URSZOGHA8TvejmrJykcJ1rRh5vO_dw-AsuC79_-a6MrAcLt2/exec',

  // ID da planilha original
  SPREADSHEET_ID: '1-BY4dLkuBpP909kA2BeIWpDi25DTgprbEDx7Wz8QI-Q',

  // Prefixos do localStorage (para cache local)
  LS_PREFIX: 'zukkin_',

  // Tempo de cache em minutos (dados do Sheets ficam em cache local por esse tempo)
  CACHE_MINUTES: 5
};
