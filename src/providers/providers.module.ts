import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TeamsProvider,AlertsProvider } from './providers.index';
@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [],
    providers: [
        TeamsProvider,
        AlertsProvider
    ]
})
export class ProvidersModule {}
