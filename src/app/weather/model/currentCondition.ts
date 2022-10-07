export interface currentCondition {
  dateTime: string;
  phrase: string;
  iconCode: number;
  hasPrecipitation: boolean;
  precipitationType: string;
  isDayTime: boolean;
  temperature: temperature;
  realFeelTemperature: realFeelTemperature;
  realFeelTemperatureShade: realFeelTemperatureShade;
  relativeHumidity: number;
  dewpoint: dewPoint;
  wind: wind;
  windGust: windGust;
  uvIndex: number;
  uvIndexPhrase: string;
  visibility: visibility;
  obstructionsToVisibility: string;
  cloudCover: number;
  ceiling: ceiling;
  pressure: pressure;
  pressureTendency: pressureTendency;
  past24HourTemperatureDeparture: past24HourTemperatureDeparture;
  apparentTemperature: apparentTemperature;
  windChillTemperature: windChillTemperature;
  wetBulbTemperature: wetBulbTemperature;
  precipitationSummary: precipitationSummary;
  temperatureSummary: temperatureSummary;
}

interface temperature {
  value: number;
  unit: string;
  unitType: number;
}

interface realFeelTemperature extends temperature {}

interface realFeelTemperatureShade extends temperature {}

interface dewPoint extends temperature {}

interface direction {
  degrees: number;
  localizedDescription: string;
}

interface speed {
  value: number;
  unit: string;
  unitType: number;
}

interface wind {
  direction: direction;
  speed: speed;
}

interface windGust {
  speed: speed;
}

interface visibility extends speed {}

interface ceiling {
  value: number;
  unit: string;
  unitType: number;
}

interface pressure extends speed {}

interface pressureTendency {
  localizedDescription: string;
  code: string;
}

interface past24HourTemperatureDeparture extends speed {}
interface apparentTemperature extends speed {}
interface windChillTemperature extends speed {}
interface wetBulbTemperature extends speed {}
interface pastHour extends speed {}
interface past3Hours extends speed {}
interface past6Hours extends speed {}
interface past9Hours extends speed {}
interface past12Hours extends speed {}
interface past18Hours extends speed {}
interface past24Hours extends speed {}

interface precipitationSummary {
  pastHour: pastHour;
  past3Hours: past3Hours;
  past6Hours: past6Hours;
  past9Hours: past9Hours;
  past12Hours: past12Hours;
  past18Hours: past18Hours;
  past24Hours: past24Hours;
}

interface pastXHours {
  minimum: speed;
  maximum: speed;
}

interface temperatureSummary {
  past6Hours: pastXHours;
  past12Hours: pastXHours;
  past24Hours: pastXHours;
}
