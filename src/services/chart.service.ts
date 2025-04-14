import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Chart } from 'chart.js';
import { ChartConfig, colors } from '../config/charts.config';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private apollo: Apollo) {}

  public fetchAndRenderChart(chart: ChartConfig) {
    const ctx = document.getElementById(chart.id) as HTMLCanvasElement;
    if (!ctx) return;
    this.apollo.query({ query: chart.query }).subscribe(({ data }: any) => {
      const entries = Object.values(data[chart.id]) as any;
      let labels: any[] = [];
      let values: number[] = [];

      if (chart.id === 'networkSpeedVsViewRatio') {
        this.renderScatterChart(ctx, entries, chart);
        return;
      } else {
        labels = entries.map((e: any) => e[chart.label]);
      }

      values = entries.map((e: any) => e[chart.valueKey]);
      new Chart(ctx, {
        type: chart.type || ('bar' as any),
        data: {
          labels,
          datasets: [
            {
              label: chart.title,
              data: values,
              backgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: chart.type === 'pie',
            },
          },
        },
      });
    });
  }

  public renderScatterChart(
    ctx: HTMLCanvasElement,
    data: any[],
    chart: ChartConfig,
  ) {
    const scatterData = data.map((d) => ({
      x: d[chart.label],
      y: d[chart.valueKey],
    }));

    new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: chart.id,
            data: scatterData,
            backgroundColor: '#93c5fd',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Network Speed',
            },
          },
          y: { title: { display: true, text: 'View Ratio' } },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
