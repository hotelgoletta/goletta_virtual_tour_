var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrata",
      "name": "ENTRATA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.5266997325025633,
        "pitch": 0.4586606657312018,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.8708612731445537,
          "pitch": 0.7366649475944129,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.1812876871000615,
        "pitch": 0.18047731505044062,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.042122148756853,
          "pitch": 0.11927774124371915,
          "rotation": 1.5707963267948966,
          "target": "7-parcheggio"
        },
        {
          "yaw": -2.174228644820758,
          "pitch": 0.02145741331495188,
          "rotation": 0,
          "target": "2-suite-entrata"
        },
        {
          "yaw": -2.302991531802352,
          "pitch": 0.12336074163554756,
          "rotation": 4.71238898038469,
          "target": "0-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-suite-entrata",
      "name": "SUITE ENTRATA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.048863145493698,
        "pitch": 0.09095220662239178,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.0506567117751677,
          "pitch": 0.27068664379908114,
          "rotation": 0,
          "target": "3-suite-sleeping"
        },
        {
          "yaw": 2.2227971378948563,
          "pitch": 0.39263752285438613,
          "rotation": 0.7853981633974483,
          "target": "4-suite-living"
        },
        {
          "yaw": 1.9146173339869286,
          "pitch": 0.3891596789197962,
          "rotation": 4.71238898038469,
          "target": "6-suite-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-suite-sleeping",
      "name": "SUITE SLEEPING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -3.0970434772717894,
        "pitch": 0.3395507718364712,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.3229941637146574,
          "pitch": 0.3132852705420657,
          "rotation": 1.5707963267948966,
          "target": "6-suite-bathroom"
        },
        {
          "yaw": 1.0955666911391173,
          "pitch": 0.29672064884043436,
          "rotation": 5.497787143782138,
          "target": "4-suite-living"
        },
        {
          "yaw": 1.1979794228091016,
          "pitch": 0.421091931780353,
          "rotation": 9.42477796076938,
          "target": "1-hall"
        },
        {
          "yaw": -1.4952748081986904,
          "pitch": 0.23821141077331198,
          "rotation": 3.141592653589793,
          "target": "0-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-suite-living",
      "name": "SUITE LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.42425942844660014,
        "pitch": -0.015038054614137764,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.9089223789873966,
          "pitch": 0.17302519066397615,
          "rotation": 8.63937979737193,
          "target": "2-suite-entrata"
        },
        {
          "yaw": 0.6430406245461668,
          "pitch": 0.12174682626774569,
          "rotation": 0,
          "target": "5-suite-terrazza"
        },
        {
          "yaw": -1.61629991890854,
          "pitch": 0.16139147716311264,
          "rotation": 0,
          "target": "0-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-suite-terrazza",
      "name": "SUITE TERRAZZA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0076851982828376,
          "pitch": 0.4183355259489385,
          "rotation": 3.141592653589793,
          "target": "4-suite-living"
        },
        {
          "yaw": -2.1485340753849247,
          "pitch": 0.15454269783529462,
          "rotation": 0,
          "target": "0-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-suite-bathroom",
      "name": "SUITE BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.41201514868894407,
        "pitch": 0.10783004371782567,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.48790121235755635,
          "pitch": 0.31196451532800396,
          "rotation": 1.5707963267948966,
          "target": "1-hall"
        },
        {
          "yaw": 0.3431399106830906,
          "pitch": 0.23107977971121052,
          "rotation": 0,
          "target": "4-suite-living"
        },
        {
          "yaw": 0.2052648464896052,
          "pitch": 0.3095945864359564,
          "rotation": 4.71238898038469,
          "target": "3-suite-sleeping"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-parcheggio",
      "name": "PARCHEGGIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6695856186569458,
        "pitch": 0.19724924270067135,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.49436328502280347,
          "pitch": 0.15690110404042912,
          "rotation": 1.5707963267948966,
          "target": "1-hall"
        },
        {
          "yaw": -0.8562795694135961,
          "pitch": 0.1572080328327452,
          "rotation": 0,
          "target": "0-entrata"
        },
        {
          "yaw": -0.10732749421007881,
          "pitch": 0.14809465876277983,
          "rotation": 0,
          "target": "2-suite-entrata"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
