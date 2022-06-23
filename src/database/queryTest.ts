import { pool } from '.';
import { PoolClient, QueryResult } from 'pg';
import { performance } from 'perf_hooks';

const queryTest = async (query: string, values: unknown[]) => {
  const client: PoolClient = await pool.connect()

  try {
    const startExecutionTime = performance.now();
    const result: QueryResult = await client.query(query, values);
    const endExecutionTime = performance.now();

    console.log(`Took ${endExecutionTime - startExecutionTime}ms to execute the query "${query}" and got the result: ${result}`)
  } catch (e) {
    throw new Error(`Error while executing the query: ${query}`);
  } finally {
    client.release();
  }
};

export { queryTest };
