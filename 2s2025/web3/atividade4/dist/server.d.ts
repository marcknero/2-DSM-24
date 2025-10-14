/**
 * Faz geocoding de nome de cidade -> { lat, lon, name, country }
 */
export declare function geocodeCity(city: string): Promise<{
    lat: any;
    lon: any;
    name: any;
    country: any;
} | null>;
/**
 * Busca previsão por lat/lon (current + daily + alerts).
 */
export declare function getWeather(lat: number, lon: number): Promise<any>;
//# sourceMappingURL=server.d.ts.map