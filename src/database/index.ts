import { Pool } from 'pg';
import { clientConfig } from '../config';
import './parsers/time';
import { queryTest } from './queryTest';

const pool: Pool = new Pool({ ...clientConfig });
let serverReady: boolean = false;

setTimeout(() => pool
  .query('SELECT NOW();')
  .then(() => console.log(`Database connected!`))
  .then(() => queryTest('SELECT NOW();', []))
  .catch((e: Error) => console.error(`Error on connecting the database!\n${e.message}`))
);

export { pool, serverReady };
