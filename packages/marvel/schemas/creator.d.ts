
interface ICreatorDataWrapper extends IDataWrapper<ICreator> {}

interface ICreatorDataContainer extends IDataContainer<ICreator> {}

interface ICreator {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    suffix: string,
    fullName: string,
}
