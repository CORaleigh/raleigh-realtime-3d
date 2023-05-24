import { useEffect, useRef, useState } from "react";
import "./App.css";
import { createScene } from "./view";

import esriConfig from "@arcgis/core/config.js";
import { FilterValue, Stats } from "./props";
esriConfig.assetsPath = "./assets";

import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(window.location.href);

import "@esri/calcite-components/dist/components/calcite-list";
import "@esri/calcite-components/dist/components/calcite-list-item";
import "@esri/calcite-components/dist/components/calcite-combobox";
import "@esri/calcite-components/dist/components/calcite-combobox-item";

import {
  CalciteCombobox,
  CalciteComboboxItem,
  CalciteList,
  CalciteListItem,
} from "@esri/calcite-components-react";

function App() {
  const sceneDiv = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState<Stats>();
  const [view, setView] = useState<__esri.SceneView>();
  const [filters, setFilters] = useState<FilterValue[]>([
    {
      label: "ALL TRUCKS",
      where: `groupnames like '%Garbage%' or groupnames like '%Recyc%' or groupnames like '%Yard%'`,
      selected: true,
      image: "",
    },
    {
      label: "GARBAGE",
      where: `groupnames like '%Garbage%'`,
      selected: false,
      image: "images/garbage.png",
    },
    {
      label: "RECYCLING",
      where: `groupnames like '%Recyc%'`,
      selected: false,
      image: "images/recycling.png",
    },
    {
      label: "YARD WASTE",
      where: `groupnames like '%Yard%'`,
      selected: false,
      image: "images/yardwaste.png",
    },
  ]);

  const [supervisors, setSupervisors] = useState<string[]>([]);

  useEffect(() => {
    if (sceneDiv.current) {
      createScene(sceneDiv.current, setStats, setSupervisors).then(view => setView(view));
    }
  }, []);

  return (
    <div className="esri-view">
      <div className="header">
        <div className="header__inner">
          <div className="header__title">
            CITY OF RALEIGH<span></span>
          </div>
          <div className="header__subtitle">SOLID WASTE VEHICLES</div>
        </div>
        <CalciteList selectionMode="single">
          {filters.map((filter) => (
            <CalciteListItem
              key={filter.label}
              label={filter.label}
              selected={filter.selected}
              onCalciteListItemSelect={() => {
                filters.forEach((f) => {
                  f.selected = f.label === filter.label;
                });

                if (view) {
                  const layer = view.map.findLayerById(
                    "vehicles"
                  ) as __esri.FeatureLayer;
                  layer.definitionExpression = filter.where;
                  layer.refresh();
                }
              }}
            >
              {filter.label === "ALL TRUCKS" ? (
                ""
              ) : (
                <img
                  className="list-img"
                  slot="actions-end"
                  src={filter.image}
                />
              )}
            </CalciteListItem>
          ))}
        </CalciteList>

        <CalciteCombobox
          selectionMode="single"
          placeholder="Select a supervisor"
          label={""}
        >
          {supervisors.map((supervisor) => (
            <CalciteComboboxItem
              value={supervisor}
              textLabel={supervisor}
              onCalciteComboboxItemChange={e => {
                if (e.target.selected) {
                  if (view) {
                    const layer = view.map.findLayerById(
                      "vehicles"
                    ) as __esri.FeatureLayer;
                    layer.definitionExpression = `groupnames like '%${e.target.value}%'`;
                    layer.refresh();
                  }
                }
              }}
            ></CalciteComboboxItem>
          ))}
        </CalciteCombobox>
      </div>
      <div ref={sceneDiv}></div>
      <div className="bottom__content">
        <div className="stats">
          <div className="stat">
            <div className="card__title">VEHICLES</div>
            <span className="card__num">{stats?.vehicles}</span>
          </div>
          <div className="stat">
            <div className="card__title">DRIVING</div>
            <span className="card__num">{stats?.driving}</span>
          </div>
          <div className="stat">
            <div className="card__title">AVG SPEED</div>
            <span className="card__num">
              {stats?.avgSpeed ? stats?.avgSpeed?.toFixed(2) : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
