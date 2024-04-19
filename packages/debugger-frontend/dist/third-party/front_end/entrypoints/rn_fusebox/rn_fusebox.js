import"../shell/shell.js";import*as e from"../../core/common/common.js";import*as t from"../../core/root/root.js";import*as o from"../../ui/legacy/legacy.js";import*as i from"../../core/i18n/i18n.js";import*as n from"../../models/issues_manager/issues_manager.js";import*as a from"../../core/sdk/sdk.js";import*as r from"../../models/workspace/workspace.js";import*as s from"../../panels/network/forward/forward.js";import*as l from"../../core/host/host.js";import*as c from"../main/main.js";import*as g from"../../core/rn_experiments/rn_experiments.js";const d={toggleDeviceToolbar:"Toggle device toolbar",captureScreenshot:"Capture screenshot",captureFullSizeScreenshot:"Capture full size screenshot",captureNodeScreenshot:"Capture node screenshot",showMediaQueries:"Show media queries",device:"device",hideMediaQueries:"Hide media queries",showRulers:"Show rulers in the Device Mode toolbar",hideRulers:"Hide rulers in the Device Mode toolbar",showDeviceFrame:"Show device frame",hideDeviceFrame:"Hide device frame"},m=i.i18n.registerUIStrings("panels/emulation/emulation-meta.ts",d),u=i.i18n.getLazilyComputedLocalizedString.bind(void 0,m);let p;async function w(){return p||(p=await import("../../panels/emulation/emulation.js")),p}o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.MOBILE,actionId:"emulation.toggle-device-mode",toggleable:!0,loadActionDelegate:async()=>(await w()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(d.toggleDeviceToolbar),iconClass:"devices",bindings:[{platform:"windows,linux",shortcut:"Shift+Ctrl+M"},{platform:"mac",shortcut:"Shift+Meta+M"}]}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await w()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(d.captureScreenshot)}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-full-height-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await w()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(d.captureFullSizeScreenshot)}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-node-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await w()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(d.captureNodeScreenshot)}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"showMediaQueryInspector",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:u(d.showMediaQueries)},{value:!1,title:u(d.hideMediaQueries)}],tags:[u(d.device)]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"emulation.showRulers",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:u(d.showRulers)},{value:!1,title:u(d.hideRulers)}],tags:[u(d.device)]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"emulation.showDeviceOutline",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:u(d.showDeviceFrame)},{value:!1,title:u(d.hideDeviceFrame)}],tags:[u(d.device)]}),o.Toolbar.registerToolbarItem({actionId:"emulation.toggle-device-mode",condition:t.Runtime.ConditionName.CAN_DOCK,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_LEFT,order:1,showLabel:void 0,loadItem:void 0,separator:void 0}),e.AppProvider.registerAppProvider({loadAppProvider:async()=>(await w()).AdvancedApp.AdvancedAppProvider.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,order:0}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.DEVICE_MODE_MENU_SAVE,order:12,actionId:"emulation.capture-screenshot"}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.DEVICE_MODE_MENU_SAVE,order:13,actionId:"emulation.capture-full-height-screenshot"});const y={sensors:"Sensors",geolocation:"geolocation",timezones:"timezones",locale:"locale",locales:"locales",accelerometer:"accelerometer",deviceOrientation:"device orientation",locations:"Locations",touch:"Touch",devicebased:"Device-based",forceEnabled:"Force enabled",emulateIdleDetectorState:"Emulate Idle Detector state",noIdleEmulation:"No idle emulation",userActiveScreenUnlocked:"User active, screen unlocked",userActiveScreenLocked:"User active, screen locked",userIdleScreenUnlocked:"User idle, screen unlocked",userIdleScreenLocked:"User idle, screen locked",showSensors:"Show Sensors",showLocations:"Show Locations"},R=i.i18n.registerUIStrings("panels/sensors/sensors-meta.ts",y),S=i.i18n.getLazilyComputedLocalizedString.bind(void 0,R);let A;async function h(){return A||(A=await import("../../panels/sensors/sensors.js")),A}o.ViewManager.registerViewExtension({location:"drawer-view",commandPrompt:S(y.showSensors),title:S(y.sensors),id:"sensors",persistence:"closeable",order:100,loadView:async()=>(await h()).SensorsView.SensorsView.instance(),tags:[S(y.geolocation),S(y.timezones),S(y.locale),S(y.locales),S(y.accelerometer),S(y.deviceOrientation)]}),o.ViewManager.registerViewExtension({location:"settings-view",id:"emulation-locations",commandPrompt:S(y.showLocations),title:S(y.locations),order:40,loadView:async()=>(await h()).LocationsSettingsTab.LocationsSettingsTab.instance(),settings:["emulation.locations"]}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"emulation.locations",settingType:e.Settings.SettingType.ARRAY,defaultValue:[{title:"Berlin",lat:52.520007,long:13.404954,timezoneId:"Europe/Berlin",locale:"de-DE"},{title:"London",lat:51.507351,long:-.127758,timezoneId:"Europe/London",locale:"en-GB"},{title:"Moscow",lat:55.755826,long:37.6173,timezoneId:"Europe/Moscow",locale:"ru-RU"},{title:"Mountain View",lat:37.386052,long:-122.083851,timezoneId:"America/Los_Angeles",locale:"en-US"},{title:"Mumbai",lat:19.075984,long:72.877656,timezoneId:"Asia/Kolkata",locale:"mr-IN"},{title:"San Francisco",lat:37.774929,long:-122.419416,timezoneId:"America/Los_Angeles",locale:"en-US"},{title:"Shanghai",lat:31.230416,long:121.473701,timezoneId:"Asia/Shanghai",locale:"zh-Hans-CN"},{title:"São Paulo",lat:-23.55052,long:-46.633309,timezoneId:"America/Sao_Paulo",locale:"pt-BR"},{title:"Tokyo",lat:35.689487,long:139.691706,timezoneId:"Asia/Tokyo",locale:"ja-JP"}]}),e.Settings.registerSettingExtension({title:S(y.touch),reloadRequired:!0,settingName:"emulation.touch",settingType:e.Settings.SettingType.ENUM,defaultValue:"none",options:[{value:"none",title:S(y.devicebased),text:S(y.devicebased)},{value:"force",title:S(y.forceEnabled),text:S(y.forceEnabled)}]}),e.Settings.registerSettingExtension({title:S(y.emulateIdleDetectorState),settingName:"emulation.idleDetection",settingType:e.Settings.SettingType.ENUM,defaultValue:"none",options:[{value:"none",title:S(y.noIdleEmulation),text:S(y.noIdleEmulation)},{value:'{"isUserActive":true,"isScreenUnlocked":true}',title:S(y.userActiveScreenUnlocked),text:S(y.userActiveScreenUnlocked)},{value:'{"isUserActive":true,"isScreenUnlocked":false}',title:S(y.userActiveScreenLocked),text:S(y.userActiveScreenLocked)},{value:'{"isUserActive":false,"isScreenUnlocked":true}',title:S(y.userIdleScreenUnlocked),text:S(y.userIdleScreenUnlocked)},{value:'{"isUserActive":false,"isScreenUnlocked":false}',title:S(y.userIdleScreenLocked),text:S(y.userIdleScreenLocked)}]});const v={developerResources:"Developer Resources",showDeveloperResources:"Show Developer Resources"},T=i.i18n.registerUIStrings("panels/developer_resources/developer_resources-meta.ts",v),E=i.i18n.getLazilyComputedLocalizedString.bind(void 0,T);let f;o.ViewManager.registerViewExtension({location:"drawer-view",id:"resource-loading-pane",title:E(v.developerResources),commandPrompt:E(v.showDeveloperResources),order:100,persistence:"closeable",experiment:t.Runtime.ExperimentName.DEVELOPER_RESOURCES_VIEW,loadView:async()=>new((await async function(){return f||(f=await import("../../panels/developer_resources/developer_resources.js")),f}()).DeveloperResourcesView.DeveloperResourcesView)});const N={rendering:"Rendering",showRendering:"Show Rendering",paint:"paint",layout:"layout",fps:"fps",cssMediaType:"CSS media type",cssMediaFeature:"CSS media feature",visionDeficiency:"vision deficiency",colorVisionDeficiency:"color vision deficiency",reloadPage:"Reload page",hardReloadPage:"Hard reload page",forceAdBlocking:"Force ad blocking on this site",blockAds:"Block ads on this site",showAds:"Show ads on this site, if allowed",autoOpenDevTools:"Auto-open DevTools for popups",doNotAutoOpen:"Do not auto-open DevTools for popups",disablePaused:"Disable paused state overlay",toggleCssPrefersColorSchemeMedia:"Toggle CSS media feature prefers-color-scheme"},C=i.i18n.registerUIStrings("entrypoints/inspector_main/inspector_main-meta.ts",N),I=i.i18n.getLazilyComputedLocalizedString.bind(void 0,C);let k;async function P(){return k||(k=await import("../inspector_main/inspector_main.js")),k}o.ViewManager.registerViewExtension({location:"drawer-view",id:"rendering",title:I(N.rendering),commandPrompt:I(N.showRendering),persistence:"closeable",order:50,loadView:async()=>(await P()).RenderingOptions.RenderingOptionsView.instance(),tags:[I(N.paint),I(N.layout),I(N.fps),I(N.cssMediaType),I(N.cssMediaFeature),I(N.visionDeficiency),I(N.colorVisionDeficiency)]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.NAVIGATION,actionId:"inspector_main.reload",loadActionDelegate:async()=>(await P()).InspectorMain.ReloadActionDelegate.instance(),iconClass:"refresh",title:I(N.reloadPage),bindings:[{platform:"windows,linux",shortcut:"Ctrl+R"},{platform:"windows,linux",shortcut:"F5"},{platform:"mac",shortcut:"Meta+R"}]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.NAVIGATION,actionId:"inspector_main.hard-reload",loadActionDelegate:async()=>(await P()).InspectorMain.ReloadActionDelegate.instance(),title:I(N.hardReloadPage),bindings:[{platform:"windows,linux",shortcut:"Shift+Ctrl+R"},{platform:"windows,linux",shortcut:"Shift+F5"},{platform:"windows,linux",shortcut:"Ctrl+F5"},{platform:"windows,linux",shortcut:"Ctrl+Shift+F5"},{platform:"mac",shortcut:"Shift+Meta+R"}]}),o.ActionRegistration.registerActionExtension({actionId:"rendering.toggle-prefers-color-scheme",category:o.ActionRegistration.ActionCategory.RENDERING,title:I(N.toggleCssPrefersColorSchemeMedia),loadActionDelegate:async()=>(await P()).RenderingOptions.ReloadActionDelegate.instance()}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,title:I(N.forceAdBlocking),settingName:"network.adBlockingEnabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,defaultValue:!1,options:[{value:!0,title:I(N.blockAds)},{value:!1,title:I(N.showAds)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.GLOBAL,storageType:e.Settings.SettingStorageType.Synced,title:I(N.autoOpenDevTools),settingName:"autoAttachToCreatedPages",settingType:e.Settings.SettingType.BOOLEAN,order:2,defaultValue:!1,options:[{value:!0,title:I(N.autoOpenDevTools)},{value:!1,title:I(N.doNotAutoOpen)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.APPEARANCE,storageType:e.Settings.SettingStorageType.Synced,title:I(N.disablePaused),settingName:"disablePausedStateOverlay",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1}),o.Toolbar.registerToolbarItem({loadItem:async()=>(await P()).InspectorMain.NodeIndicator.instance(),order:2,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_LEFT,showLabel:void 0,condition:void 0,separator:void 0,actionId:void 0}),o.Toolbar.registerToolbarItem({loadItem:async()=>(await P()).OutermostTargetSelector.OutermostTargetSelector.instance(),order:98,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_RIGHT,showLabel:void 0,condition:void 0,separator:void 0,actionId:void 0,experiment:t.Runtime.ExperimentName.OUTERMOST_TARGET_SELECTOR});const x={issues:"Issues",showIssues:"Show Issues",cspViolations:"CSP Violations",showCspViolations:"Show CSP Violations"},L=i.i18n.registerUIStrings("panels/issues/issues-meta.ts",x),b=i.i18n.getLazilyComputedLocalizedString.bind(void 0,L);let D;async function M(){return D||(D=await import("../../panels/issues/issues.js")),D}o.ViewManager.registerViewExtension({location:"drawer-view",id:"issues-pane",title:b(x.issues),commandPrompt:b(x.showIssues),order:100,persistence:"closeable",loadView:async()=>(await M()).IssuesPane.IssuesPane.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"csp-violations-pane",title:b(x.cspViolations),commandPrompt:b(x.showCspViolations),order:100,persistence:"closeable",loadView:async()=>(await M()).CSPViolationsView.CSPViolationsView.instance(),experiment:t.Runtime.ExperimentName.CSP_VIOLATIONS_VIEW}),e.Revealer.registerRevealer({contextTypes:()=>[n.Issue.Issue],destination:e.Revealer.RevealerDestination.ISSUES_VIEW,loadRevealer:async()=>(await M()).IssueRevealer.IssueRevealer.instance()});const O={throttling:"Throttling",showThrottling:"Show Throttling",goOffline:"Go offline",device:"device",throttlingTag:"throttling",enableSlowGThrottling:"Enable slow `3G` throttling",enableFastGThrottling:"Enable fast `3G` throttling",goOnline:"Go online"},V=i.i18n.registerUIStrings("panels/mobile_throttling/mobile_throttling-meta.ts",O),_=i.i18n.getLazilyComputedLocalizedString.bind(void 0,V);let F;async function B(){return F||(F=await import("../../panels/mobile_throttling/mobile_throttling.js")),F}o.ViewManager.registerViewExtension({location:"settings-view",id:"throttling-conditions",title:_(O.throttling),commandPrompt:_(O.showThrottling),order:35,loadView:async()=>(await B()).ThrottlingSettingsTab.ThrottlingSettingsTab.instance(),settings:["customNetworkConditions"]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-offline",category:o.ActionRegistration.ActionCategory.NETWORK,title:_(O.goOffline),loadActionDelegate:async()=>(await B()).ThrottlingManager.ActionDelegate.instance(),tags:[_(O.device),_(O.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-low-end-mobile",category:o.ActionRegistration.ActionCategory.NETWORK,title:_(O.enableSlowGThrottling),loadActionDelegate:async()=>(await B()).ThrottlingManager.ActionDelegate.instance(),tags:[_(O.device),_(O.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-mid-tier-mobile",category:o.ActionRegistration.ActionCategory.NETWORK,title:_(O.enableFastGThrottling),loadActionDelegate:async()=>(await B()).ThrottlingManager.ActionDelegate.instance(),tags:[_(O.device),_(O.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-online",category:o.ActionRegistration.ActionCategory.NETWORK,title:_(O.goOnline),loadActionDelegate:async()=>(await B()).ThrottlingManager.ActionDelegate.instance(),tags:[_(O.device),_(O.throttlingTag)]}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"customNetworkConditions",settingType:e.Settings.SettingType.ARRAY,defaultValue:[]});const U={showNetwork:"Show Network",network:"Network",showNetworkRequestBlocking:"Show Network request blocking",networkRequestBlocking:"Network request blocking",showNetworkConditions:"Show Network conditions",networkConditions:"Network conditions",diskCache:"disk cache",networkThrottling:"network throttling",showSearch:"Show Search",search:"Search",recordNetworkLog:"Record network log",stopRecordingNetworkLog:"Stop recording network log",hideRequestDetails:"Hide request details",colorcodeResourceTypes:"Color-code resource types",colorCode:"color code",resourceType:"resource type",colorCodeByResourceType:"Color code by resource type",useDefaultColors:"Use default colors",groupNetworkLogByFrame:"Group network log by frame",netWork:"network",frame:"frame",group:"group",groupNetworkLogItemsByFrame:"Group network log items by frame",dontGroupNetworkLogItemsByFrame:"Don't group network log items by frame",clear:"Clear network log"},z=i.i18n.registerUIStrings("panels/network/network-meta.ts",U),W=i.i18n.getLazilyComputedLocalizedString.bind(void 0,z);let j;async function K(){return j||(j=await import("../../panels/network/network.js")),j}function q(e){return void 0===j?[]:e(j)}o.ViewManager.registerViewExtension({location:"panel",id:"network",commandPrompt:W(U.showNetwork),title:W(U.network),order:40,condition:t.Runtime.ConditionName.REACT_NATIVE_UNSTABLE_NETWORK_PANEL,loadView:async()=>(await K()).NetworkPanel.NetworkPanel.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"network.blocked-urls",commandPrompt:W(U.showNetworkRequestBlocking),title:W(U.networkRequestBlocking),persistence:"closeable",order:60,loadView:async()=>(await K()).BlockedURLsPane.BlockedURLsPane.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"network.config",commandPrompt:W(U.showNetworkConditions),title:W(U.networkConditions),persistence:"closeable",order:40,tags:[W(U.diskCache),W(U.networkThrottling),i.i18n.lockedLazyString("useragent"),i.i18n.lockedLazyString("user agent"),i.i18n.lockedLazyString("user-agent")],loadView:async()=>(await K()).NetworkConfigView.NetworkConfigView.instance()}),o.ViewManager.registerViewExtension({location:"network-sidebar",id:"network.search-network-tab",commandPrompt:W(U.showSearch),title:W(U.search),persistence:"permanent",loadView:async()=>(await K()).NetworkPanel.SearchNetworkView.instance()}),o.ActionRegistration.registerActionExtension({actionId:"network.toggle-recording",category:o.ActionRegistration.ActionCategory.NETWORK,iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>q((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),options:[{value:!0,title:W(U.recordNetworkLog)},{value:!1,title:W(U.stopRecordingNetworkLog)}],bindings:[{shortcut:"Ctrl+E",platform:"windows,linux"},{shortcut:"Meta+E",platform:"mac"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.clear",category:o.ActionRegistration.ActionCategory.NETWORK,title:W(U.clear),iconClass:"clear",loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),contextTypes:()=>q((e=>[e.NetworkPanel.NetworkPanel])),bindings:[{shortcut:"Ctrl+L"},{shortcut:"Meta+K",platform:"mac"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.hide-request-details",category:o.ActionRegistration.ActionCategory.NETWORK,title:W(U.hideRequestDetails),contextTypes:()=>q((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),bindings:[{shortcut:"Esc"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.search",category:o.ActionRegistration.ActionCategory.NETWORK,title:W(U.search),contextTypes:()=>q((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),bindings:[{platform:"mac",shortcut:"Meta+F",keybindSets:["devToolsDefault","vsCode"]},{platform:"windows,linux",shortcut:"Ctrl+F",keybindSets:["devToolsDefault","vsCode"]}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,storageType:e.Settings.SettingStorageType.Synced,title:W(U.colorcodeResourceTypes),settingName:"networkColorCodeResourceTypes",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,tags:[W(U.colorCode),W(U.resourceType)],options:[{value:!0,title:W(U.colorCodeByResourceType)},{value:!1,title:W(U.useDefaultColors)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,storageType:e.Settings.SettingStorageType.Synced,title:W(U.groupNetworkLogByFrame),settingName:"network.group-by-frame",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,tags:[W(U.netWork),W(U.frame),W(U.group)],options:[{value:!0,title:W(U.groupNetworkLogItemsByFrame)},{value:!1,title:W(U.dontGroupNetworkLogItemsByFrame)}]}),o.ViewManager.registerLocationResolver({name:"network-sidebar",category:o.ViewManager.ViewLocationCategory.NETWORK,loadResolver:async()=>(await K()).NetworkPanel.NetworkPanel.instance()}),o.ContextMenu.registerProvider({contextTypes:()=>[a.NetworkRequest.NetworkRequest,a.Resource.Resource,r.UISourceCode.UISourceCode],loadProvider:async()=>(await K()).NetworkPanel.ContextMenuProvider.instance(),experiment:void 0}),e.Revealer.registerRevealer({contextTypes:()=>[a.NetworkRequest.NetworkRequest],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await K()).NetworkPanel.RequestRevealer.instance()}),e.Revealer.registerRevealer({contextTypes:()=>[s.UIRequestLocation.UIRequestLocation],loadRevealer:async()=>(await K()).NetworkPanel.RequestLocationRevealer.instance(),destination:void 0}),e.Revealer.registerRevealer({contextTypes:()=>[s.NetworkRequestId.NetworkRequestId],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await K()).NetworkPanel.RequestIdRevealer.instance()}),e.Revealer.registerRevealer({contextTypes:()=>[s.UIFilter.UIRequestFilter],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await K()).NetworkPanel.NetworkLogWithFilterRevealer.instance()});const G={title:"⚛️ React DevTools",command:"Show React DevTools panel"},H=i.i18n.registerUIStrings("panels/react_devtools/react_devtools-meta.ts",G),J=i.i18n.getLazilyComputedLocalizedString.bind(void 0,H);let Q;o.ViewManager.registerViewExtension({location:"panel",id:"react-devtools",title:J(G.title),commandPrompt:J(G.command),persistence:"permanent",order:1e3,async loadView(){const e=await async function(){return Q||(Q=await import("../../panels/react_devtools/react_devtools.js")),Q}();return t.Runtime.Runtime.isDescriptorEnabled({experiment:t.Runtime.ExperimentName.ENABLE_REACT_DEVTOOLS_PANEL,condition:null})?new e.ReactDevToolsView.ReactDevToolsViewImpl:e.ReactDevToolsPlaceholder.ReactDevToolsPlaceholderImpl.instance()}});const Y={rnWelcome:"⚛️ Welcome",showRnWelcome:"Show React Native Welcome panel",debuggerBrandName:"React Native DevTools (Fusebox ⚡)"},X=i.i18n.registerUIStrings("panels/rn_welcome/rn_welcome-meta.ts",Y),Z=i.i18n.getLazilyComputedLocalizedString.bind(void 0,X);let $;o.ViewManager.registerViewExtension({location:"panel",id:"rn-welcome",title:Z(Y.rnWelcome),commandPrompt:Z(Y.showRnWelcome),order:-10,persistence:"permanent",loadView:async()=>(await async function(){return $||($=await import("../../panels/rn_welcome/rn_welcome.js")),$}()).RNWelcome.RNWelcomeImpl.instance({debuggerBrandName:Z(Y.debuggerBrandName)}),experiment:t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI});const ee={performance:"Performance",showPerformance:"Show Performance",javascriptProfiler:"JavaScript Profiler",showJavascriptProfiler:"Show JavaScript Profiler",record:"Record",stop:"Stop",startProfilingAndReloadPage:"Start profiling and reload page",saveProfile:"Save profile…",loadProfile:"Load profile…",previousFrame:"Previous frame",nextFrame:"Next frame",showRecentTimelineSessions:"Show recent timeline sessions",previousRecording:"Previous recording",nextRecording:"Next recording",hideChromeFrameInLayersView:"Hide `chrome` frame in Layers view",startStopRecording:"Start/stop recording"},te=i.i18n.registerUIStrings("panels/timeline/timeline-meta.ts",ee),oe=i.i18n.getLazilyComputedLocalizedString.bind(void 0,te);let ie,ne;async function ae(){return ie||(ie=await import("../../panels/timeline/timeline.js")),ie}async function re(){return ne||(ne=await import("../../panels/profiler/profiler.js")),ne}function se(e){return void 0===ie?[]:e(ie)}o.ViewManager.registerViewExtension({location:"panel",id:"timeline",title:oe(ee.performance),commandPrompt:oe(ee.showPerformance),order:50,experiment:t.Runtime.ExperimentName.ENABLE_PERFORMANCE_PANEL,loadView:async()=>(await ae()).TimelinePanel.TimelinePanel.instance()}),o.ViewManager.registerViewExtension({location:"panel",id:"js_profiler",title:oe(ee.javascriptProfiler),commandPrompt:oe(ee.showJavascriptProfiler),persistence:"permanent",order:65,experiment:t.Runtime.ExperimentName.JS_PROFILER_TEMP_ENABLE,loadView:async()=>(await re()).ProfilesPanel.JSProfilerPanel.instance()}),o.ActionRegistration.registerActionExtension({actionId:"timeline.toggle-recording",category:o.ActionRegistration.ActionCategory.PERFORMANCE,iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),options:[{value:!0,title:oe(ee.record)},{value:!1,title:oe(ee.stop)}],bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.record-reload",iconClass:"refresh",contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:oe(ee.startProfilingAndReloadPage),loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+Shift+E"},{platform:"mac",shortcut:"Meta+Shift+E"}]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.PERFORMANCE,actionId:"timeline.save-to-file",contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),title:oe(ee.saveProfile),bindings:[{platform:"windows,linux",shortcut:"Ctrl+S"},{platform:"mac",shortcut:"Meta+S"}]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.PERFORMANCE,actionId:"timeline.load-from-file",contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),title:oe(ee.loadProfile),bindings:[{platform:"windows,linux",shortcut:"Ctrl+O"},{platform:"mac",shortcut:"Meta+O"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.jump-to-previous-frame",category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:oe(ee.previousFrame),contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),bindings:[{shortcut:"["}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.jump-to-next-frame",category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:oe(ee.nextFrame),contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),bindings:[{shortcut:"]"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.show-history",loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:oe(ee.showRecentTimelineSessions),contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Ctrl+H"},{platform:"mac",shortcut:"Meta+Y"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.previous-recording",category:o.ActionRegistration.ActionCategory.PERFORMANCE,loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),title:oe(ee.previousRecording),contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Alt+Left"},{platform:"mac",shortcut:"Meta+Left"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.next-recording",category:o.ActionRegistration.ActionCategory.PERFORMANCE,loadActionDelegate:async()=>(await ae()).TimelinePanel.ActionDelegate.instance(),title:oe(ee.nextRecording),contextTypes:()=>se((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Alt+Right"},{platform:"mac",shortcut:"Meta+Right"}]}),o.ActionRegistration.registerActionExtension({actionId:"profiler.js-toggle-recording",category:o.ActionRegistration.ActionCategory.JAVASCRIPT_PROFILER,title:oe(ee.startStopRecording),iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>void 0===ne?[]:(e=>[e.ProfilesPanel.JSProfilerPanel])(ne),loadActionDelegate:async()=>(await re()).ProfilesPanel.JSProfilerPanel.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.PERFORMANCE,storageType:e.Settings.SettingStorageType.Synced,title:oe(ee.hideChromeFrameInLayersView),settingName:"frameViewerHideChromeWindow",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1}),e.Linkifier.registerLinkifier({contextTypes:()=>se((e=>[e.CLSLinkifier.CLSRect])),loadLinkifier:async()=>(await ae()).CLSLinkifier.Linkifier.instance()}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.TIMELINE_MENU_OPEN,actionId:"timeline.load-from-file",order:10}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.TIMELINE_MENU_OPEN,actionId:"timeline.save-to-file",order:15}),g.RNExperimentsImpl.setIsReactNativeEntryPoint(!0),g.RNExperimentsImpl.Instance.enableExperimentsByDefault([t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI,t.Runtime.ExperimentName.ENABLE_REACT_DEVTOOLS_PANEL]),l.RNPerfMetrics.registerPerfMetricsGlobalPostMessageHandler(),l.rnPerfMetrics.setLaunchId(t.Runtime.Runtime.queryParam("launchId")),l.rnPerfMetrics.entryPointLoadingStarted("rn_fusebox");class le extends a.SDKModel.SDKModel{constructor(e){super(e),e.router()?.sendMessage(e.sessionId,"FuseboxClient","FuseboxClient.setClientMetadata",{},(()=>{}))}}a.SDKModel.SDKModel.register(le,{capabilities:a.Target.Capability.None,autostart:!0,early:!0});const ce={networkTitle:"React Native",showReactNative:"Show React Native",sendFeedback:"[FB-only] Send feedback"},ge=i.i18n.registerUIStrings("entrypoints/rn_fusebox/rn_fusebox.ts",ce),de=i.i18n.getLazilyComputedLocalizedString.bind(void 0,ge);let me;if(o.ViewManager.registerViewExtension({location:"navigator-view",id:"navigator-network",title:de(ce.networkTitle),commandPrompt:de(ce.showReactNative),order:2,persistence:"permanent",loadView:async()=>(await async function(){return me||(me=await import("../../panels/sources/sources.js")),me}()).SourcesNavigator.NetworkNavigatorView.instance()}),self.runtime=t.Runtime.Runtime.instance({forceNew:!0}),new c.MainImpl.MainImpl,globalThis.FB_ONLY__reactNativeFeedbackLink){const e=globalThis.FB_ONLY__reactNativeFeedbackLink,t="react-native-send-feedback",i={handleAction:(o,i)=>i===t&&(l.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(e),!0)};o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.GLOBAL,actionId:t,title:de(ce.sendFeedback),loadActionDelegate:async()=>i,iconClass:"bug"}),o.Toolbar.registerToolbarItem({location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_RIGHT,actionId:t,showLabel:!0})}l.rnPerfMetrics.entryPointLoadingFinished("rn_fusebox");