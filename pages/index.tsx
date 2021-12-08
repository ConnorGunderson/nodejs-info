import { Container, Input } from '@components/base'
import styles from '@styles/index.module.css'
import { Card } from '@components/base/Card/Card'
import { NodeHeader } from '@components/custom'
import { modules } from 'global/meta'
import { useChangeRoute } from 'store/hooks'

export default function Home() {
  const changeRoute = useChangeRoute()
  return (
    <main className="flex-1 flex flex-col">
      <nav className={styles['landing-navbar']}>
        <NodeHeader classNames={{ header: 'text-4xl' }} />
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
                onClick={() => changeRoute(`/modules#${name}`)}
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
