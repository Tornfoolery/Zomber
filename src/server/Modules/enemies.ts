import { ReplicatedStorage, Workspace, HttpService } from "@rbxts/services";
import { ModuleInterface, EnemyModules } from "server/Util/enemies";

const Assets = ReplicatedStorage.WaitForChild("TS").WaitForChild("Assets") as Folder;
const EnemyModels = Assets.WaitForChild("EnemyModels") as Folder;

const EnemyFolder = new Instance("Folder") as Folder;
EnemyFolder.Name = "Enemies";
EnemyFolder.Parent = Workspace;

const Enemies: {[ID: string]: {
    Model: Model,
    Module: ModuleInterface,
}} = {}

const EnemyIDs: string[] = [];

export function NewEnemy(Name: string) {
    const Module: ModuleInterface = EnemyModules[Name];
    if (!Module) { return }

    const Model = EnemyModels.FindFirstChild(Module.ModelName) as Model;
    if (Model) {
        const NewModel = Model.Clone();
        Module.New(NewModel);
        NewModel.Parent = EnemyFolder;

        const ID = HttpService.GenerateGUID() as string;
        Enemies[ID] = {
            Model: NewModel,
            Module: Module,
        };

        EnemyIDs.push(ID);
    }
}

export function UpdateEnemy() {
    
}

export function UpdateEnemies() {
    for (const ID of EnemyIDs) {
        const Enemy = Enemies[ID];
        
    }
}