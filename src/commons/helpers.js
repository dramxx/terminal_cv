import { availableCommands } from './config';

export const getCommandKey = (value) =>
    Object.keys(availableCommands).find(key => availableCommands[key] === value);

export const sanitizeInput = (input) => input.replace(/\s+/g, '+').toLowerCase();

