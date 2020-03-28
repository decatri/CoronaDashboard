export default interface CountriesData {
  country: String;
  countryInfo?: {
    _id: Number;
    lat: Number;
    long: Number;
    flag: String;
    iso3: String;
    iso2: String;
  };
  cases: Number;
  todayCases: Number;
  deaths: Number;
  recovered: Number;
  active: Number;
  critical: Number;
  casesPerOneMillion: Number;
  deathsPerOneMillion: Number;
}
