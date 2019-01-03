import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store';

interface IArticleInfo {
    id: string;
    title: string;

    brief: string;

}

@Module({ namespaced: true, name: 'Articles', store, dynamic: true })
class ArticlesModule extends VuexModule {
    private items: IArticleInfo[] = [
        {
            id: "id1",
            title: "Test Artilcle 1",
            brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"

        },
        {
            id: "id2",
            title: "Test Artilcle 2",
            brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            id: "id3",
            title: "Test Artilcle 3",
            brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        }
    ];

    get articles(): IArticleInfo[] {
        return this.items
    }
}

export default getModule(ArticlesModule);