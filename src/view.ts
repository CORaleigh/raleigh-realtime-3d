import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Collection from "@arcgis/core/core/Collection.js";
import LabelClass from "@arcgis/core/layers/support/LabelClass.js";
import * as typeRendererCreator from "@arcgis/core/smartMapping/renderers/type.js";
import Renderer from "@arcgis/core/renderers/Renderer";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color.js";

import OAuthInfo from "@arcgis/core/identity/OAuthInfo.js";
import esriId from "@arcgis/core/identity/IdentityManager.js";

const info = new OAuthInfo({
  // Swap this ID out with registered application ID
  appId: "fvYgDp4eRMEJ6KEG",
  // Uncomment the next line and update if using your own portal
  // portalUrl: "https://<host>:<port>/arcgis"
  // Uncomment the next line to prevent the user's signed in state from being shared with other apps on the same domain with the same authNamespace value.
  // authNamespace: "portal_oauth_inline",
  flowType: "auto", // default that uses two-step flow
  popup: false
});

esriId.registerOAuthInfos([info]);

import { Stats } from "./props";
export const createScene = async (
  div: HTMLDivElement,
  setStats: Function,
  setSupervisors: Function
): Promise<SceneView> => {
  const map: Map = new Map({
    ground: "world-elevation",
  });

  const lyrTile = new VectorTileLayer({
    url: "https://velocity-gbd.maps.arcgis.com/sharing/rest/content/items/8a663fe011754b939b60c93d60c18651/resources/styles/root.json",
  });
  map.add(lyrTile);

  const view: SceneView = initSceneView(map, div); 

  addSceneLayer(map);
  const vehicles: FeatureLayer = await addVehicles(map); 
  // vehicles.popupTemplate.actions = new Collection([
  //   {title: 'Track', id: 'track-vehicle', className: 'esri-icon-locate-circled'} as __esri.ActionButton,
  //   {title: 'Breadcrumbs', id: 'track-vehicle'} as __esri.ActionButton]);
  setStats(await updateStats(vehicles));
  setSupervisors(await updateSupervisors(vehicles));
  const history: FeatureLayer = await addHistoryLayer(map, view);
  addBoundaries(map, view);

  // view.popup.on('trigger-action', e => {
  //   if (e.action.title === 'Breadcrumbs') {
  //     history.visible = !history.visible;
  //     //history.definitionExpression = `${history.definitionExpression} and DeviceId = '${view.popup.features[0].getAttribute('deviceid')}'`
  //   }
  // })

  view.on("click", (e) => {
    view.hitTest(view.toScreen(e.mapPoint), {include: [vehicles]}).then((result) => {
      const r: __esri.SceneViewGraphicHit = result
        .results[0] as __esri.SceneViewGraphicHit;
      view.goTo(
        {
          center: r.graphic.geometry,
          zoom: 18,
          heading: r.graphic.getAttribute("bearing"),
          tilt: 85,
        },
        { easing: "linear" }
      );
    });
  });
  return view;
};

const initSceneView = (map: Map, container: HTMLDivElement): SceneView => {
  const view = new SceneView({
    map: map,
    container: container,
    zoom: 15,
    camera: {
      position: [
        -78.6396, // lon
        35.7696, // lat
        500, // elevation in meters
      ] as any,

      heading: 0,
      tilt: 65,
    },
    environment: {
      weather: {
        type: "sunny",
      },
    },
  });

  view.popup.dockEnabled = true;
  view.popup.dockOptions.position = "top-right";
  view.popup.dockOptions.buttonEnabled = true;
  view.popup.dockOptions.breakpoint = false;


  view.ui.move("zoom", "top-right");
  view.ui.move("navigation-toggle", "top-right");
  view.ui.move("compass", "top-right");
  return view;
}
const addSceneLayer = (map: Map): SceneLayer => {
  const sceneLayer = new SceneLayer({
    portalItem: {
      id: "6bbdefe1f2434fea813eee5fd1fceb56",
    },
    renderer: getRendererBuildings(),
    popupEnabled: false
  });
  map.add(sceneLayer);
  return sceneLayer;
}
const addVehicles = async (map: Map): Promise<FeatureLayer> => {
  const vehicles = new FeatureLayer({
    portalItem: {
      id: "d8ee2aaaecc248f3bccd395109844546"
    },
    id: "vehicles",
    elevationInfo: { mode: "relative-to-ground", offset: 0 },
    renderer: getRendererVehicles(),
    outFields: ["*"],
    labelingInfo: [getVehicleLabels()],
    labelsVisible: true,
    definitionExpression: `groupnames like '%Recyc%' or groupnames like '%Garbage%' or groupnames like '%Yard%'`,
  });
  vehicles.refreshInterval = 0.1;
  map.add(vehicles);  
  await vehicles.when();
  return vehicles;
}
const addHistoryLayer = async (map: Map, view: SceneView): Promise<FeatureLayer> => {
  const history = new FeatureLayer({
    portalItem: {
      id: "8d573a0b2e1449d2be987b4c36e909ea"
    },
    id: "history",
    featureReduction: {type: 'cluster'},
    elevationInfo: { mode: "relative-to-ground", offset: 0 },
    popupEnabled: true,
    outFields: ["*"],
    visible: false
  });
  map.add(history);

  // await history.when();
  // history.renderer = await getHistoryRenderer(history, view) as any;
  // (history.renderer as __esri.ClassBreaksRenderer).classBreakInfos[0].symbol = {
  //   type: 'simple-marker',
  //   size: 10,
  //   outline: {
  //     color: 'white',
  //     opacity: 1
  //   }
  // } as any
  return history;
}
const getDayOfWeek = (): string => {
  const dt = new Date();
  const day = dt.getDay();
  let dow = "";
  if (day == 0) {
    dow = "Sunday";
  }
  if (day == 1) {
    dow = "Monday";
  }
  if (day == 2) {
    dow = "Tuesday";
  }
  if (day == 3) {
    dow = "Wednesday";
  }
  if (day == 4) {
    dow = "Thursday";
  }
  if (day == 5) {
    dow = "Friday";
  }
  if (day == 6) {
    dow = "Saturday";
  }
  return dow;
}
const addBoundaries = (map: Map, view: SceneView): FeatureLayer => {
  const boundaries = new FeatureLayer({
    portalItem: {
      id: "3b7134381fd8497fa523c42da3950ba8",
    },
    definitionExpression: `SERVICEDAY = '${getDayOfWeek()}'`,
    elevationInfo: { mode: "on-the-ground" },
  });
  typeRendererCreator
    .createRenderer({
      layer: boundaries,
      view: view,
      field: "GARBAGE",
      numTypes: 1000,
    })
    .then(function (response) {
      boundaries.renderer = response.renderer;
    });
  boundaries.when(async () => {
    const query = boundaries.createQuery();
    //query.where = boundaries.definitionExpression;
    const extent = await boundaries.queryExtent(query);
    view.goTo(
      { extent: extent.extent, zoom: 12, heading: 0, tilt: 50 },
      { easing: "linear" }
    );
  });
  map.add(boundaries);
  return boundaries  
}

const updateStats = async (vehicles: FeatureLayer): Promise<Stats> => {
  const count = await getVehicleCount(vehicles);
  const avg = await getAverageSpeed(vehicles);
  const driving = await getMovingVehicleCount(vehicles);
  return { vehicles: count, avgSpeed: avg, driving: driving };
};

const updateSupervisors = async (vehicles: FeatureLayer): Promise<string[]> => {
  const results = await vehicles.queryFeatures({
    where: `${vehicles.definitionExpression}`,
    returnDistinctValues: true,
    outFields: ["groupnames"],
    returnGeometry: false,
  });
  const supervisors: string[] = [];
  results.features.forEach((feature) => {
    const groupnames = feature
      .getAttribute("groupnames")
      .split("|") as string[];
    const supervisor = groupnames.filter((group) => group.match(/^\d00/));
    if (supervisor.length) {
      if (!supervisors.includes(supervisor[0])) {
        supervisors.push(supervisor[0]);
      }
    }
  });
  return supervisors.sort();
};

const getVehicleCount = async (vehicles: FeatureLayer) => {
  const query = vehicles.createQuery();
  query.where = `${vehicles.definitionExpression}`;
  const count = await vehicles.queryFeatureCount(query);
  return count;
};

const getMovingVehicleCount = async (vehicles: FeatureLayer) => {
  const query = vehicles.createQuery();
  query.where = `isdriving = 'true' and (${vehicles.definitionExpression})`;
  const count = await vehicles.queryFeatureCount(query);
  return count;
};
const getAverageSpeed = async (vehicles: FeatureLayer) => {
  const query = vehicles.createQuery();
  query.where = `isdriving = 'true' and (${vehicles.definitionExpression})`;
  query.outStatistics = [
    {
      statisticType: "avg",
      onStatisticField: "speed",
      outStatisticFieldName: "avg_speed",
    } as __esri.StatisticDefinition,
  ];
  const stats = await vehicles.queryFeatures(query);
  let speed = null;
  if (stats.features.length) {
    speed = stats.features[0].getAttribute("avg_speed");
  }
  return speed;
};

const getRendererBuildings = (): Renderer => {
  const c = [18, 151, 170, 0.25];
  const e = [0, 210, 240, 0.5];
  const sym = getBldgSymbol(c, e);
  const ren = {
    type: "simple",
    symbol: sym,
  };
  return ren as unknown as Renderer;
};

const getBldgSymbol = (color: Array<number>, edge: Array<number>) => {
  var sym = {
    type: "mesh-3d",
    symbolLayers: [
      {
        type: "fill",
        material: { color: color },
        edges: {
          type: "solid",
          color: edge,
          size: 1,
        },
      },
    ],
  };
  return sym;
};

const getRendererVehicles = (): Renderer => {
  var sym0 = {
    type: "point-3d",
    symbolLayers: [
      {
        type: "icon",
        resource: {
          href: "./images/garbage.png",
        },
        size: 20,
      },
    ],
    verticalOffset: {
      screenLength: 60,
      maxWorldLength: 220,
      minWorldLength: 60,
    },
    callout: {
      type: "line",
      size: 1.5,
      color: "#00d2f0",
    },
  };
  var sym1 = {
    type: "point-3d",
    symbolLayers: [
      {
        type: "icon",
        resource: {
          href: "./images/recycling.png",
        },
        size: 20,
      },
    ],
    verticalOffset: {
      screenLength: 50,
      maxWorldLength: 180,
      minWorldLength: 40,
    },
    callout: {
      type: "line",
      size: 1.5,
      color: "#38b849",
    },
  };
  var sym2 = {
    type: "point-3d",
    symbolLayers: [
      {
        type: "icon",
        resource: {
          href: "./images/yardwaste.png",
        },
        size: 20,
      },
    ],
    verticalOffset: {
      screenLength: 50,
      maxWorldLength: 180,
      minWorldLength: 40,
    },
    callout: {
      type: "line",
      size: 1.5,
      color: "#a7b937",
    },
  };
  const ren = {
    type: "unique-value",
    field: "alert",
    defaultSymbol: sym0,
    valueExpression: `When(Find('Garbage', $feature.groupnames) > -1, 'Garbage',Find('Recyc', $feature.groupnames) > -1, 'Recycling', Find('Yard', $feature.groupnames) > -1, 'Yardwaste', '')`,
    uniqueValueInfos: [
      { value: "Garbage", symbol: sym0 },
      { value: "Recycling", symbol: sym1 },
      { value: "Yardwaste", symbol: sym2 },
    ],
  };
  return ren as unknown as Renderer;
};

const goToSelectedVehicle = async (
  id: string,
  layer: FeatureLayer,
  view: SceneView
) => {
  const featureSet = await layer.queryFeatures({
    where: `deviceid = '${id}'`,
    outFields: ["objectid", "bearing", "deviceid"],
    returnGeometry: true,
  });
  if (featureSet.features.length) {
    view.goTo(
      {
        center: featureSet.features[0].geometry,
        zoom: 18,
        heading: featureSet.features[0].getAttribute("bearing"),
        tilt: 45,
      },
      { easing: "linear" }
    );
    view.popup.features = featureSet.features;
  }
};

const getVehicleLabels = () => {
  return new LabelClass({
    labelExpressionInfo: {
      expression: "When($feature.drivername != 'UnknownDriver', $feature.drivername, '')"  // Text for labels comes from COUNTY field
    },
    symbol: {
      type: "label-3d",  // autocasts as new LabelSymbol3D()
      symbolLayers: [{
        type: "text",  // autocasts as new TextSymbol3DLayer()
        material: { color: [ 255,255,255 ] },
        size: 12,  // Defined in points,
        halo: {
          color: [0,0,0,0.8],
          size: 2
        }
      } as any]
    }
  });

}


const getHistoryRenderer = async (layer: FeatureLayer, view: SceneView) => {
  const exp = "var age = DateDiff(Now(), Date($feature['DateTimeStamp']), 'hours');return age";
  const renderer = await colorRendererCreator.createContinuousRenderer({
    symbolType: "3d-flat",
    layer: layer,
    view: view,
    valueExpression: exp,
    minValue: 0,
    maxValue: 24
  });

  return renderer.renderer;
}