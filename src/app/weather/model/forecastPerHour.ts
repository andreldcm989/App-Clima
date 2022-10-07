export interface forecastPerHour {
  summary: summary;
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

interface temperature {
  minimum: units;
  maximum: units;
}
interface realFeelTemperature extends temperature {}
interface realFeelTemperatureShade extends temperature {}

interface degreeDaySummary {
  heating: units;
  cooling: units;
}

interface airAndPollen {
  name: string;
  value: number;
  category: string;
  categoryValue: number;
  type: string;
}

interface direction {
  degrees: number;
  localizedDescription: string;
}

interface speed extends units {}

interface wind {
  direction: direction;
  speed: speed;
}

interface windGust extends wind {}

interface day {
  iconCode: number;
  iconPhrase: string;
  hasPrecipitation: boolean;
  precipitationType: string;
  precipitationIntensity: string;
  shortPhrase: string;
  longPhrase: string;
  precipitationProbability: number;
  thunderstormProbability: number;
  rainProbability: number;
  snowProbability: number;
  iceProbability: number;
  wind: wind;
  windGust: windGust;
  totalLiquid: units;
  rain: units;
  snow: units;
  ice: units;
  hoursOfPrecipitation: number;
  hoursOfRain: number;
  hoursOfSnow: number;
  hoursOfIce: number;
  cloudCover: number;
}

interface night extends day {}

interface forecast {
  date: string;
  temperature: temperature;
  realFeelTemperature: realFeelTemperature;
  realFeelTemperatureShade: realFeelTemperatureShade;
  hoursOfSun: number;
  degreeDaySummary: degreeDaySummary;
  airAndPollen: airAndPollen[];
  day: day;
  night: night;
  sources: string[];
}
