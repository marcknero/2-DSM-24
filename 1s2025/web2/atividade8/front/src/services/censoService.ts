import api from "./api";

export async function fetchCensoList(city: string) {
  const response = await api.get(`/censo`, { params: { city } });
  return response.data;
}

export async function fetchCensoByPoint(x: number, y: number) {
  const response = await api.get(`/censo/point`, { params: { x, y } });
  return response.data;
}