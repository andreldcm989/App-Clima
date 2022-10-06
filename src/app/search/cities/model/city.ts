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

export interface City {
  address: address;
  position: position;
}
