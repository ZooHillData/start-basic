import React from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { Plotly } from '../components/plotly'
export const Route = createFileRoute('/test-plotly')({
  component: TestPlotlyComponent,
  ssr: true
})
const NoSSR = ({ children }: Readonly<{ children: React.ReactNode }>) =>  {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return <>{isClient ? children : null}</>;
}

function TestPlotlyComponent() {
  return (
      <Plotly />
  )
} 