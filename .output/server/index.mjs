globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-02T03:09:31.805Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-02T03:09:31.848Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/1-BOZ0T9UL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-/brVOfwZiCncmfhbrMfLVE9Id6g\"",
		"mtime": "2026-08-02T08:53:03.494Z",
		"size": 53,
		"path": "../public/assets/1-BOZ0T9UL.js"
	},
	"/assets/1-CRGUkF02.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-RL7f6+kAiN7VMXI6v4FIfQTOj2U\"",
		"mtime": "2026-08-02T08:53:03.495Z",
		"size": 52,
		"path": "../public/assets/1-CRGUkF02.js"
	},
	"/assets/10--dmRCQUf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-wv/NT39HSBCfAPy5sYX21JHVd54\"",
		"mtime": "2026-08-02T08:53:03.497Z",
		"size": 53,
		"path": "../public/assets/10--dmRCQUf.js"
	},
	"/assets/10-DvNO4E32.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-3lS6qUe6VP71+z1VqbmOn32suMs\"",
		"mtime": "2026-08-02T08:53:03.499Z",
		"size": 54,
		"path": "../public/assets/10-DvNO4E32.js"
	},
	"/assets/11-BMFEETqM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-7/4qH5hpiZ0u5nwi+UbR2xjvFm8\"",
		"mtime": "2026-08-02T08:53:03.501Z",
		"size": 53,
		"path": "../public/assets/11-BMFEETqM.js"
	},
	"/assets/11-BwxqcnCI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-w2oGodTxrfS029q2bEi1cNDUMnw\"",
		"mtime": "2026-08-02T08:53:03.503Z",
		"size": 54,
		"path": "../public/assets/11-BwxqcnCI.js"
	},
	"/assets/10-BH5VMBpC.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6b25e-PVvaFqKvX8hRAMgEppUPILhhEoc\"",
		"mtime": "2026-08-02T08:53:03.587Z",
		"size": 438878,
		"path": "../public/assets/10-BH5VMBpC.jpeg"
	},
	"/assets/11-CBFbOOtJ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"47b0a-YXIOxwi0f3S0eolTdFlZZ09QO4I\"",
		"mtime": "2026-08-02T08:53:03.588Z",
		"size": 293642,
		"path": "../public/assets/11-CBFbOOtJ.jpeg"
	},
	"/assets/12-CWpbTEmy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-pMDspG4Z88OMmJg5ajd0bDaNMaM\"",
		"mtime": "2026-08-02T08:53:03.504Z",
		"size": 54,
		"path": "../public/assets/12-CWpbTEmy.js"
	},
	"/assets/12-hrzadDPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-Wag1XJKIKXfaJ2cF/zv6vtEXQKE\"",
		"mtime": "2026-08-02T08:53:03.506Z",
		"size": 53,
		"path": "../public/assets/12-hrzadDPT.js"
	},
	"/assets/13-BUz1KmzL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-S5KwznZIQTPXSBrgQYW1diJ3OJs\"",
		"mtime": "2026-08-02T08:53:03.508Z",
		"size": 54,
		"path": "../public/assets/13-BUz1KmzL.js"
	},
	"/assets/13-CHQcaX69.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-xZxKQ1HnSwSW8F/DFsRbE//nSGg\"",
		"mtime": "2026-08-02T08:53:03.510Z",
		"size": 53,
		"path": "../public/assets/13-CHQcaX69.js"
	},
	"/assets/14-B5YDIsmV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-QTW2n5wdR0wV7ebaZJD4gJes9L8\"",
		"mtime": "2026-08-02T08:53:03.512Z",
		"size": 53,
		"path": "../public/assets/14-B5YDIsmV.js"
	},
	"/assets/14-DL5JPJv6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ffeb-PuAYeusW0E7vAYnKh3zTuNdi9/A\"",
		"mtime": "2026-08-02T08:53:03.613Z",
		"size": 131051,
		"path": "../public/assets/14-DL5JPJv6.jpeg"
	},
	"/assets/1-BBCajVgI.mp4": {
		"type": "video/mp4",
		"etag": "\"f2cce-gcLr4cH/LsI07QLLpZfyDRlFXJo\"",
		"mtime": "2026-08-02T08:53:03.579Z",
		"size": 994510,
		"path": "../public/assets/1-BBCajVgI.mp4"
	},
	"/assets/12-92VUGBM9.mp4": {
		"type": "video/mp4",
		"etag": "\"dc9b9-yZXDexA3f3IUl1BWx8mLaKf19B4\"",
		"mtime": "2026-08-02T08:53:03.593Z",
		"size": 903609,
		"path": "../public/assets/12-92VUGBM9.mp4"
	},
	"/assets/11-CIDulVkR.mp4": {
		"type": "video/mp4",
		"etag": "\"11fe3a-Ndgh95XjFMoWXGYuc2qAdFkkIBI\"",
		"mtime": "2026-08-02T08:53:03.591Z",
		"size": 1179194,
		"path": "../public/assets/11-CIDulVkR.mp4"
	},
	"/assets/1-DsDBh6oo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1367b4-0Zh0J+5ACubVnAfu/c6r/1yhFlw\"",
		"mtime": "2026-08-02T08:53:03.581Z",
		"size": 1271732,
		"path": "../public/assets/1-DsDBh6oo.jpeg"
	},
	"/assets/12-BhOC_Lqq.jpeg": {
		"type": "image/jpeg",
		"etag": "\"167ce4-K8iavrN8VLEQWfNNKDeQlI3mAdA\"",
		"mtime": "2026-08-02T08:53:03.596Z",
		"size": 1473764,
		"path": "../public/assets/12-BhOC_Lqq.jpeg"
	},
	"/assets/13-1-dWbW35.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1b46d9-e5/QLu7TBZr3lfcEeBwmYP1ZB0U\"",
		"mtime": "2026-08-02T08:53:03.599Z",
		"size": 1787609,
		"path": "../public/assets/13-1-dWbW35.jpeg"
	},
	"/assets/14-fyGAt3dN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-M1qSCbWRWgr1lMXlftZBYs7byUo\"",
		"mtime": "2026-08-02T08:53:03.514Z",
		"size": 54,
		"path": "../public/assets/14-fyGAt3dN.js"
	},
	"/assets/15-D4b7SE9G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-kL6lHeRll3dgz8SXn3ZZ0m63+cQ\"",
		"mtime": "2026-08-02T08:53:03.515Z",
		"size": 53,
		"path": "../public/assets/15-D4b7SE9G.js"
	},
	"/assets/15-DNXi5T6s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-nUW3XJEpLS5psPxDwtUCzKFX48w\"",
		"mtime": "2026-08-02T08:53:03.517Z",
		"size": 54,
		"path": "../public/assets/15-DNXi5T6s.js"
	},
	"/assets/16-DFHrb2N_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-dNrnZ/HR7TADlLoc008xUB9FAfI\"",
		"mtime": "2026-08-02T08:53:03.519Z",
		"size": 54,
		"path": "../public/assets/16-DFHrb2N_.js"
	},
	"/assets/15-Cd8lnvOy.jpeg": {
		"type": "image/jpeg",
		"etag": "\"34e7b-NSIWhM+9/4aQRXerq69RQXsUiVg\"",
		"mtime": "2026-08-02T08:53:03.623Z",
		"size": 216699,
		"path": "../public/assets/15-Cd8lnvOy.jpeg"
	},
	"/assets/17-BFu3xGYi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-3ye015ojAKalZ9nDY8OKb+0iRHg\"",
		"mtime": "2026-08-02T08:53:03.520Z",
		"size": 54,
		"path": "../public/assets/17-BFu3xGYi.js"
	},
	"/assets/16-BQEpnupa.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3fe51-E/aVP8xGdWg+aUkmWPaO4RdKq+o\"",
		"mtime": "2026-08-02T08:53:03.625Z",
		"size": 261713,
		"path": "../public/assets/16-BQEpnupa.jpeg"
	},
	"/assets/18-B35I1Q1u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-nv0dtUzR7qMq2sTIntne+38wmSc\"",
		"mtime": "2026-08-02T08:53:03.522Z",
		"size": 54,
		"path": "../public/assets/18-B35I1Q1u.js"
	},
	"/assets/17-CnM_LPRD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2c343-1n52M94HwxKRVGKUGv08tWwpGb4\"",
		"mtime": "2026-08-02T08:53:03.627Z",
		"size": 181059,
		"path": "../public/assets/17-CnM_LPRD.jpeg"
	},
	"/assets/18-B7Fnnmsd.jpeg": {
		"type": "image/jpeg",
		"etag": "\"24fb6-088TeyhGdiimAaqd/kpQN/pFlGs\"",
		"mtime": "2026-08-02T08:53:03.629Z",
		"size": 151478,
		"path": "../public/assets/18-B7Fnnmsd.jpeg"
	},
	"/assets/19-BEQ3uuiz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-Dq0WHSoTkUr+VZU6A2E7qmgoD88\"",
		"mtime": "2026-08-02T08:53:03.524Z",
		"size": 54,
		"path": "../public/assets/19-BEQ3uuiz.js"
	},
	"/assets/2-Ciyc7tDP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-gP/rLh2PkidV4v5eoF/IQvo1sdw\"",
		"mtime": "2026-08-02T08:53:03.526Z",
		"size": 53,
		"path": "../public/assets/2-Ciyc7tDP.js"
	},
	"/assets/2-DDudBbZo2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-H95PxWbxYVHEAayW6WRCtJRQDLs\"",
		"mtime": "2026-08-02T08:53:03.527Z",
		"size": 52,
		"path": "../public/assets/2-DDudBbZo2.js"
	},
	"/assets/20-9JZCawet.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-N5gVQI79wSp9s7GzfnxJn0hW71g\"",
		"mtime": "2026-08-02T08:53:03.529Z",
		"size": 54,
		"path": "../public/assets/20-9JZCawet.js"
	},
	"/assets/21-Ba3EgOVh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-qohfACsqxVGpeRI/s9Gr8O/EZaU\"",
		"mtime": "2026-08-02T08:53:03.531Z",
		"size": 54,
		"path": "../public/assets/21-Ba3EgOVh.js"
	},
	"/assets/10-5DH-Mq3I.mp4": {
		"type": "video/mp4",
		"etag": "\"328277-CwPwueEoPruJLWrS51BZV0EaCkk\"",
		"mtime": "2026-08-02T08:53:03.585Z",
		"size": 3310199,
		"path": "../public/assets/10-5DH-Mq3I.mp4"
	},
	"/assets/2-HL_lb7VK.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1060e2-2O2wbVQv+O/UM6i0p517QYBbquk\"",
		"mtime": "2026-08-02T08:53:03.652Z",
		"size": 1073378,
		"path": "../public/assets/2-HL_lb7VK.jpeg"
	},
	"/assets/22-9JZCawet.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-N5gVQI79wSp9s7GzfnxJn0hW71g\"",
		"mtime": "2026-08-02T08:53:03.533Z",
		"size": 54,
		"path": "../public/assets/22-9JZCawet.js"
	},
	"/assets/23-D2YlylPs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-aPCfzCFsY5iEW5Az3cqBKmQWrUY\"",
		"mtime": "2026-08-02T08:53:03.535Z",
		"size": 54,
		"path": "../public/assets/23-D2YlylPs.js"
	},
	"/assets/24-WeeR2pOx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-r/grS5o2dYZ+J9ChQceg05Fh078\"",
		"mtime": "2026-08-02T08:53:03.537Z",
		"size": 54,
		"path": "../public/assets/24-WeeR2pOx.js"
	},
	"/assets/25-OzIEn8VF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-zntGZTl7Pv87BRMc+QZ61Pzhx1w\"",
		"mtime": "2026-08-02T08:53:03.538Z",
		"size": 54,
		"path": "../public/assets/25-OzIEn8VF.js"
	},
	"/assets/26-KQKJk-Te.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-hjiRxF/PLVtsB3eB+VfQqC23ydw\"",
		"mtime": "2026-08-02T08:53:03.541Z",
		"size": 54,
		"path": "../public/assets/26-KQKJk-Te.js"
	},
	"/assets/27-Ba3EgOVh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-qohfACsqxVGpeRI/s9Gr8O/EZaU\"",
		"mtime": "2026-08-02T08:53:03.543Z",
		"size": 54,
		"path": "../public/assets/27-Ba3EgOVh.js"
	},
	"/assets/28-61-Uih-9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-i7/nqfY1VEGXBPnlD3V3Zcyan9w\"",
		"mtime": "2026-08-02T08:53:03.544Z",
		"size": 54,
		"path": "../public/assets/28-61-Uih-9.js"
	},
	"/assets/29-BZ1CLvNX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-d/FsvURQI4PtlJzneNRtpkNXzG4\"",
		"mtime": "2026-08-02T08:53:03.546Z",
		"size": 54,
		"path": "../public/assets/29-BZ1CLvNX.js"
	},
	"/assets/3-B5eU7Lef.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-oFNstDNLkoeScy+MeDQr3PIKIJk\"",
		"mtime": "2026-08-02T08:53:03.548Z",
		"size": 52,
		"path": "../public/assets/3-B5eU7Lef.js"
	},
	"/assets/3-CzTqyfLR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-/VNtCwAgdxPeHoo0Q15KGks3Kgw\"",
		"mtime": "2026-08-02T08:53:03.549Z",
		"size": 53,
		"path": "../public/assets/3-CzTqyfLR.js"
	},
	"/assets/30-B1aL5auZ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3352a-xzVcLRTW0Os/so9td23f5mVnUCU\"",
		"mtime": "2026-08-02T08:53:03.750Z",
		"size": 210218,
		"path": "../public/assets/30-B1aL5auZ.jpeg"
	},
	"/assets/30-CddZlYZe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36-qtBPVeAAZx25o4Ukwcq+dmjYv7U\"",
		"mtime": "2026-08-02T08:53:03.550Z",
		"size": 54,
		"path": "../public/assets/30-CddZlYZe.js"
	},
	"/assets/4-BxvVwbO0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-KrfAIAuaxJpQ4rRm5Hk08uYuQ64\"",
		"mtime": "2026-08-02T08:53:03.551Z",
		"size": 53,
		"path": "../public/assets/4-BxvVwbO0.js"
	},
	"/assets/4-BzWf61aO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-tlSTiCTzWCi7Oi6comn4ZjHS4Zo\"",
		"mtime": "2026-08-02T08:53:03.554Z",
		"size": 52,
		"path": "../public/assets/4-BzWf61aO.js"
	},
	"/assets/5-B1FHGOg-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-ToCeOq7nxnE3Sv0CyjTSnku4Dy0\"",
		"mtime": "2026-08-02T08:53:03.555Z",
		"size": 52,
		"path": "../public/assets/5-B1FHGOg-.js"
	},
	"/assets/3-CDioVrLg.mp4": {
		"type": "video/mp4",
		"etag": "\"187467-EMrAwPy+c8AjqquPTSYUF04r+H0\"",
		"mtime": "2026-08-02T08:53:03.744Z",
		"size": 1602663,
		"path": "../public/assets/3-CDioVrLg.mp4"
	},
	"/assets/3-Kh7E7xM_.jpeg": {
		"type": "image/jpeg",
		"etag": "\"141c7e-Q8aGZlf3rGaAm+0KaXQ2Hj8CXsk\"",
		"mtime": "2026-08-02T08:53:03.748Z",
		"size": 1318014,
		"path": "../public/assets/3-Kh7E7xM_.jpeg"
	},
	"/assets/4-R3v1u3Sp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16c36a-02Xjax3ZUjLWUvEbfxYPDo5ImQc\"",
		"mtime": "2026-08-02T08:53:03.760Z",
		"size": 1491818,
		"path": "../public/assets/4-R3v1u3Sp.jpeg"
	},
	"/assets/5-oBAiZnPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-vGtgtxkTBfBx/uixg75we7pd84c\"",
		"mtime": "2026-08-02T08:53:03.557Z",
		"size": 53,
		"path": "../public/assets/5-oBAiZnPT.js"
	},
	"/assets/5-DQ_xRApp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16dc62-/vOOsk5HnYTtSAdDuLUhT93KUjw\"",
		"mtime": "2026-08-02T08:53:03.769Z",
		"size": 1498210,
		"path": "../public/assets/5-DQ_xRApp.jpeg"
	},
	"/assets/13-DbA-L38h.mp4": {
		"type": "video/mp4",
		"etag": "\"7bf48d-J59Sm3Mx3gfElYVpQqpNlGyFr3U\"",
		"mtime": "2026-08-02T08:53:03.604Z",
		"size": 8123533,
		"path": "../public/assets/13-DbA-L38h.mp4"
	},
	"/assets/14-BQu__jE8.mp4": {
		"type": "video/mp4",
		"etag": "\"7e5c78-ACTzSsJGodqyRxB9UaRKSRRBhNU\"",
		"mtime": "2026-08-02T08:53:03.611Z",
		"size": 8281208,
		"path": "../public/assets/14-BQu__jE8.mp4"
	},
	"/assets/6-CSSACn3o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-TIGHJbuvgaPqH0HTRsgh/g/YZhE\"",
		"mtime": "2026-08-02T08:53:03.559Z",
		"size": 53,
		"path": "../public/assets/6-CSSACn3o.js"
	},
	"/assets/6-CwNxKOim.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-dFoQk7kkXXoYG/bWjyv245xVu2E\"",
		"mtime": "2026-08-02T08:53:03.561Z",
		"size": 52,
		"path": "../public/assets/6-CwNxKOim.js"
	},
	"/assets/2--M7aBY3r.mp4": {
		"type": "video/mp4",
		"etag": "\"64be37-/4pEe35YdLe2cPJ9z93eIE3tPwU\"",
		"mtime": "2026-08-02T08:53:03.650Z",
		"size": 6602295,
		"path": "../public/assets/2--M7aBY3r.mp4"
	},
	"/assets/7-BNuoK3fQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-m8K9qKGBjth8F1vH2K2bPoQCQ2s\"",
		"mtime": "2026-08-02T08:53:03.562Z",
		"size": 53,
		"path": "../public/assets/7-BNuoK3fQ.js"
	},
	"/assets/5-CrPEGeAg.mp4": {
		"type": "video/mp4",
		"etag": "\"2a2ae0-3LoVWy9IOlek4ST27kjipwelNd4\"",
		"mtime": "2026-08-02T08:53:03.765Z",
		"size": 2763488,
		"path": "../public/assets/5-CrPEGeAg.mp4"
	},
	"/assets/7-D4kzD2uY.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2f7e4-LR6SWngRsjFmlTbauNwMU+/HXl8\"",
		"mtime": "2026-08-02T08:53:03.782Z",
		"size": 194532,
		"path": "../public/assets/7-D4kzD2uY.jpeg"
	},
	"/assets/6-BqYuvIU9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16a15d-ao+MXMjvZk3UddTbKmpxgzBduDY\"",
		"mtime": "2026-08-02T08:53:03.776Z",
		"size": 1483101,
		"path": "../public/assets/6-BqYuvIU9.jpeg"
	},
	"/assets/7-DV9htgBc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-nzCckfovqAB15g4DqydvF1pK63s\"",
		"mtime": "2026-08-02T08:53:03.565Z",
		"size": 52,
		"path": "../public/assets/7-DV9htgBc.js"
	},
	"/assets/6-BddMa-TI.mp4": {
		"type": "video/mp4",
		"etag": "\"1a8a41-/CamAfVB1eafKTCIBfdM0imVuQ8\"",
		"mtime": "2026-08-02T08:53:03.772Z",
		"size": 1739329,
		"path": "../public/assets/6-BddMa-TI.mp4"
	},
	"/assets/7-BIqCxLvU.mp4": {
		"type": "video/mp4",
		"etag": "\"1b163b-dePSJVybmdAd04OrQ6R7bcfVQlM\"",
		"mtime": "2026-08-02T08:53:03.780Z",
		"size": 1775163,
		"path": "../public/assets/7-BIqCxLvU.mp4"
	},
	"/assets/15-BZlNT7eT.mp4": {
		"type": "video/mp4",
		"etag": "\"7e492b-GyNVzAFJZhe60sz65S+mmVFxK7Y\"",
		"mtime": "2026-08-02T08:53:03.621Z",
		"size": 8276267,
		"path": "../public/assets/15-BZlNT7eT.mp4"
	},
	"/assets/8-DSgYtDly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-ToqU8jnoO9KS/eWmiW9N94rJjO0\"",
		"mtime": "2026-08-02T08:53:03.566Z",
		"size": 52,
		"path": "../public/assets/8-DSgYtDly.js"
	},
	"/assets/8-vt_cFaUu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-+Dc2DOYtdQKucKujY/30fbZgOII\"",
		"mtime": "2026-08-02T08:53:03.568Z",
		"size": 53,
		"path": "../public/assets/8-vt_cFaUu.js"
	},
	"/assets/9-3xwVZBRy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-pnSHYgDG/ffa7xrzRfzJNEf+5bo\"",
		"mtime": "2026-08-02T08:53:03.569Z",
		"size": 53,
		"path": "../public/assets/9-3xwVZBRy.js"
	},
	"/assets/9-B4BWi9Kx.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5f935-KQRuezzMQcqJiHPjFAQNIcLGuYw\"",
		"mtime": "2026-08-02T08:53:03.795Z",
		"size": 391477,
		"path": "../public/assets/9-B4BWi9Kx.jpeg"
	},
	"/assets/8-CTdilytT.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1271aa-BAonLhskmFqHzzoKcihaAG1Rg1k\"",
		"mtime": "2026-08-02T08:53:03.786Z",
		"size": 1208746,
		"path": "../public/assets/8-CTdilytT.jpeg"
	},
	"/assets/9-D87iDMsx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-heVIMb7xrevzzSFS6pfj7HPIel0\"",
		"mtime": "2026-08-02T08:53:03.571Z",
		"size": 52,
		"path": "../public/assets/9-D87iDMsx.js"
	},
	"/assets/routes-D5FwP6n9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b5da-XT9YvyObww7ZMl4vWZ7SSKqceLE\"",
		"mtime": "2026-08-02T08:53:03.576Z",
		"size": 177626,
		"path": "../public/assets/routes-D5FwP6n9.js"
	},
	"/assets/index-C-ckE0Si.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54abe-X6n4zyUDhR9SgRjLMNEUlDHplQs\"",
		"mtime": "2026-08-02T08:53:03.492Z",
		"size": 346814,
		"path": "../public/assets/index-C-ckE0Si.js"
	},
	"/assets/4-Cu4iZMls.mp4": {
		"type": "video/mp4",
		"etag": "\"4ba533-kBTxwUWjWfMkkT0/gu3jnd+QIoA\"",
		"mtime": "2026-08-02T08:53:03.756Z",
		"size": 4957491,
		"path": "../public/assets/4-Cu4iZMls.mp4"
	},
	"/assets/styles-BfCs7q1J.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"146da-W3hLKBlRTExbhj0l6Y1S50elQFs\"",
		"mtime": "2026-08-02T08:53:03.805Z",
		"size": 83674,
		"path": "../public/assets/styles-BfCs7q1J.css"
	},
	"/assets/Tera-Yaar-Hoon-Main-Instrumental-Hindi-CH5vZtFH.mp3": {
		"type": "audio/mpeg",
		"etag": "\"462ed-/e2AuFm1JsouiV+8WbckAijggf8\"",
		"mtime": "2026-08-02T08:53:03.802Z",
		"size": 287469,
		"path": "../public/assets/Tera-Yaar-Hoon-Main-Instrumental-Hindi-CH5vZtFH.mp3"
	},
	"/assets/Tera-Yaar-Hoon-Main-Instrumental-Hindi-Q5labKNk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59-bXNGAz/SNx7+oBdcgKwx+WoGu88\"",
		"mtime": "2026-08-02T08:53:03.574Z",
		"size": 89,
		"path": "../public/assets/Tera-Yaar-Hoon-Main-Instrumental-Hindi-Q5labKNk.js"
	},
	"/assets/23-DbdzMrmr.jpeg": {
		"type": "image/jpeg",
		"etag": "\"75f5a4-nMUk8d5OZLG7SWa9Tr8NiA94mR0\"",
		"mtime": "2026-08-02T08:53:03.686Z",
		"size": 7730596,
		"path": "../public/assets/23-DbdzMrmr.jpeg"
	},
	"/assets/25-Bjoi6cJ6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7023de-A3OtTfrhAVt2n8KJZN+gzcsEICk\"",
		"mtime": "2026-08-02T08:53:03.704Z",
		"size": 7349214,
		"path": "../public/assets/25-Bjoi6cJ6.jpeg"
	},
	"/music/Tera-Yaar-Hoon-Main-Instrumental-Hindi.mp3": {
		"type": "audio/mpeg",
		"etag": "\"462ed-/e2AuFm1JsouiV+8WbckAijggf8\"",
		"mtime": "2026-08-02T02:31:37.911Z",
		"size": 287469,
		"path": "../public/music/Tera-Yaar-Hoon-Main-Instrumental-Hindi.mp3"
	},
	"/photos/11.jpeg": {
		"type": "image/jpeg",
		"etag": "\"47b0a-YXIOxwi0f3S0eolTdFlZZ09QO4I\"",
		"mtime": "2026-08-01T14:59:35.029Z",
		"size": 293642,
		"path": "../public/photos/11.jpeg"
	},
	"/photos/10.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6b25e-PVvaFqKvX8hRAMgEppUPILhhEoc\"",
		"mtime": "2026-08-01T14:59:19.849Z",
		"size": 438878,
		"path": "../public/photos/10.jpeg"
	},
	"/assets/26-DhMp_4mQ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7dc50f-axArZCFoQq+oR/mHEocLCMF0QJ0\"",
		"mtime": "2026-08-02T08:53:03.715Z",
		"size": 8242447,
		"path": "../public/assets/26-DhMp_4mQ.jpeg"
	},
	"/photos/14.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ffeb-PuAYeusW0E7vAYnKh3zTuNdi9/A\"",
		"mtime": "2026-08-01T15:00:21.584Z",
		"size": 131051,
		"path": "../public/photos/14.jpeg"
	},
	"/photos/16.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3fe51-E/aVP8xGdWg+aUkmWPaO4RdKq+o\"",
		"mtime": "2026-08-01T15:00:53.673Z",
		"size": 261713,
		"path": "../public/photos/16.jpeg"
	},
	"/photos/15.jpeg": {
		"type": "image/jpeg",
		"etag": "\"34e7b-NSIWhM+9/4aQRXerq69RQXsUiVg\"",
		"mtime": "2026-08-01T15:00:37.645Z",
		"size": 216699,
		"path": "../public/photos/15.jpeg"
	},
	"/photos/17.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2c343-1n52M94HwxKRVGKUGv08tWwpGb4\"",
		"mtime": "2026-08-01T15:01:12.724Z",
		"size": 181059,
		"path": "../public/photos/17.jpeg"
	},
	"/photos/18.jpeg": {
		"type": "image/jpeg",
		"etag": "\"24fb6-088TeyhGdiimAaqd/kpQN/pFlGs\"",
		"mtime": "2026-08-01T15:01:29.819Z",
		"size": 151478,
		"path": "../public/photos/18.jpeg"
	},
	"/photos/1.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1367b4-0Zh0J+5ACubVnAfu/c6r/1yhFlw\"",
		"mtime": "2026-08-01T14:56:28.357Z",
		"size": 1271732,
		"path": "../public/photos/1.jpeg"
	},
	"/photos/12.jpeg": {
		"type": "image/jpeg",
		"etag": "\"167ce4-K8iavrN8VLEQWfNNKDeQlI3mAdA\"",
		"mtime": "2026-08-01T14:59:50.691Z",
		"size": 1473764,
		"path": "../public/photos/12.jpeg"
	},
	"/assets/9-BDTLB8o6.mp4": {
		"type": "video/mp4",
		"etag": "\"357e86-WC1+OnY4cSO+pj+oH6dzIus3GjA\"",
		"mtime": "2026-08-02T08:53:03.799Z",
		"size": 3505798,
		"path": "../public/assets/9-BDTLB8o6.mp4"
	},
	"/photos/13.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1b46d9-e5/QLu7TBZr3lfcEeBwmYP1ZB0U\"",
		"mtime": "2026-08-01T15:00:03.299Z",
		"size": 1787609,
		"path": "../public/photos/13.jpeg"
	},
	"/photos/2.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1060e2-2O2wbVQv+O/UM6i0p517QYBbquk\"",
		"mtime": "2026-08-01T14:56:54.011Z",
		"size": 1073378,
		"path": "../public/photos/2.jpeg"
	},
	"/assets/8-DgQaWAUK.mp4": {
		"type": "video/mp4",
		"etag": "\"491f1e-WKXQ6GvW57PTfqhwYbVdEIQFpYM\"",
		"mtime": "2026-08-02T08:53:03.793Z",
		"size": 4792094,
		"path": "../public/assets/8-DgQaWAUK.mp4"
	},
	"/assets/24-CsBhNAIE.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a40a5e-CXCbdw9oCCL+z8Gs5y48A82mxl8\"",
		"mtime": "2026-08-02T08:53:03.697Z",
		"size": 10750558,
		"path": "../public/assets/24-CsBhNAIE.jpeg"
	},
	"/photos/30.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3352a-xzVcLRTW0Os/so9td23f5mVnUCU\"",
		"mtime": "2026-08-01T15:21:36.851Z",
		"size": 210218,
		"path": "../public/photos/30.jpeg"
	},
	"/photos/3.jpeg": {
		"type": "image/jpeg",
		"etag": "\"141c7e-Q8aGZlf3rGaAm+0KaXQ2Hj8CXsk\"",
		"mtime": "2026-08-01T14:57:22.725Z",
		"size": 1318014,
		"path": "../public/photos/3.jpeg"
	},
	"/photos/7.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2f7e4-LR6SWngRsjFmlTbauNwMU+/HXl8\"",
		"mtime": "2026-08-01T14:58:33.951Z",
		"size": 194532,
		"path": "../public/photos/7.jpeg"
	},
	"/photos/4.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16c36a-02Xjax3ZUjLWUvEbfxYPDo5ImQc\"",
		"mtime": "2026-08-01T14:57:43.716Z",
		"size": 1491818,
		"path": "../public/photos/4.jpeg"
	},
	"/assets/19-CcsZwnnP.jpeg": {
		"type": "image/jpeg",
		"etag": "\"dbe78f-VbjZurHOCBzhfJ78Bh8ZMxSdpC4\"",
		"mtime": "2026-08-02T08:53:03.642Z",
		"size": 14411663,
		"path": "../public/assets/19-CcsZwnnP.jpeg"
	},
	"/photos/5.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16dc62-/vOOsk5HnYTtSAdDuLUhT93KUjw\"",
		"mtime": "2026-08-01T14:57:54.013Z",
		"size": 1498210,
		"path": "../public/photos/5.jpeg"
	},
	"/assets/28-DYn3Uuxi.jpeg": {
		"type": "image/jpeg",
		"etag": "\"bb777e-ONdweRrB6BD8v/vUh6QzcCPCqhM\"",
		"mtime": "2026-08-02T08:53:03.726Z",
		"size": 12285822,
		"path": "../public/assets/28-DYn3Uuxi.jpeg"
	},
	"/photos/6.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16a15d-ao+MXMjvZk3UddTbKmpxgzBduDY\"",
		"mtime": "2026-08-01T14:58:05.795Z",
		"size": 1483101,
		"path": "../public/photos/6.jpeg"
	},
	"/photos/9.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5f935-KQRuezzMQcqJiHPjFAQNIcLGuYw\"",
		"mtime": "2026-08-01T14:59:04.862Z",
		"size": 391477,
		"path": "../public/photos/9.jpeg"
	},
	"/assets/20-B96hEeWU.jpeg": {
		"type": "image/jpeg",
		"etag": "\"d5dc7a-4FSDk26vgetmnhV5rWKdHZB0xqA\"",
		"mtime": "2026-08-02T08:53:03.664Z",
		"size": 14015610,
		"path": "../public/assets/20-B96hEeWU.jpeg"
	},
	"/videos/1.mp4": {
		"type": "video/mp4",
		"etag": "\"f2cce-gcLr4cH/LsI07QLLpZfyDRlFXJo\"",
		"mtime": "2026-08-01T16:32:07.776Z",
		"size": 994510,
		"path": "../public/videos/1.mp4"
	},
	"/assets/29-FtuE-z_v.jpeg": {
		"type": "image/jpeg",
		"etag": "\"c44734-4xwbDH9/B1Amk8x0AStQImp4Fcg\"",
		"mtime": "2026-08-02T08:53:03.740Z",
		"size": 12863284,
		"path": "../public/assets/29-FtuE-z_v.jpeg"
	},
	"/photos/8.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1271aa-BAonLhskmFqHzzoKcihaAG1Rg1k\"",
		"mtime": "2026-08-01T14:58:49.915Z",
		"size": 1208746,
		"path": "../public/photos/8.jpeg"
	},
	"/assets/21-CvC9PBmk.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e03b68-AzN0eIYuXUWhvj3rzG5PmIJ/WiU\"",
		"mtime": "2026-08-02T08:53:03.678Z",
		"size": 14695272,
		"path": "../public/assets/21-CvC9PBmk.jpeg"
	},
	"/videos/12.mp4": {
		"type": "video/mp4",
		"etag": "\"dc9b9-yZXDexA3f3IUl1BWx8mLaKf19B4\"",
		"mtime": "2026-08-01T16:32:07.730Z",
		"size": 903609,
		"path": "../public/videos/12.mp4"
	},
	"/videos/11.mp4": {
		"type": "video/mp4",
		"etag": "\"11fe3a-Ndgh95XjFMoWXGYuc2qAdFkkIBI\"",
		"mtime": "2026-08-01T16:32:07.724Z",
		"size": 1179194,
		"path": "../public/videos/11.mp4"
	},
	"/videos/3.mp4": {
		"type": "video/mp4",
		"etag": "\"187467-EMrAwPy+c8AjqquPTSYUF04r+H0\"",
		"mtime": "2026-08-01T16:32:07.769Z",
		"size": 1602663,
		"path": "../public/videos/3.mp4"
	},
	"/videos/10.mp4": {
		"type": "video/mp4",
		"etag": "\"328277-CwPwueEoPruJLWrS51BZV0EaCkk\"",
		"mtime": "2026-08-01T16:32:07.717Z",
		"size": 3310199,
		"path": "../public/videos/10.mp4"
	},
	"/videos/6.mp4": {
		"type": "video/mp4",
		"etag": "\"1a8a41-/CamAfVB1eafKTCIBfdM0imVuQ8\"",
		"mtime": "2026-08-01T16:32:07.763Z",
		"size": 1739329,
		"path": "../public/videos/6.mp4"
	},
	"/videos/7.mp4": {
		"type": "video/mp4",
		"etag": "\"1b163b-dePSJVybmdAd04OrQ6R7bcfVQlM\"",
		"mtime": "2026-08-01T16:32:07.783Z",
		"size": 1775163,
		"path": "../public/videos/7.mp4"
	},
	"/photos/23.jpeg": {
		"type": "image/jpeg",
		"etag": "\"75f5a4-nMUk8d5OZLG7SWa9Tr8NiA94mR0\"",
		"mtime": "2026-08-01T15:02:51.025Z",
		"size": 7730596,
		"path": "../public/photos/23.jpeg"
	},
	"/videos/5.mp4": {
		"type": "video/mp4",
		"etag": "\"2a2ae0-3LoVWy9IOlek4ST27kjipwelNd4\"",
		"mtime": "2026-08-01T16:32:07.821Z",
		"size": 2763488,
		"path": "../public/videos/5.mp4"
	},
	"/photos/25.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7023de-A3OtTfrhAVt2n8KJZN+gzcsEICk\"",
		"mtime": "2026-08-01T15:03:30.792Z",
		"size": 7349214,
		"path": "../public/photos/25.jpeg"
	},
	"/photos/26.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7dc50f-axArZCFoQq+oR/mHEocLCMF0QJ0\"",
		"mtime": "2026-08-01T15:03:47.491Z",
		"size": 8242447,
		"path": "../public/photos/26.jpeg"
	},
	"/videos/9.mp4": {
		"type": "video/mp4",
		"etag": "\"357e86-WC1+OnY4cSO+pj+oH6dzIus3GjA\"",
		"mtime": "2026-08-01T16:32:07.709Z",
		"size": 3505798,
		"path": "../public/videos/9.mp4"
	},
	"/videos/4.mp4": {
		"type": "video/mp4",
		"etag": "\"4ba533-kBTxwUWjWfMkkT0/gu3jnd+QIoA\"",
		"mtime": "2026-08-01T16:32:07.792Z",
		"size": 4957491,
		"path": "../public/videos/4.mp4"
	},
	"/videos/8.mp4": {
		"type": "video/mp4",
		"etag": "\"491f1e-WKXQ6GvW57PTfqhwYbVdEIQFpYM\"",
		"mtime": "2026-08-01T16:32:07.801Z",
		"size": 4792094,
		"path": "../public/videos/8.mp4"
	},
	"/photos/24.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a40a5e-CXCbdw9oCCL+z8Gs5y48A82mxl8\"",
		"mtime": "2026-08-01T15:03:13.472Z",
		"size": 10750558,
		"path": "../public/photos/24.jpeg"
	},
	"/videos/2.mp4": {
		"type": "video/mp4",
		"etag": "\"64be37-/4pEe35YdLe2cPJ9z93eIE3tPwU\"",
		"mtime": "2026-08-01T16:32:07.813Z",
		"size": 6602295,
		"path": "../public/videos/2.mp4"
	},
	"/videos/13.mp4": {
		"type": "video/mp4",
		"etag": "\"7bf48d-J59Sm3Mx3gfElYVpQqpNlGyFr3U\"",
		"mtime": "2026-08-01T16:32:07.743Z",
		"size": 8123533,
		"path": "../public/videos/13.mp4"
	},
	"/videos/15.mp4": {
		"type": "video/mp4",
		"etag": "\"7e492b-GyNVzAFJZhe60sz65S+mmVFxK7Y\"",
		"mtime": "2026-08-01T16:32:07.834Z",
		"size": 8276267,
		"path": "../public/videos/15.mp4"
	},
	"/videos/14.mp4": {
		"type": "video/mp4",
		"etag": "\"7e5c78-ACTzSsJGodqyRxB9UaRKSRRBhNU\"",
		"mtime": "2026-08-01T16:32:07.756Z",
		"size": 8281208,
		"path": "../public/videos/14.mp4"
	},
	"/photos/28.jpeg": {
		"type": "image/jpeg",
		"etag": "\"bb777e-ONdweRrB6BD8v/vUh6QzcCPCqhM\"",
		"mtime": "2026-08-01T15:04:23.335Z",
		"size": 12285822,
		"path": "../public/photos/28.jpeg"
	},
	"/photos/20.jpeg": {
		"type": "image/jpeg",
		"etag": "\"d5dc7a-4FSDk26vgetmnhV5rWKdHZB0xqA\"",
		"mtime": "2026-08-01T15:02:15.586Z",
		"size": 14015610,
		"path": "../public/photos/20.jpeg"
	},
	"/photos/19.jpeg": {
		"type": "image/jpeg",
		"etag": "\"dbe78f-VbjZurHOCBzhfJ78Bh8ZMxSdpC4\"",
		"mtime": "2026-08-01T15:01:43.777Z",
		"size": 14411663,
		"path": "../public/photos/19.jpeg"
	},
	"/photos/22.jpeg": {
		"type": "image/jpeg",
		"etag": "\"d5dc7a-4FSDk26vgetmnhV5rWKdHZB0xqA\"",
		"mtime": "2026-08-01T15:02:40.508Z",
		"size": 14015610,
		"path": "../public/photos/22.jpeg"
	},
	"/photos/29.jpeg": {
		"type": "image/jpeg",
		"etag": "\"c44734-4xwbDH9/B1Amk8x0AStQImp4Fcg\"",
		"mtime": "2026-08-01T15:04:36.974Z",
		"size": 12863284,
		"path": "../public/photos/29.jpeg"
	},
	"/photos/21.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e03b68-AzN0eIYuXUWhvj3rzG5PmIJ/WiU\"",
		"mtime": "2026-08-01T15:02:29.205Z",
		"size": 14695272,
		"path": "../public/photos/21.jpeg"
	},
	"/photos/27.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e03b68-AzN0eIYuXUWhvj3rzG5PmIJ/WiU\"",
		"mtime": "2026-08-01T15:04:06.922Z",
		"size": 14695272,
		"path": "../public/photos/27.jpeg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_b6Klc3 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_b6Klc3
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
