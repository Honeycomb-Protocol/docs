import hiveControlIDL from "../node_modules/@honeycomb-protocol/hive-control/hpl_hive_control.json";
import currencyManagerIDL from "../node_modules/@honeycomb-protocol/currency-manager/hpl_currency_manager.json";
import nectarStakingIDL from "../node_modules/@honeycomb-protocol/nectar-staking/hpl_nectar_staking.json";
import nectarMissionsIDL from "../node_modules/@honeycomb-protocol/nectar-missions/hpl_nectar_missions.json";

export const camelToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const snakeToTitleCase = (str) =>
  str.replaceAll("_", " ").replaceAll(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

export const camelToTitleCase = (str) =>
  snakeToTitleCase(camelToSnakeCase(str));

export const IDLs = {
  "hive-control": hiveControlIDL,
  "currency-manager": currencyManagerIDL,
  "nectar-staking": nectarStakingIDL,
  "nectar-missions": nectarMissionsIDL,
};
