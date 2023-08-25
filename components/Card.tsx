import {
  Card as UiCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IProps } from '@/lib/props.interface'

interface CardProps extends IProps {
  title?: string
  description?: string
  cardCN?: string
}

const Card = ({ children, cardCN }: CardProps) => {
  return <section className={`bg-card shadow rounded-lg p-4 ${cardCN}`}>{children}</section>
}

export default Card
