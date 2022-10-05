export interface Region {
  id: string;
  localizedName: string;
  englishName: string;
}
interface Country {
  id: string;
  localizedName: string;
  englishName: string;
}

interface AdministrativeArea {
  id: string;
  localizedName: string;
  englishName: string;
  level: number;
  localizedType: string;
  englishType: string;
  countryID: string;
}

interface TimeZone {
  code: string;
  name: string;
  gmtOffset: number;
  isDaylightSaving: boolean;
  nextOffsetChange: Date | null;
}

interface GeoPosition {
  latitude: number;
  longitude: number;
  elevation: Elevation;
}

interface Elevation {
  metric: Metric;
  imperial: Imperial;
}
interface UnitType {
  value: number;
  unit: string;
  unitType: number;
}

interface Metric extends UnitType {}
interface Imperial extends UnitType {}

interface ParentCity {
  key: string;
  localizedName: string;
  englishName: string;
}

interface AdminAreas {
  level: number;
  localizedName: string;
  englishName: string;
}

export interface City {
  version: number;
  key: string;
  type: string;
  rank: number;
  localizedName: string;
  englishName: string;
  primaryPostalCode: string;
  region: Region;
  country: Country;
  administrativeArea: AdministrativeArea;
  timeZone: TimeZone;
  geoPosition: GeoPosition;
  isAlias: boolean;
  parentCity: ParentCity;
  supplementalAdminAreas: AdminAreas[];
  dataSets: string[];
}
