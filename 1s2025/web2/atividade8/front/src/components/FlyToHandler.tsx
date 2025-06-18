import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface FlyToHandlerProps {
  center: [number, number];
  zoom?: number;
}

const FlyToHandler = ({ center, zoom = 12 }: FlyToHandlerProps) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [center, zoom, map]);

  return null;
};

export default FlyToHandler;