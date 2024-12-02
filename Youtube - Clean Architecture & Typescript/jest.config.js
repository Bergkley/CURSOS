module.exports = {
    roots: ['<rootDir>/src'], // Define o diretório raiz para os testes
    testEnvironment: 'node', // Define o ambiente de execução (Node.js neste caso)
    transform: {
      '^.+\\.ts$': 'ts-jest', // Usa 'ts-jest' para transformar arquivos TypeScript
    },
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1', // Mapeia atalhos para caminhos relativos no projeto
    },
  };
  