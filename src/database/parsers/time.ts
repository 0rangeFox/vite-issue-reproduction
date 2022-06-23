import { types } from 'pg';

// Convert the time in UNIX Seconds
types.setTypeParser(types.builtins.TIMESTAMPTZ, (value): number => Math.floor(Date.parse(value) / 1000));
