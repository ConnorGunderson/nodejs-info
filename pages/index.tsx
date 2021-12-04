import Head from 'next/head'
import { AnchorButton, Container, Input } from '@components/base'
import styles from '@styles/index.module.css'
import { Card } from '@components/base/Card/Card'
import { useRouter } from 'next/dist/client/router'
import { FaNodeJs } from 'react-icons/fa'
export default function Home() {
  const router = useRouter()

  return (
    <main className="flex-1 flex flex-col">
      <nav className={styles['landing-navbar']}>
        <header className={styles['landing-header']}>
          <h1>N</h1>
          <span className="animate-wiggle ">
            <FaNodeJs className={styles['landing-header-logo']} />
          </span>
          <h1>dejs.info</h1>
        </header>
        <aside className={styles['landing-aside']}>
          Modules & Learning Material
        </aside>
        <Input id="landing-input">Search Directory</Input>
      </nav>
      <Container
        classNames={{
          container:
            'flex-1 grid lg:grid-cols-6 md:grid-cols-2 gap-3 justify-items-center ',
        }}
      >
        {modules
          .map((module) => ({
            ...module,
            description: module.description ? module.description : 'WIP',
          }))
          .map(({ name, description }) => {
            return (
              <Card
                onClick={() => router.push('/modules/' + name)}
                className="cursor-pointer m-auto w-full h-full opacity-80 hover:opacity-100 bg-nodeLight-1 hover:bg-nodeLight-2 transform duration-300 hover:ring-2 hover:ring-nodeDark-6 "
              >
                <Card.Header className="flex justify-center font-bold">
                  {name}
                </Card.Header>
                <Card.Body className="flex-1 items-center justify-center">
                  {description}
                </Card.Body>
              </Card>
            )
          })}
      </Container>
    </main>
  )
}

// NOTE not including C## modules, command-line, corepack, debugger, Errors, Internationalization, Modules, Policies, Report
type Module = { name: string; description?: string }

const modules: Module[] = [
  { name: 'assert' },
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

modules
