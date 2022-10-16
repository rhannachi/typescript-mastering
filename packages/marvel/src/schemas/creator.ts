import {IDataWrapper} from "./generic";

export interface ICreatorDataWrapper extends IDataWrapper<ICreator> {}

// interface ICreatorDataContainer extends IDataContainer<ICreator> {}

export interface ICreator {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    suffix: string,
    fullName: string,
}
