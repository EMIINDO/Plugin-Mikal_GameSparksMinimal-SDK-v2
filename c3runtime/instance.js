"use strict";
{
    globalThis.C3.Plugins.Mikal_GameSparksMinimal.Instance = class GameSparksMinimalInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            this.gamesparks = new GameSparks();

            this._apiKeyGS = 0;
            this._apiSecretGS = 0;

            if (properties) {
                this._apiKeyGS = properties[0];
                var apiSecretGS = properties[1];
            }
            else {
                console.log("***DEBUG*** GameSparksMinmal: Properties Null")
            }

            var runtime = this.runtime;
            var currInstance = this;
            var gamesparks = this.gamesparks;
            var myC3 = C3;

            this._lastMessageGS = "";
            this._lastResponseGS = "";

            this.onNonceGS = function (nonce) {
                return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(nonce, apiSecretGS));
            }

            ////////////////////////////////
            //// C3Memory
            this.C3Memory = {
                LastMessageGS: "", // Last GameSparks Message
                LastResponseGS: "" // Last GameSparks Response
            }

            const self = this;
            const Conditions = globalThis.C3.Plugins.Mikal_GameSparksMinimal.Cnds;

            ////////////////////////////////
            //// C3_triggers
            this.C3_trigger = {

                oninit: function () {
                    self.Call(Conditions.oninit);
                },
                onresponse: function () {
                    self.Call(Conditions.onresponse);
                },
                onmessage: function () {
                    self.Call(Conditions.onmessage);
                }

            };

            ////////////////////////////////
            //// CallFunction
            //// .... Call _trigger
            this.Call = function (_path) {
                const trigger = _path;

                self._trigger(trigger);
            };

            this.onInitGS = function () {
                currInstance.C3_trigger.oninit();
            }

            this.onMessageGS = function (message) {
                currInstance._lastMessageGS = JSON.stringify(message);
                // console.log("***DEBUG*** onMessageGS: "+currInstance._lastMessageGS);

                currInstance.C3_trigger.onmessage();
            }

            this.onResponseGS = function (response) {
                currInstance._lastResponseGS = JSON.stringify(response);
                // console.log("***DEBUG*** onResponseGS: "+currInstance._lastResponseGS);

                currInstance.C3_trigger.onresponse();
            }

        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }
    };
}