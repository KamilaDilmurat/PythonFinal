require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "dark-gray",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"001215337f694fb4a44264582520d507" 
        }
      });
      
      var camera = new Camera({
        position: [
          -90.1994, // lon
          38.6270, // lat
          5000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [bei,urm,stl].forEach(function(button) {
      button.style.display = '.esri-button';
      view.ui.add(button, 'bottom-right');
    });
    
    bei.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 116.4074,
          y: 39.9042,
          z: 5000000
        },
        tilt: 45,
        heading: 90
      });
    });
      
     urm.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 87.6032,
          y: 43.8095,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
    
   
   stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });


    });
