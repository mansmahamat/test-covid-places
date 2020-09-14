import React, {useState, useRef} from 'react';
import ReactMapGL, {Marker, FlyToInterpolator, Popup, GeolocateControl} from 'react-map-gl';
import useSupercluster from 'use-supercluster';
import testPlace from '../data/csvjson.json';

function MapData() {
    // Setup Map
    const [viewport, setViewport] = useState({
      latitude : 46.232193 ,
      longitude :  2.209667,
      width: '100vw',
      height: '100vh',
      zoom : 4
    });
    const mapRef = useRef();
  
    const geolocateStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 10
    };
  
    const points = testPlace.map(places => ({
      type: "Feature",
      properties: { cluster: false, ID: places.ID},
      adresse : places.adresse,
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(places.longitude),
          parseFloat(places.latitude)
        ]
      }
    }));
  
    const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;
  
    const {clusters , supercluster} = useSupercluster({
      points,
      zoom : viewport.zoom,
      bounds,
      options: { radius: 75, maxZoom: 20 }
    });
  
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    
    return (

          <ReactMapGL {...viewport} 
                      mapboxApiAccessToken="pk.eyJ1IjoibWFuc2Rlc21leiIsImEiOiJja2YxazkyczIwdHE4MnFwNzZmNTE4aGJnIn0.y9xp6HOT3jNQk39gFs02nA"
                      mapStyle="mapbox://styles/mansdesmez/ck9wirzxf05ly1inmehl1qa7p"
                      ref={mapRef}
                      onViewportChange={viewport => {setViewport(viewport); }} > 
                       <GeolocateControl
                       style={geolocateStyle}
            positionOptions={{enableHighAccuracy: true}}
            trackUserLocation={true}
          />  
            {clusters.map(cluster => {
              const [longitude, latitude] = cluster.geometry.coordinates;
              const {cluster: isCluster, point_count: pointCount} = cluster.properties;
  
              if(isCluster){
                return(
                  <Marker key={Math.random()}
                          latitude={latitude}
                          longitude={longitude}>
  
                    <div className="bg-red-700 rounded-full py-4 px-4 text-top text-white font-black cursor-pointer" 
                          style={{ width: `${45 + pointCount / points.length * 20}px`,height: `${45 + pointCount / points.length * 20}px` }}
                          onClick={() => {
                            const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20 );
                            
                            setViewport({
                              ...viewport,
                              latitude,
                              longitude,
                              zoom : expansionZoom,
                              transitionInterpolator: new FlyToInterpolator({
                                speed: 2
                              }),
                              transitionDuration: "auto"
                            })
                          }}>
                        {pointCount}
  
                    </div>
  
                  </Marker>
                )
              }
  
              return(  <Marker key={Math.random()}
                longitude={longitude}
                latitude={latitude}>
                 <button className="bg-green-600 px-2 py-2"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedPlace(cluster);
                          }}>
                    00
  
                 </button>
       </Marker>)
            } )}
  
            {selectedPlace ? (
                <Popup longitude={selectedPlace.geometry.coordinates[0]}
                latitude={selectedPlace.geometry.coordinates[1]}
                onClose={() => {
                  setSelectedPlace(null);
                }}>
                  <div>
                    {selectedPlace.adresse}
                  </div>
                </Popup>
            ) : null }
  
          </ReactMapGL>
  
    );
  }
  
  export default MapData;
  

