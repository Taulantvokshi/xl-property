import React from 'react';
import { Pin } from '../../../Icons';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
function Map({ data }) {
  const [viewport, setViewport] = React.useState({
    longitude: -73.9968,
    latitude: 40.68645,
    zoom: 12,
  });

  const markers = React.useMemo(
    () =>
      data.map((currLoc) => {
        if (currLoc.lng) {
          return (
            <Marker
              key={Math.random()}
              latitude={currLoc.lat}
              longitude={currLoc.lng}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div
                className="pinAnimations"
                onClick={() =>
                  setViewport({
                    latitude: Number(currLoc.lat),
                    longitude: Number(currLoc.lng),
                    zoom: 17,
                  })
                }
              >
                <Pin />
              </div>
            </Marker>
          );
        }
      }),
    [data]
  );

  return (
    <div className="mapbox-map">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken="key"
        onViewportChange={setViewport}
        //   transitionDuration={1000}
        //   transitionInterpolator={new LinearInterpolator()}
      >
        {markers}
      </ReactMapGL>
    </div>
  );
}

export default Map;
