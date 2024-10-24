/// <reference types="vite/client" />
import { Directive } from "vue";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
      vAdminDisabled: Directive;
    }
  }
  