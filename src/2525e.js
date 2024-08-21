import tsv2json from "./tsv2json.js";

import mil_std_common_m1 from "./../tsv-tables/Common Modifiers sector 1.tsv";
import mil_std_common_m2 from "./../tsv-tables/Common Modifiers sector 2.tsv";

import mil_std_air_mainIcon from "./../tsv-tables/Air.tsv";
import mil_std_air_m1 from "./../tsv-tables/Air sector 1.tsv";
import mil_std_air_m2 from "./../tsv-tables/Air sector 2.tsv";

import mil_std_air_missile_mainIcon from "./../tsv-tables/Air missile.tsv";
import mil_std_air_missile_m1 from "./../tsv-tables/Air missile sector 1.tsv";
import mil_std_air_missile_m2 from "./../tsv-tables/Air missile sector 2.tsv";

import mil_std_space_mainIcon from "./../tsv-tables/Space.tsv";
import mil_std_space_m1 from "./../tsv-tables/Space sector 1.tsv";
import mil_std_space_m2 from "./../tsv-tables/Space sector 2.tsv";

import mil_std_space_missile_mainIcon from "./../tsv-tables/Space missile.tsv";
import mil_std_space_missile_m1 from "./../tsv-tables/Space missile sector 1.tsv";
import mil_std_space_missile_m2 from "./../tsv-tables/Space missile sector 2.tsv";

import mil_std_land_unit_mainIcon from "./../tsv-tables/Land unit.tsv";
import mil_std_land_unit_m1 from "./../tsv-tables/Land unit sector 1.tsv";
import mil_std_land_unit_m2 from "./../tsv-tables/Land unit sector 2.tsv";

import mil_std_land_civilian_mainIcon from "./../tsv-tables/Land civilian.tsv";
import mil_std_land_civilian_m1 from "./../tsv-tables/Land civilian sector 1.tsv";
import mil_std_land_civilian_m2 from "./../tsv-tables/Land civilian sector 2.tsv";

import mil_std_land_equipment_mainIcon from "./../tsv-tables/Land equipment.tsv";
import mil_std_land_equipment_m1 from "./../tsv-tables/Land equipment sector 1.tsv";
import mil_std_land_equipment_m2 from "./../tsv-tables/Land equipment sector 2.tsv";

import mil_std_land_installation_mainIcon from "./../tsv-tables/Land installation.tsv";
import mil_std_land_installation_m1 from "./../tsv-tables/Land installation sector 1.tsv";
import mil_std_land_installation_m2 from "./../tsv-tables/Land installation sector 2.tsv";

import mil_std_control_measure_mainIcon from "./../tsv-tables/Control Measures.tsv";
import mil_std_control_measure_m1 from "./../tsv-tables/Control Measures sector 1.tsv";
import mil_std_control_measure_m2 from "./../tsv-tables/Control Measures sector 2.tsv";

import mil_std_sea_surface_mainIcon from "./../tsv-tables/Sea surface.tsv";
import mil_std_sea_surface_m1 from "./../tsv-tables/Sea surface sector 1.tsv";
import mil_std_sea_surface_m2 from "./../tsv-tables/Sea surface sector 2.tsv";

import mil_std_sea_subsurface_mainIcon from "./../tsv-tables/Sea subsurface.tsv";
import mil_std_sea_subsurface_m1 from "./../tsv-tables/Sea subsurface sector 1.tsv";
import mil_std_sea_subsurface_m2 from "./../tsv-tables/Sea subsurface sector 2.tsv";

import mil_std_mine_warfare_mainIcon from "./../tsv-tables/Mine warfare.tsv";
//import mil_std_sea_subsurface_m1 from "./../tsv-tables/Sea subsurface sector 1.tsv";
//import mil_std_sea_subsurface_m2 from "./../tsv-tables/Sea subsurface sector 2.tsv";

import mil_std_activities_mainIcon from "./../tsv-tables/Activities.tsv";
import mil_std_activities_m1 from "./../tsv-tables/Activities sector 1.tsv";
import mil_std_activities_m2 from "./../tsv-tables/Activities sector 2.tsv";

import mil_std_signals_intelligence_mainIcon from "./../tsv-tables/Signals intelligence.tsv";
import mil_std_signals_intelligence_m1 from "./../tsv-tables/Signals intelligence sector 1.tsv";
import mil_std_signals_intelligence_m2 from "./../tsv-tables/Signals intelligence sector 2.tsv";

import mil_std_cyberspace_mainIcon from "./../tsv-tables/Cyberspace.tsv";
import mil_std_cyberspace_m1 from "./../tsv-tables/Signals intelligence sector 1.tsv";
import mil_std_cyberspace_m2 from "./../tsv-tables/Sea subsurface sector 2.tsv";

export default {
  common: {
    symbolset: "",
    name: "",
    mainIcon: tsv2json(""),
    modifier1: tsv2json(mil_std_common_m1),
    modifier2: tsv2json(mil_std_common_m2),
  },
  "01": {
    symbolset: "01",
    name: "Air",
    mainIcon: tsv2json(mil_std_air_mainIcon),
    modifier1: tsv2json(mil_std_air_m1),
    modifier2: tsv2json(mil_std_air_m2),
  },
  "02": {
    symbolset: "02",
    name: "Air missile",
    mainIcon: tsv2json(mil_std_air_missile_mainIcon),
    modifier1: tsv2json(mil_std_air_missile_m1),
    modifier2: tsv2json(mil_std_air_missile_m2),
  },
  "05": {
    symbolset: "05",
    name: "Space",
    mainIcon: tsv2json(mil_std_space_mainIcon),
    modifier1: tsv2json(mil_std_space_m1),
    modifier2: tsv2json(mil_std_space_m2),
  },
  "06": {
    symbolset: "06",
    name: "Space Missile",
    mainIcon: tsv2json(mil_std_space_missile_mainIcon),
    modifier1: tsv2json(mil_std_space_missile_m1),
    modifier2: tsv2json(mil_std_space_missile_m2),
  },
  10: {
    symbolset: "10",
    name: "Land unit",
    mainIcon: tsv2json(mil_std_land_unit_mainIcon),
    modifier1: tsv2json(mil_std_land_unit_m1),
    modifier2: tsv2json(mil_std_land_unit_m2),
  },
  11: {
    symbolset: "11",
    name: "Land civilian unit/Organization",
    mainIcon: tsv2json(mil_std_land_civilian_mainIcon),
    modifier1: tsv2json(mil_std_land_civilian_m1),
    modifier2: tsv2json(mil_std_land_civilian_m2),
  },
  15: {
    symbolset: "15",
    name: "Land equipment",
    mainIcon: tsv2json(mil_std_land_equipment_mainIcon),
    modifier1: tsv2json(mil_std_land_equipment_m1),
    modifier2: tsv2json(mil_std_land_equipment_m2),
  },
  20: {
    symbolset: "20",
    name: "Land installations",
    mainIcon: tsv2json(mil_std_land_installation_mainIcon),
    modifier1: tsv2json(mil_std_land_installation_m1),
    modifier2: tsv2json(mil_std_land_installation_m2),
  },
  25: {
    symbolset: "25",
    name: "Control measure",
    mainIcon: tsv2json(mil_std_control_measure_mainIcon),
    modifier1: tsv2json(mil_std_control_measure_m1),
    modifier2: tsv2json(mil_std_control_measure_m2),
  },
  30: {
    symbolset: "30",
    name: "Sea surface",
    mainIcon: tsv2json(mil_std_sea_surface_mainIcon),
    modifier1: tsv2json(mil_std_sea_surface_m1),
    modifier2: tsv2json(mil_std_sea_surface_m2),
  },
  35: {
    symbolset: "35",
    name: "Sea subsurface",
    mainIcon: tsv2json(mil_std_sea_subsurface_mainIcon),
    modifier1: tsv2json(mil_std_sea_subsurface_m1),
    modifier2: tsv2json(mil_std_sea_subsurface_m2),
  },
  36: {
    symbolset: "36",
    name: "Mine warfare",
    mainIcon: tsv2json(mil_std_mine_warfare_mainIcon),
    modifier1: tsv2json(""),
    modifier2: tsv2json(""),
  },
  40: {
    symbolset: "40",
    name: "Activity/Event",
    mainIcon: tsv2json(mil_std_activities_mainIcon),
    modifier1: tsv2json(mil_std_activities_m1),
    modifier2: tsv2json(mil_std_activities_m2),
  },
  50: {
    symbolset: "50",
    name: "Signals Intelligence – Space",
    mainIcon: tsv2json(mil_std_signals_intelligence_mainIcon),
    modifier1: tsv2json(mil_std_signals_intelligence_m1),
    modifier2: tsv2json(mil_std_signals_intelligence_m2),
  },
  51: {
    symbolset: "51",
    name: "Signals Intelligence – Air",
    mainIcon: tsv2json(mil_std_signals_intelligence_mainIcon),
    modifier1: tsv2json(mil_std_signals_intelligence_m1),
    modifier2: tsv2json(mil_std_signals_intelligence_m2),
  },
  52: {
    symbolset: "52",
    name: "Signals Intelligence – Land",
    mainIcon: tsv2json(mil_std_signals_intelligence_mainIcon),
    modifier1: tsv2json(mil_std_signals_intelligence_m1),
    modifier2: tsv2json(mil_std_signals_intelligence_m2),
  },
  53: {
    symbolset: "53",
    name: "Signals Intelligence – Surface",
    mainIcon: tsv2json(mil_std_signals_intelligence_mainIcon),
    modifier1: tsv2json(mil_std_signals_intelligence_m1),
    modifier2: tsv2json(mil_std_signals_intelligence_m2),
  },
  54: {
    symbolset: "54",
    name: "Signals Intelligence – Subsurface",
    mainIcon: tsv2json(mil_std_signals_intelligence_mainIcon),
    modifier1: tsv2json(mil_std_signals_intelligence_m1),
    modifier2: tsv2json(mil_std_signals_intelligence_m2),
  },
  60: {
    symbolset: "60",
    name: "Cyberspace",
    mainIcon: tsv2json(mil_std_cyberspace_mainIcon),
    modifier1: tsv2json(mil_std_cyberspace_m1),
    modifier2: tsv2json(mil_std_cyberspace_m2),
  },
};
