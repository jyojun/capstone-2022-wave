import React, { useEffect } from "react";
const { kakao } = window;

const MapArea = (props) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    //위도, 경도로 변환 및 마커표시
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(props.address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${props.name}</div>`,
        });
        infowindow.open(map, marker);
        map.setCenter(coords);
      }
    });

    // 위도, 경도로 변환 및 마커표시
  }, [props]);

  return (
    <>
      <div
        id="map"
        style={{ width: "100%", height: "50vh", marginTop: "2rem" }}
      ></div>
    </>
  );
};

export default MapArea;
