import { MP_SDK } from '../../public/mpsdk_bundle/sdk';

declare global {
  interface Window {
    MP_SDK: MP_SDK;
  }
}
