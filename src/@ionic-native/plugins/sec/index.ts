import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Sec
 * @description
 *
 * @usage
 * ```
 * import { Sec } from 'ionic-native';
 *
 *
 * constructor(private sec: Sec) { }
 *
 * ...
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'Sec',
  plugin: 'it.almaviva.sec', // npm package name, example: cordova-plugin-camera
  pluginRef: 'Sec', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Sec {
  /**
   * Prompts the user for rating
   * @param {Function} successCallback  Show the rating prompt successCallback.
   * @param {Function} errorCallback  Show the rating prompt errorCallback.
   */
  @Cordova()
  isRoot(successCallback: Function, errorCallback: Function): void { };

}
