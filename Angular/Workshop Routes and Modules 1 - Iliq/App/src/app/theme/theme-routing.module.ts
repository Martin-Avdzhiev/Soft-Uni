import { RouterModule, Routes } from "@angular/router";
import { ThemeListComponent } from "./theme-list/theme-list.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemeDetailComponent } from "./theme-detail/theme-detail.component";
import { MainComponent } from "./main/main.component";
import { ThemeResolver } from "./resolvers/theme.resolver";

const routes: Routes = [
    {
        path:'theme',
        children: [
            {
                path: 'recent',
                component: MainComponent
            },
            {
                path: 'new',
                component: NewThemeComponent
            },
            {
                path: 'details/:id',
                resolve: {
                    theme: ThemeResolver
                },
                component: ThemeDetailComponent
            }
        ]
    }
]

export const ThemeRoutingModule = RouterModule.forChild(routes);