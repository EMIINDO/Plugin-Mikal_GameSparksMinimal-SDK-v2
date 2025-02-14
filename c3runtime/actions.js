"use strict";
{
    globalThis.C3.Plugins.Mikal_GameSparksMinimal.Acts = {
        Initpreview()
        {
            console.log("Initpreview() called.");
            //implementation
            const data = {
                key: this._apiKeyGS,
                secret: this._apiSecret,
                onNonce: this.onNonceGS,
                onInit: this.onInitGS,
                onMessage: this.onMessageGS,
                logger: console.log
            };

            this.gamesparks.initPreview(data);

        },

        sendwithdata(requesttype, jsondata)
        {
            //implementation
            console.log("***DEBUG*** sendwithdata() called. " + requesttype + "  " + jsondata);

            this.gamesparks.sendWithData(requesttype, JSON.parse(jsondata), this.onResponseGS);

        },

        Initlive()
        {
            console.log("Initlive() called.");
            //implementation
            const data = {
                key: this._apiKeyGS,
                secret: this._apiSecret,
                onNonce: this.onNonceGS,
                onInit: this.onInitGS,
                onMessage: this.onMessageGS,
                logger: console.log
            };

            this.gamesparks.initLive(data);

        },

        Sendwithdataid(requesttype, jsondata, requestid)
        {
            console.log("***DEBUG*** sendwithdata() called. " + requesttype + "  " + jsondata + " requestid: " + requestid);
            this.gamesparks.sendWithData(requesttype, JSON.parse(jsondata), this.onResponseGS, requestid);
        }
    };
}