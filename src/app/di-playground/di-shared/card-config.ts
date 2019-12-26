import { InjectionToken } from "@angular/core";

export interface CardConfig {
  title: string;
}

export const CARD_CONFIG_TOKEN = new InjectionToken("card-config-token", {
  providedIn: "root",
  factory: () => DEFAULT_CARD_CONFIG
});
export const DEFAULT_CARD_CONFIG = { title: "Simple Card" };
