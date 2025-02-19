import Plot from 'react-plotly.js'

const Plotly = () => {
    return (
      <div className="p-2">
        <h3>Test Plotly Chart</h3>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
          ]}
          layout={{ width: 720, height: 480, title: 'A Simple Plotly Chart' }}
        />
      </div>
    )
  } 

  export { Plotly }