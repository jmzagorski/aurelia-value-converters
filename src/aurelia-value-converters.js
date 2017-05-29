import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.globalResources(
    PLATFORM.moduleName('./date-format'),
    PLATFORM.moduleName('./sort'),
    PLATFORM.moduleName('./group')
  );
}
