interface NodeLinkProps {
  link: string
}

export const NodeLink = ({ link }: NodeLinkProps) => {
  return (
    <a target="_blank" className="italic text-xs hover:text-" href={link}>
      *check out the official documentation here
    </a>
  )
}
