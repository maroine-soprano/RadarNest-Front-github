import { gql } from 'apollo-angular';

export type ChartConfig = {
  id: string;
  type?: string;
  title: string;
  query: any;
  label: string;
  valueKey: string;
};

export const charts: ChartConfig[] = [
  {
    id: 'deviceTypeDistribution',
    type: 'pie',
    title: 'Device Type Distribution',
    query: gql`
      query {
        deviceTypeDistribution
      }
    `,
    label: 'device',
    valueKey: 'count',
  },
  {
    id: 'topCampaigns',
    title: 'Top Campaigns',
    query: gql`
      query {
        topCampaigns
      }
    `,
    label: 'campaign',
    valueKey: 'count',
  },
  {
    id: 'browserPopularity',
    title: 'Browser Popularity',
    query: gql`
      {
        browserPopularity
      }
    `,
    label: 'browser',
    valueKey: 'count',
  },
  {
    id: 'refererDomainCounts',
    title: 'Users by Referer Domain',
    query: gql`
      query {
        refererDomainCounts
      }
    `,
    type: 'pie',
    label: 'referer_domain',
    valueKey: 'count',
  },
  {
    id: 'sessionsByCountry',
    title: 'Sessions by Country',
    query: gql`
      query {
        sessionsByCountry
      }
    `,
    label: 'country',
    valueKey: 'count',
  },
  {
    id: 'hourlySessionCounts',
    title: 'Hourly Sessions (Line)',
    query: gql`
      query {
        hourlySessionCounts
      }
    `,
    type: 'line',
    label: 'hour',
    valueKey: 'count',
  },

  {
    id: 'topCities',
    title: 'Top Cities',
    query: gql`
      query {
        topCities
      }
    `,
    label: 'city',
    valueKey: 'count',
  },
  {
    id: 'osUsage',
    title: 'OS Usage',
    query: gql`
      query {
        osUsage
      }
    `,
    label: 'os',
    valueKey: 'count',
  },
  {
    id: 'weekdayWeekendUsage',
    title: 'Weekday vs Weekend',
    query: gql`
      query {
        weekdayWeekendUsage
      }
    `,
    label: 'type',
    valueKey: 'count',
  },
  {
    id: 'seasonalTrends',
    title: 'Seasonal Trends',
    query: gql`
      query {
        seasonalTrends
      }
    `,
    label: 'season',
    valueKey: 'count',
  },
  {
    id: 'networkSpeedVsViewRatio',
    title: 'Network Speed vs View Ratio',
    query: gql`
      query {
        networkSpeedVsViewRatio
      }
    `,
    label: 'network_speed',
    valueKey: 'view_ratio',
  },
  {
    id: 'adBlockerUsage',
    title: 'Ad Blocker Usage',
    query: gql`
      query {
        adBlockerUsage
      }
    `,
    type: 'pie',
    label: 'ad_blocker',
    valueKey: 'count',
  },
];

export const colors = ['#93c5fd', '#fca5a5', '#fdba74', '#6ee7b7', '#c4b5fd'];
