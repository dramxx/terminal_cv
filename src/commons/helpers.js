import { availableCommands } from './config';

export const getCommandKey = (value) =>
    Object.keys(availableCommands).find(key => availableCommands[key] === value);

//TODO: MINOR: regex to conditionally ( cat, --d ) replace white space for +
export const sanitizeInput = (input) => input.replace(/\s+/g, '+').toLowerCase();

