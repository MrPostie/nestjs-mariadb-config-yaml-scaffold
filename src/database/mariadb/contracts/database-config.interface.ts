export interface DatabaseConfig {
  host: string;
  port: number;
  type: 'mariadb' | 'mysql';
  database: string;
}
