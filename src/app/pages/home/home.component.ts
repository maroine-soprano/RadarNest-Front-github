import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartService } from '../../../services/chart.service';
import zoomPlugin from 'chartjs-plugin-zoom';
import { ChartConfig, charts } from '../../../config/charts.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [],
})
export class HomeComponent implements AfterViewInit {
  public charts: ChartConfig[] = charts;

  constructor(private chartService: ChartService) {
    Chart.register(...registerables, zoomPlugin);
  }

  ngAfterViewInit() {
    this.charts.forEach((chart) =>
      this.chartService.fetchAndRenderChart(chart),
    );
  }
}
