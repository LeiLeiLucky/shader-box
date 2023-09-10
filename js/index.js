mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fpbmlhb2ZlaWZlaSIsImEiOiJjbGZjYXkyMm8wM2lwM3dzMHRja2Fyc2YzIn0.z7OhxVmcaJETyaerG5vCsA'; //这里请换成自己的token
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [120.2,30.1666], // 初始地图中心点位置
  zoom: 15,     // starting zoom 地图初始的层级
  pitch: 60,  //地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
  bearing: -17.6, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北
  antialias: true, //抗锯齿，通过false关闭提升性能
});
