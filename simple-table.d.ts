import { DefineComponent, Plugin } from 'vue';

declare const SimpleTable: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default SimpleTable;
