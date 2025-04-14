export enum AttributesKeys {
  deviceType,
  isTouchCapable,
  browser,
  browserVersion,
  operatingSystem,
  osVersion,
  device,
  deviceBrand,
  deviceModel,
  userAgentString,
  languageCode,
  language,
  languageLocality,
  dimensions,
  viewArea,
  screenDimensions,
  screenArea,
  viewRatio,
  height,
  width,
  screenHeight,
  screenWidth,
  browserVendor,
  browserLanguage,
  adBlocker,
  networkSpeed,
  platform,
  saveData,
  screenOrientation,
  batteryLevel,
  batteryCharging,
  dayOfWeek,
  month,
  dayOfMonth,
  hour,
  season,
  isHoliday,
  holidayName,
  refererUrl,
  refererDomain,
  productId,
  storeId,
  productTag,
  utmSource,
  utmMedium,
  utmCampaign,
  utmContent,
  utmTerm,
  continent,
  country,
  region,
  city,
  latitude,
  longitude,
  isEu,
  postal,
  isCapital,
  asn,
  isp,
  currency,
  currencyRate,
  elevation,
  temperature,
  humidity,
  apparentTemperature,
  isDay,
  precipitation,
  weatherCode,
  timezone,
}

export type Attribute = {
  label: string;
  attribute: string;
};

const attributes: Record<AttributesKeys, Attribute> = {
  [AttributesKeys.deviceType]: {
    label: 'Device Type',
    attribute: 'device_type',
  },
  [AttributesKeys.isTouchCapable]: {
    label: 'Is Touch Capable',
    attribute: 'is_touch_capable',
  },
  [AttributesKeys.browser]: { label: 'Browser', attribute: 'browser' },
  [AttributesKeys.browserVersion]: {
    label: 'Browser Version',
    attribute: 'browser_version',
  },
  [AttributesKeys.operatingSystem]: {
    label: 'Operating System',
    attribute: 'os',
  },
  [AttributesKeys.osVersion]: { label: 'OS Version', attribute: 'os_version' },
  [AttributesKeys.device]: { label: 'Device', attribute: 'device' },
  [AttributesKeys.deviceBrand]: {
    label: 'Device Brand',
    attribute: 'device_brand',
  },
  [AttributesKeys.deviceModel]: {
    label: 'Device Model',
    attribute: 'device_model',
  },
  [AttributesKeys.userAgentString]: {
    label: 'User Agent String',
    attribute: 'user_agent_string',
  },
  [AttributesKeys.languageCode]: {
    label: 'Language Code',
    attribute: 'language_code',
  },
  [AttributesKeys.language]: { label: 'Language', attribute: 'language' },
  [AttributesKeys.languageLocality]: {
    label: 'Language Locality',
    attribute: 'language_locality',
  },
  [AttributesKeys.dimensions]: { label: 'Dimensions', attribute: 'dimensions' },
  [AttributesKeys.viewArea]: { label: 'View Area', attribute: 'view_area' },
  [AttributesKeys.screenDimensions]: {
    label: 'Screen Dimensions',
    attribute: 'screen_dimensions',
  },
  [AttributesKeys.screenArea]: {
    label: 'Screen Area',
    attribute: 'screen_area',
  },
  [AttributesKeys.viewRatio]: { label: 'View Ratio', attribute: 'view_ratio' },
  [AttributesKeys.height]: { label: 'Height', attribute: 'height' },
  [AttributesKeys.width]: { label: 'Width', attribute: 'width' },
  [AttributesKeys.screenHeight]: {
    label: 'Screen Height',
    attribute: 'screen_height',
  },
  [AttributesKeys.screenWidth]: {
    label: 'Screen Width',
    attribute: 'screen_width',
  },
  [AttributesKeys.browserVendor]: {
    label: 'Browser Vendor',
    attribute: 'browser_vendor',
  },
  [AttributesKeys.browserLanguage]: {
    label: 'Browser Language',
    attribute: 'browser_language',
  },
  [AttributesKeys.adBlocker]: { label: 'Ad Blocker', attribute: 'ad_blocker' },
  [AttributesKeys.networkSpeed]: {
    label: 'Network Speed',
    attribute: 'network_speed',
  },
  [AttributesKeys.platform]: { label: 'Platform', attribute: 'platform' },
  [AttributesKeys.saveData]: { label: 'Save Data', attribute: 'save_data' },
  [AttributesKeys.screenOrientation]: {
    label: 'Screen Orientation',
    attribute: 'screen_orientation',
  },
  [AttributesKeys.batteryLevel]: {
    label: 'Battery Level',
    attribute: 'battery_level',
  },
  [AttributesKeys.batteryCharging]: {
    label: 'Battery Charging',
    attribute: 'battery_charging',
  },
  [AttributesKeys.dayOfWeek]: {
    label: 'Day of Week',
    attribute: 'day_of_week',
  },
  [AttributesKeys.month]: { label: 'Month', attribute: 'month' },
  [AttributesKeys.dayOfMonth]: {
    label: 'Day of Month',
    attribute: 'day_of_month',
  },
  [AttributesKeys.hour]: { label: 'Hour', attribute: 'hour' },
  [AttributesKeys.season]: { label: 'Season', attribute: 'season' },
  [AttributesKeys.isHoliday]: { label: 'Is Holiday', attribute: 'is_holiday' },
  [AttributesKeys.holidayName]: {
    label: 'Holiday Name',
    attribute: 'holiday_name',
  },
  [AttributesKeys.refererUrl]: {
    label: 'Referer URL',
    attribute: 'referer_url',
  },
  [AttributesKeys.refererDomain]: {
    label: 'Referer Domain',
    attribute: 'referer_domain',
  },
  [AttributesKeys.productId]: { label: 'Product ID', attribute: 'product_id' },
  [AttributesKeys.storeId]: { label: 'Store ID', attribute: 'store_id' },
  [AttributesKeys.productTag]: {
    label: 'Product Tag',
    attribute: 'product_tag',
  },
  [AttributesKeys.utmSource]: { label: 'UTM Source', attribute: 'utm_source' },
  [AttributesKeys.utmMedium]: { label: 'UTM Medium', attribute: 'utm_medium' },
  [AttributesKeys.utmCampaign]: {
    label: 'UTM Campaign',
    attribute: 'utm_campaign',
  },
  [AttributesKeys.utmContent]: {
    label: 'UTM Content',
    attribute: 'utm_content',
  },
  [AttributesKeys.utmTerm]: { label: 'UTM Term', attribute: 'utm_term' },
  [AttributesKeys.continent]: { label: 'Continent', attribute: 'continent' },
  [AttributesKeys.country]: { label: 'Country', attribute: 'country' },
  [AttributesKeys.region]: { label: 'Region', attribute: 'region' },
  [AttributesKeys.city]: { label: 'City', attribute: 'city' },
  [AttributesKeys.latitude]: { label: 'Latitude', attribute: 'latitude' },
  [AttributesKeys.longitude]: { label: 'Longitude', attribute: 'longitude' },
  [AttributesKeys.isEu]: { label: 'Is EU', attribute: 'is_eu' },
  [AttributesKeys.postal]: { label: 'Postal', attribute: 'postal' },
  [AttributesKeys.isCapital]: { label: 'Is Capital', attribute: 'is_capital' },
  [AttributesKeys.asn]: { label: 'ASN', attribute: 'asn' },
  [AttributesKeys.isp]: { label: 'ISP', attribute: 'isp' },
  [AttributesKeys.currency]: { label: 'Currency', attribute: 'currency' },
  [AttributesKeys.currencyRate]: {
    label: 'Currency Rate',
    attribute: 'currency_rate',
  },
  [AttributesKeys.elevation]: { label: 'Elevation', attribute: 'elevation' },
  [AttributesKeys.temperature]: {
    label: 'Temperature',
    attribute: 'temperature',
  },
  [AttributesKeys.humidity]: { label: 'Humidity', attribute: 'humidity' },
  [AttributesKeys.apparentTemperature]: {
    label: 'Apparent Temperature',
    attribute: 'apparent_temperature',
  },
  [AttributesKeys.isDay]: { label: 'Is Day', attribute: 'is_day' },
  [AttributesKeys.precipitation]: {
    label: 'Precipitation',
    attribute: 'precipitation',
  },
  [AttributesKeys.weatherCode]: {
    label: 'Weather Code',
    attribute: 'weather_code',
  },
  [AttributesKeys.timezone]: { label: 'Timezone', attribute: 'timezone' },
};

export const attributesValues: Attribute[] = Object.values(attributes);

export const attributesNeededByDefault: Attribute[] = [
  attributes[AttributesKeys.deviceType],
  attributes[AttributesKeys.browser],
  attributes[AttributesKeys.browserVersion],
  attributes[AttributesKeys.operatingSystem],
  attributes[AttributesKeys.osVersion],
  attributes[AttributesKeys.deviceBrand],
  attributes[AttributesKeys.deviceModel],
  attributes[AttributesKeys.languageCode],
  attributes[AttributesKeys.language],
  attributes[AttributesKeys.languageLocality],
  attributes[AttributesKeys.screenDimensions],
  attributes[AttributesKeys.screenArea],
  attributes[AttributesKeys.screenOrientation],
  attributes[AttributesKeys.adBlocker],
  attributes[AttributesKeys.networkSpeed],
  attributes[AttributesKeys.platform],
  attributes[AttributesKeys.saveData],
  attributes[AttributesKeys.dayOfWeek],
  attributes[AttributesKeys.month],
  attributes[AttributesKeys.hour],
  attributes[AttributesKeys.season],
  attributes[AttributesKeys.isHoliday],
  attributes[AttributesKeys.holidayName],
  attributes[AttributesKeys.refererDomain],
  attributes[AttributesKeys.productId],
  attributes[AttributesKeys.storeId],
  attributes[AttributesKeys.productTag],
  attributes[AttributesKeys.utmSource],
  attributes[AttributesKeys.utmMedium],
  attributes[AttributesKeys.utmCampaign],
  attributes[AttributesKeys.utmTerm],
  attributes[AttributesKeys.country],
  attributes[AttributesKeys.region],
  attributes[AttributesKeys.city],
  attributes[AttributesKeys.isEu],
  attributes[AttributesKeys.isCapital],
  attributes[AttributesKeys.currency],
  attributes[AttributesKeys.timezone],
];

export const attributesLeftByDefault: Attribute[] = Object.values(
  attributes,
).filter((attr) => !attributesNeededByDefault.includes(attr));

// Type for operations
export type Operation = {
  label: string;
  value: string;
};

// List of operations
export const operations: Operation[] = [
  { label: '<', value: 'less' },
  { label: '=', value: 'equal' },
  { label: '>', value: 'greater' },
];
