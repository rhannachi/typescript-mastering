import {IDataWrapper} from "./generic";

export type ICreatorDataWrapper = IDataWrapper<ICreator>

// interface ICreatorDataContainer extends IDataContainer<ICreator> {}

export interface ICreator {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    suffix: string,
    fullName: string,
}
