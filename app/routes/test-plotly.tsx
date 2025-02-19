import { createFileRoute } from '@tanstack/react-router'
import { Plotly } from '../components/plotly'
export const Route = createFileRoute('/test-plotly')({
  component: TestPlotlyComponent,
  ssr: false
})

function TestPlotlyComponent() {
  return (
    <Plotly />
  )
} 