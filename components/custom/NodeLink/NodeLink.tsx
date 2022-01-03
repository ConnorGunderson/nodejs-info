interface NodeLinkProps {
  link: string
}

export const NodeLink = ({ link }: NodeLinkProps) => {
  return (
    <a
      target="_blank"
      className="italic text-xs h-0 hover:text-nodeLight-5"
      href={link}
      rel="noreferrer"
    >
      *check out the official documentation here
    </a>
  )
}
