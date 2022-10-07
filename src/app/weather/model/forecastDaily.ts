export interface forecastPerDay {
  forecasts: forecast[];
}

interface summary {
  startDate: string;
  endDate: string;
  severity: number;
  phrase: string;
  category: string;
}

interface units {
  value: number;
  unit: string;
  unitType: number;
}

interface direction {
  degrees: number;
  localizedDescription: string;
}

interface wind {
  direction: direction;
  speed: units;
}

interface windGust {
  speed: units;
}
interface forecast {
  date: string;
  iconCode: number;
  iconPhrase: string;
  hasPrecipitation: boolean;
  precipitationType: string;
  precipitationIntensity: string;
  isDaylight: boolean;
  temperature: units;
  realFeelTemperature: units;
  realFeelTemperatureShade: units;
  wetBulbTemperature: units;
  dewPoint: units;
  wind: wind;
  windGust: windGust;
  relativeHumidity: number;
  cloudCover: number;
  ceiling: units;
  uvIndex: number;
  uvIndexPhrase: string;
  precipitationProbability: number;
  rainProbability: number;
  snowProbability: number;
  iceProbability: number;
  totalLiquid: units;
  rain: units;
  snow: units;
  ice: units;
}
