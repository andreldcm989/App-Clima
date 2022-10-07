interface matchConfidence {
  score: number;
}

interface address {
  municipality: string;
  countrySubdivision: string;
  countryCode: string;
  country: string;
  countryCodeISO3: string;
}

interface position {
  lat: number;
  lon: number;
}

interface viewport {
  topLeftPoint: position;
  btmRightPoint: position;
}

interface boundingBox extends viewport {}

interface geometry {
  id: string;
}

interface dataSources {
  geometry: geometry;
}

export interface results {
  type: string;
  id: string;
  score: number;
  entityType: string;
  matchConfidence: matchConfidence;
  address: address;
  position: position;
  viewport: viewport;
  boundingBox: boundingBox;
  dataSources: dataSources;
}

export interface summary {
  query: string;
  queryType: string;
  queryTime: number;
  numResults: number;
  offset: number;
  totalResults: number;
  fuzzyLevel: number;
}

export interface City {
  summary: summary;
  results: results[];
}
