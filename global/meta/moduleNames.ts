// NOTE not including C## modules, command-line, corepack, debugger, Errors, Internationalization, Modules, Policies, Report
export type Module = { name: string; description?: string }

export const modules: Module[] = [
  { name: 'assert', description: 'testing and value comparison utilities' },
  { name: 'async_hooks' },
  { name: 'buffer' },
  { name: 'child_process' },
  { name: 'cluster' },
  { name: 'console' },
  { name: 'crypto' },
  { name: 'diagnostics_channel' },
  { name: 'dns' },
  { name: 'domain' },
  { name: 'events' },
  { name: 'fs' },
  { name: 'HTTP' },
  { name: 'inspector' },
  { name: 'module' },
  { name: 'net' },
  { name: 'os' },
  { name: 'path' },
  { name: 'perf_hooks' },
  { name: 'process' },
  { name: 'punycode' },
  { name: 'querystring' },
  { name: 'node:readline' },
  { name: 'repl' },
  { name: 'stream' },
  { name: 'string_decoder' },
  { name: 'timers' },
  { name: 'tls (& ssl)' },
]
