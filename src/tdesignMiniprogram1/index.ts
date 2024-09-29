import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function tdesignMiniprogram1() {
  return {
    uiName: 'tdesign-miniprogram',
    lib: 'tdesign-miniprogram',
    map: getPropsMap(),
  }
}

export function tdesignMiniprogram1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: true,
    prefix: '',
    isReact: true,
    lib: 'tdesign-miniprogram',
    // directives: directives.tdesignMiniprogram1,
  }
}
