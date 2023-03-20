import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from "@angular/router"

export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return super.shouldReuseRoute(future, current)
      && future.children.length > 0;
  }
}
