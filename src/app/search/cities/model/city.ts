export interface Region {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}
interface Country {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

interface TimeZone {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange: Date | null;
}

interface GeoPosition {
  Latitude: number;
  Longitude: number;
  Elevation: Elevation;
}

interface Elevation {
  Metric: Metric;
  Imperial: Imperial;
}
interface UnitType {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Metric extends UnitType {}
interface Imperial extends UnitType {}

interface ParentCity {
  Key: string;
  LocalizedName: string;
  EnglishName: string;
}

interface AdminAreas {
  Level: number;
  LocalizedName: string;
  EnglishName: string;
}

export interface City {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: Region;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
  TimeZone: TimeZone;
  GeoPosition: GeoPosition;
  IsAlias: boolean;
  ParentCity: ParentCity;
  SupplementalAdminAreas: AdminAreas[];
  DataSets: string[];
}
