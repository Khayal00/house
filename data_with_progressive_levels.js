var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
      
      "levels": [
        { "tileSize": 128, "size": 128, "fallbackOnly": true },
        { "tileSize": 256, "size": 256 },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],

      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5310058807051785,
          "pitch": -0.017844689639550992,
          "rotation": 1.5707963267948966,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
      
      "levels": [
        { "tileSize": 128, "size": 128, "fallbackOnly": true },
        { "tileSize": 256, "size": 256 },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],

      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9699989409483614,
          "pitch": 0.055652141679463085,
          "rotation": 0,
          "target": "4-reception"
        },
        {
          "yaw": -2.3762056418952877,
          "pitch": 0.007811487037981735,
          "rotation": 1.5707963267948966,
          "target": "0-kitchen"
        },
        {
          "yaw": 2.2546714705787565,
          "pitch": 0.016300275916602658,
          "rotation": 4.71238898038469,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
      
      "levels": [
        { "tileSize": 128, "size": 128, "fallbackOnly": true },
        { "tileSize": 256, "size": 256 },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],

      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9308444118323163,
          "pitch": 0.07715090445362094,
          "rotation": 4.71238898038469,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bath",
      "name": "Bath",
      
      "levels": [
        { "tileSize": 128, "size": 128, "fallbackOnly": true },
        { "tileSize": 256, "size": 256 },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],

      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.013560830942753,
          "pitch": 0.03333855199347546,
          "rotation": 1.5707963267948966,
          "target": "5-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception",
      "name": "Reception",
      
      "levels": [
        { "tileSize": 128, "size": 128, "fallbackOnly": true },
        { "tileSize": 256, "size": 256 },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],

      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3337362930652752,
          "pitch": 0.03556009489141232,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor",
      "name": "Corridor",
      
      "levels": [
        { "tileSize": 128, "size": 128, "fallbackOnly": true },
        { "tileSize": 256, "size": 256 },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],

      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8300486108790928,
          "pitch": 0.05402368988379003,
          "rotation": 4.71238898038469,
          "target": "3-bath"
        },
        {
          "yaw": -2.7792172937312003,
          "pitch": 0.8242525573289328,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 1.0283871133576952,
          "pitch": 0.0658496940024218,
          "rotation": 4.71238898038469,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "House Design",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
