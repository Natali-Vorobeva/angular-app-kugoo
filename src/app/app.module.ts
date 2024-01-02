import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { NavItemComponent } from './components/atoms/nav-item/nav-item.component';
import { NavComponent } from './components/molecules/nav/nav.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { SocialNavComponent } from './components/molecules/social-nav/social-nav.component';
import { TelNumberComponent } from './components/atoms/tel-number/tel-number.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { PayCardComponent } from './components/atoms/pay-card/pay-card.component';
import { PayCardsComponent } from './components/organisms/pay-cards/pay-cards.component';
import { BannerComponent } from './components/organisms/banner/banner.component';
import { TitleComponent } from './components/atoms/title/title.component';
import { CardItemComponent } from './components/molecules/card-item/card-item.component';
import { CardExtraServiceComponent } from './components/molecules/card-extra-service/card-extra-service.component';
import { ServiceCaseComponent } from './components/organisms/service-case/service-case.component';
import { ShowCaseComponent } from './components/organisms/show-case/show-case.component';
import { TitleUnitComponent } from './components/molecules/title-unit/title-unit.component';
import { CardPopularCategoriesComponent } from './components/molecules/card-popular-categories/card-popular-categories.component';
import { ShowPopularCategoriesComponent } from './components/organisms/show-popular-categories/show-popular-categories.component';
import { CommercialBreakComponent } from './components/organisms/commercial-break/commercial-break.component';
import { CardAdvantageComponent } from './components/molecules/card-advantage/card-advantage.component';
import { IFrameComponent } from './components/atoms/i-frame/i-frame.component';
import { ReviewsComponent } from './components/organisms/reviews/reviews.component';
import { SliderReviewsComponent } from './components/organisms/slider-reviews/slider-reviews.component';
import { VideoReviewsComponent } from './components/organisms/video-reviews/video-reviews.component';
import { SliderVideoReviewsComponent } from './components/organisms/slider-video-reviews/slider-video-reviews.component';
import { NewArticlesComponent } from './components/organisms/new-articles/new-articles.component';
import { SliderArticlesComponent } from './components/organisms/slider-articles/slider-articles.component';
import { FaqComponent } from './components/organisms/faq/faq.component';
import { PopularComponent } from './components/organisms/popular/popular.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavItemComponent,
    NavComponent,
    LogoComponent,
    SocialNavComponent,
    TelNumberComponent,
    ButtonComponent,
    InputComponent,
    PayCardComponent,
    PayCardsComponent,
    BannerComponent,
    TitleComponent,
    CardItemComponent,
    CardExtraServiceComponent,
    ServiceCaseComponent,
    ShowCaseComponent,
    TitleUnitComponent,
    CardPopularCategoriesComponent,
    ShowPopularCategoriesComponent,
    CommercialBreakComponent,
    CardAdvantageComponent,
    IFrameComponent,
    ReviewsComponent,
    SliderReviewsComponent,
    VideoReviewsComponent,
    SliderVideoReviewsComponent,
    NewArticlesComponent,
    SliderArticlesComponent,
    FaqComponent,
    PopularComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
