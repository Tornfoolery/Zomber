import * as ZombieModule from "server/Enemies/zombie";

export interface ModuleInterface {
    ModelName: string;
    New(Model: Model): void;
}

export interface Modules {
    [Name: string] : ModuleInterface;
}

export const EnemyModules: Modules = {
    ["zombie"] : ZombieModule,
}