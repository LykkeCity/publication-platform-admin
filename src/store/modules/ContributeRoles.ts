import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store';

interface IContributeRole {
    id: string;
    name: string;
}

@Module({ namespaced: true, name: 'ContributeRoles', store, dynamic: true })
class ContributeRolesModule extends VuexModule {
    private items: IContributeRole[] = [
        {
            id: "id1",
            name: "Role1"
        },
        {
            id: "id2",
            name: "Role2"
        }
    ];

    get roles(): IContributeRole[] {
        return this.items
    }
}

export default getModule(ContributeRolesModule);