var ModalEffects=(function(){function init(){var overlay=document.querySelector('.md-overlay');[].slice.call(document.querySelectorAll('.md-trigger')).forEach(function(el,i){var modal=document.querySelector('#'+el.getAttribute('data-modal')),close=modal.querySelector('.md-close');function removeModal(hasPerspective){classie.remove(modal,'md-show');if(hasPerspective){classie.remove(document.documentElement,'md-perspective');}}
function removeModalHandler(){removeModal(classie.has(el,'md-setperspective'));}
el.addEventListener('click',function(ev){classie.add(modal,'md-show');overlay.removeEventListener('click',removeModalHandler);overlay.addEventListener('click',removeModalHandler);if(classie.has(el,'md-setperspective')){setTimeout(function(){classie.add(document.documentElement,'md-perspective');},25);}});close.addEventListener('click',function(ev){ev.stopPropagation();removeModalHandler();});});}
init();})();
;;var kCHARSET_RULE_MISSING_SEMICOLON="Missing semicolon at the end of @charset rule";var kCHARSET_RULE_CHARSET_IS_STRING="The charset in the @charset rule should be a string";var kCHARSET_RULE_MISSING_WS="Missing mandatory whitespace after @charset";var kIMPORT_RULE_MISSING_URL="Missing URL in @import rule";var kURL_EOF="Unexpected end of stylesheet";var kURL_WS_INSIDE="Multiple tokens inside a url() notation";var kVARIABLES_RULE_POSITION="@variables rule invalid at this position in the stylesheet";var kIMPORT_RULE_POSITION="@import rule invalid at this position in the stylesheet";var kNAMESPACE_RULE_POSITION="@namespace rule invalid at this position in the stylesheet";var kCHARSET_RULE_CHARSET_SOF="@charset rule invalid at this position in the stylesheet";var kUNKNOWN_AT_RULE="Unknow @-rule";var kENGINES=["webkit","presto","trident","generic"];var kCSS_VENDOR_VALUES={"-moz-box":{"webkit":"-webkit-box","presto":"","trident":"","generic":"box"},"-moz-inline-box":{"webkit":"-webkit-inline-box","presto":"","trident":"","generic":"inline-box"},"-moz-initial":{"webkit":"","presto":"","trident":"","generic":"initial"},"-moz-linear-gradient":{"webkit20110101":FilterLinearGradientForOutput,"webkit":FilterLinearGradientForOutput,"presto":"","trident":"","generic":FilterLinearGradientForOutput},"-moz-radial-gradient":{"webkit20110101":FilterRadialGradientForOutput,"webkit":FilterRadialGradientForOutput,"presto":"","trident":"","generic":FilterRadialGradientForOutput},"-moz-repeating-linear-gradient":{"webkit20110101":"","webkit":FilterRepeatingGradientForOutput,"presto":"","trident":"","generic":FilterRepeatingGradientForOutput},"-moz-repeating-radial-gradient":{"webkit20110101":"","webkit":FilterRepeatingGradientForOutput,"presto":"","trident":"","generic":FilterRepeatingGradientForOutput}};var kCSS_VENDOR_PREFIXES={"lastUpdate":1304175007,"properties":[{"gecko":"","webkit":"","presto":"","trident":"-ms-accelerator","status":"P"},{"gecko":"","webkit":"","presto":"-wap-accesskey","trident":"","status":""},{"gecko":"-moz-animation","webkit":"-webkit-animation","presto":"","trident":"","status":"WD"},{"gecko":"-moz-animation-delay","webkit":"-webkit-animation-delay","presto":"","trident":"","status":"WD"},{"gecko":"-moz-animation-direction","webkit":"-webkit-animation-direction","presto":"","trident":"","status":"WD"},{"gecko":"-moz-animation-duration","webkit":"-webkit-animation-duration","presto":"","trident":"","status":"WD"},{"gecko":"-moz-animation-fill-mode","webkit":"-webkit-animation-fill-mode","presto":"","trident":"","status":"ED"},{"gecko":"-moz-animation-iteration-count","webkit":"-webkit-animation-iteration-count","presto":"","trident":"","status":"WD"},{"gecko":"-moz-animation-name","webkit":"-webkit-animation-name","presto":"","trident":"","status":"WD"},{"gecko":"-moz-animation-play-state","webkit":"-webkit-animation-play-state","presto":"","trident":"","status":"WD"},{"gecko":"-moz-animation-timing-function","webkit":"-webkit-animation-timing-function","presto":"","trident":"","status":"WD"},{"gecko":"-moz-appearance","webkit":"-webkit-appearance","presto":"","trident":"","status":"CR"},{"gecko":"","webkit":"-webkit-backface-visibility","presto":"","trident":"","status":"WD"},{"gecko":"background-clip","webkit":"-webkit-background-clip","presto":"background-clip","trident":"background-clip","status":"WD"},{"gecko":"","webkit":"-webkit-background-composite","presto":"","trident":"","status":""},{"gecko":"-moz-background-inline-policy","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"background-origin","webkit":"-webkit-background-origin","presto":"background-origin","trident":"background-origin","status":"WD"},{"gecko":"","webkit":"background-position-x","presto":"","trident":"-ms-background-position-x","status":""},{"gecko":"","webkit":"background-position-y","presto":"","trident":"-ms-background-position-y","status":""},{"gecko":"background-size","webkit":"-webkit-background-size","presto":"background-size","trident":"background-size","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-behavior","status":""},{"gecko":"-moz-binding","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"","presto":"","trident":"-ms-block-progression","status":""},{"gecko":"","webkit":"-webkit-border-after","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-after-color","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-after-style","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-after-width","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-before","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-before-color","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-before-style","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-before-width","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-bottom-colors","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"border-bottom-left-radius","webkit":"-webkit-border-bottom-left-radius","presto":"border-bottom-left-radius","trident":"border-bottom-left-radius","status":"WD"},{"gecko":"","webkit":"-webkit-border-bottom-left-radius = border-bottom-left-radius","presto":"","trident":"","status":""},{"gecko":"border-bottom-right-radius","webkit":"-webkit-border-bottom-right-radius","presto":"border-bottom-right-radius","trident":"border-bottom-right-radius","status":"WD"},{"gecko":"","webkit":"-webkit-border-bottom-right-radius = border-bottom-right-radius","presto":"","trident":"","status":""},{"gecko":"-moz-border-end","webkit":"-webkit-border-end","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-end-color","webkit":"-webkit-border-end-color","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-end-style","webkit":"-webkit-border-end-style","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-end-width","webkit":"-webkit-border-end-width","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-border-fit","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-border-horizontal-spacing","presto":"","trident":"","status":""},{"gecko":"-moz-border-image","webkit":"-webkit-border-image","presto":"-o-border-image","trident":"","status":"WD"},{"gecko":"-moz-border-left-colors","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"border-radius","webkit":"-webkit-border-radius","presto":"border-radius","trident":"border-radius","status":"WD"},{"gecko":"-moz-border-right-colors","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"-moz-border-start","webkit":"-webkit-border-start","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-start-color","webkit":"-webkit-border-start-color","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-start-style","webkit":"-webkit-border-start-style","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-start-width","webkit":"-webkit-border-start-width","presto":"","trident":"","status":"ED"},{"gecko":"-moz-border-top-colors","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"border-top-left-radius","webkit":"-webkit-border-top-left-radius","presto":"border-top-left-radius","trident":"border-top-left-radius","status":"WD"},{"gecko":"","webkit":"-webkit-border-top-left-radius = border-top-left-radius","presto":"","trident":"","status":""},{"gecko":"border-top-right-radius","webkit":"-webkit-border-top-right-radius","presto":"border-top-right-radius","trident":"border-top-right-radius","status":"WD"},{"gecko":"","webkit":"-webkit-border-top-right-radius = border-top-right-radius","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-border-vertical-spacing","presto":"","trident":"","status":""},{"gecko":"-moz-box-align","webkit":"-webkit-box-align","presto":"","trident":"-ms-box-align","status":"WD"},{"gecko":"-moz-box-direction","webkit":"-webkit-box-direction","presto":"","trident":"-ms-box-direction","status":"WD"},{"gecko":"-moz-box-flex","webkit":"-webkit-box-flex","presto":"","trident":"-ms-box-flex","status":"WD"},{"gecko":"","webkit":"-webkit-box-flex-group","presto":"","trident":"","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-box-line-progression","status":""},{"gecko":"","webkit":"-webkit-box-lines","presto":"","trident":"-ms-box-lines","status":"WD"},{"gecko":"-moz-box-ordinal-group","webkit":"-webkit-box-ordinal-group","presto":"","trident":"-ms-box-ordinal-group","status":"WD"},{"gecko":"-moz-box-orient","webkit":"-webkit-box-orient","presto":"","trident":"-ms-box-orient","status":"WD"},{"gecko":"-moz-box-pack","webkit":"-webkit-box-pack","presto":"","trident":"-ms-box-pack","status":"WD"},{"gecko":"","webkit":"-webkit-box-reflect","presto":"","trident":"","status":""},{"gecko":"box-shadow","webkit":"-webkit-box-shadow","presto":"box-shadow","trident":"box-shadow","status":"WD"},{"gecko":"-moz-box-sizing","webkit":"box-sizing","presto":"box-sizing","trident":"","status":"CR"},{"gecko":"","webkit":"-webkit-box-sizing = box-sizing","presto":"","trident":"","status":""},{"gecko":"","webkit":"-epub-caption-side = caption-side","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-color-correction","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-column-break-after","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-column-break-before","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-column-break-inside","presto":"","trident":"","status":""},{"gecko":"-moz-column-count","webkit":"-webkit-column-count","presto":"column-count","trident":"column-count","status":"CR"},{"gecko":"-moz-column-gap","webkit":"-webkit-column-gap","presto":"column-gap","trident":"column-gap","status":"CR"},{"gecko":"-moz-column-rule","webkit":"-webkit-column-rule","presto":"column-rule","trident":"column-rule","status":"CR"},{"gecko":"-moz-column-rule-color","webkit":"-webkit-column-rule-color","presto":"column-rule-color","trident":"column-rule-color","status":"CR"},{"gecko":"-moz-column-rule-style","webkit":"-webkit-column-rule-style","presto":"column-rule-style","trident":"column-rule-style","status":"CR"},{"gecko":"-moz-column-rule-width","webkit":"-webkit-column-rule-width","presto":"column-rule-width","trident":"column-rule-width","status":"CR"},{"gecko":"","webkit":"-webkit-column-span","presto":"column-span","trident":"column-span","status":"CR"},{"gecko":"-moz-column-width","webkit":"-webkit-column-width","presto":"column-width","trident":"column-width","status":"CR"},{"gecko":"","webkit":"-webkit-columns","presto":"columns","trident":"columns","status":"CR"},{"gecko":"","webkit":"-webkit-dashboard-region","presto":"-apple-dashboard-region","trident":"","status":""},{"gecko":"filter","webkit":"","presto":"filter","trident":"-ms-filter","status":""},{"gecko":"-moz-float-edge","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"","presto":"-o-focus-opacity","trident":"","status":""},{"gecko":"-moz-font-feature-settings","webkit":"","presto":"","trident":"","status":""},{"gecko":"-moz-font-language-override","webkit":"","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-font-size-delta","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-font-smoothing","presto":"","trident":"","status":""},{"gecko":"-moz-force-broken-image-icon","webkit":"","presto":"","trident":"","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-align","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-span","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-columns","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-layer","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-align","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-span","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-rows","status":"WD"},{"gecko":"","webkit":"-webkit-highlight","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-hyphenate-character","presto":"","trident":"","status":"WD"},{"gecko":"","webkit":"-webkit-hyphenate-limit-after","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-hyphenate-limit-before","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-hyphens","presto":"","trident":"","status":"WD"},{"gecko":"","webkit":"-epub-hyphens = -webkit-hyphens","presto":"","trident":"","status":""},{"gecko":"-moz-image-region","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"ime-mode","webkit":"","presto":"","trident":"-ms-ime-mode","status":""},{"gecko":"","webkit":"","presto":"-wap-input-format","trident":"","status":""},{"gecko":"","webkit":"","presto":"-wap-input-required","trident":"","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-interpolation-mode","status":""},{"gecko":"","webkit":"","presto":"-xv-interpret-as","trident":"","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-flow","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-char","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-line","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-mode","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-type","status":""},{"gecko":"","webkit":"-webkit-line-box-contain","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-line-break","presto":"","trident":"-ms-line-break","status":""},{"gecko":"","webkit":"-webkit-line-clamp","presto":"","trident":"","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-line-grid-mode","status":""},{"gecko":"","webkit":"","presto":"-o-link","trident":"","status":""},{"gecko":"","webkit":"","presto":"-o-link-source","trident":"","status":""},{"gecko":"","webkit":"-webkit-locale","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-logical-height","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-logical-width","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-margin-after","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-margin-after-collapse","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-margin-before","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-margin-before-collapse","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-margin-bottom-collapse","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-margin-collapse","presto":"","trident":"","status":""},{"gecko":"-moz-margin-end","webkit":"-webkit-margin-end","presto":"","trident":"","status":"ED"},{"gecko":"-moz-margin-start","webkit":"-webkit-margin-start","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-margin-top-collapse","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-marquee","presto":"","trident":"","status":""},{"gecko":"","webkit":"","presto":"-wap-marquee-dir","trident":"","status":""},{"gecko":"","webkit":"-webkit-marquee-direction","presto":"","trident":"","status":"WD"},{"gecko":"","webkit":"-webkit-marquee-increment","presto":"","trident":"","status":""},{"gecko":"","webkit":"","presto":"-wap-marquee-loop","trident":"","status":"WD"},{"gecko":"","webkit":"-webkit-marquee-repetition","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-marquee-speed","presto":"-wap-marquee-speed","trident":"","status":"WD"},{"gecko":"","webkit":"-webkit-marquee-style","presto":"-wap-marquee-style","trident":"","status":"WD"},{"gecko":"mask","webkit":"-webkit-mask","presto":"mask","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-attachment","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-box-image","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-clip","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-composite","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-image","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-origin","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-position","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-position-x","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-position-y","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-repeat","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-repeat-x","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-repeat-y","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-mask-size","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-match-nearest-mail-blockquote-color","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-max-logical-height","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-max-logical-width","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-min-logical-height","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-min-logical-width","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"","presto":"-o-mini-fold","trident":"","status":""},{"gecko":"","webkit":"-webkit-nbsp-mode","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"","presto":"-o-object-fit","trident":"","status":"ED"},{"gecko":"","webkit":"","presto":"-o-object-position","trident":"","status":"ED"},{"gecko":"opacity","webkit":"-webkit-opacity","presto":"opacity","trident":"opacity","status":"WD"},{"gecko":"","webkit":"-webkit-opacity = opacity","presto":"","trident":"","status":""},{"gecko":"-moz-outline-radius","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"-moz-outline-radius-bottomleft","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"-moz-outline-radius-bottomright","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"-moz-outline-radius-topleft","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"-moz-outline-radius-topright","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"overflow-x","webkit":"overflow-x","presto":"overflow-x","trident":"-ms-overflow-x","status":"WD"},{"gecko":"overflow-y","webkit":"overflow-y","presto":"overflow-y","trident":"-ms-overflow-y","status":"WD"},{"gecko":"","webkit":"-webkit-padding-after","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-padding-before","presto":"","trident":"","status":"ED"},{"gecko":"-moz-padding-end","webkit":"-webkit-padding-end","presto":"","trident":"","status":"ED"},{"gecko":"-moz-padding-start","webkit":"-webkit-padding-start","presto":"","trident":"","status":"ED"},{"gecko":"","webkit":"-webkit-perspective","presto":"","trident":"","status":"WD"},{"gecko":"","webkit":"-webkit-perspective-origin","presto":"","trident":"","status":"WD"},{"gecko":"","webkit":"-webkit-perspective-origin-x","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-perspective-origin-y","presto":"","trident":"","status":""},{"gecko":"","webkit":"","presto":"-xv-phonemes","trident":"","status":""},{"gecko":"","webkit":"-webkit-rtl-ordering","presto":"","trident":"","status":"P"},{"gecko":"-moz-script-level","webkit":"","presto":"","trident":"","status":""},{"gecko":"-moz-script-min-size","webkit":"","presto":"","trident":"","status":""},{"gecko":"-moz-script-size-multiplier","webkit":"","presto":"","trident":"","status":""},{"gecko":"","webkit":"","presto":"scrollbar-3dlight-color","trident":"-ms-scrollbar-3dlight-color","status":"P"},{"gecko":"","webkit":"","presto":"scrollbar-arrow-color","trident":"-ms-scrollbar-arrow-color","status":"P"},{"gecko":"","webkit":"","presto":"scrollbar-base-color","trident":"-ms-scrollbar-base-color","status":"P"},{"gecko":"","webkit":"","presto":"scrollbar-darkshadow-color","trident":"-ms-scrollbar-darkshadow-color","status":"P"},{"gecko":"","webkit":"","presto":"scrollbar-face-color","trident":"-ms-scrollbar-face-color","status":"P"},{"gecko":"","webkit":"","presto":"scrollbar-highlight-color","trident":"-ms-scrollbar-highlight-color","status":"P"},{"gecko":"","webkit":"","presto":"scrollbar-shadow-color","trident":"-ms-scrollbar-shadow-color","status":"P"},{"gecko":"","webkit":"","presto":"scrollbar-track-color","trident":"-ms-scrollbar-track-color","status":"P"},{"gecko":"-moz-stack-sizing","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-webkit-svg-shadow","presto":"","trident":"","status":""},{"gecko":"-moz-tab-size","webkit":"","presto":"-o-tab-size","trident":"","status":""},{"gecko":"","webkit":"","presto":"-o-table-baseline","trident":"","status":""},{"gecko":"","webkit":"-webkit-tap-highlight-color","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"","presto":"","trident":"-ms-text-align-last","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-text-autospace","status":"WD"},{"gecko":"-moz-text-blink","webkit":"","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-text-combine","presto":"","trident":"","status":""},{"gecko":"","webkit":"-epub-text-combine = -webkit-text-combine","presto":"","trident":"","status":""},{"gecko":"-moz-text-decoration-color","webkit":"","presto":"","trident":"","status":""},{"gecko":"-moz-text-decoration-line","webkit":"","presto":"","trident":"","status":""},{"gecko":"-moz-text-decoration-style","webkit":"","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-text-decorations-in-effect","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-text-emphasis","presto":"","trident":"","status":""},{"gecko":"","webkit":"-epub-text-emphasis = -webkit-text-emphasis","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-text-emphasis-color","presto":"","trident":"","status":""},{"gecko":"","webkit":"-epub-text-emphasis-color = -webkit-text-emphasis-color","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-text-emphasis-position","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-text-emphasis-style","presto":"","trident":"","status":""},{"gecko":"","webkit":"-epub-text-emphasis-style = -webkit-text-emphasis-style","presto":"","trident":"","status":""},{"gecko":"","webkit":"-webkit-text-fill-color","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"","presto":"","trident":"-ms-text-justify","status":"WD"},{"gecko":"","webkit":"","presto":"","trident":"-ms-text-kashida-space","status":"P"},{"gecko":"","webkit":"-webkit-text-orientation","presto":"","trident":"","status":""},{"gecko":"","webkit":"-epub-text-orientation = -webkit-text-orientation","presto":"","trident":"","status":""},{"gecko":"","webkit":"text-overflow","presto":"text-overflow","trident":"-ms-text-overflow","status":"WD"},{"gecko":"","webkit":"-webkit-text-security","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-webkit-text-size-adjust","presto":"","trident":"-ms-text-size-adjust","status":""},{"gecko":"","webkit":"-webkit-text-stroke","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-webkit-text-stroke-color","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-webkit-text-stroke-width","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-epub-text-transform = text-transform","presto":"","trident":"","status":""},{"gecko":"","webkit":"","presto":"","trident":"-ms-text-underline-position","status":"P"},{"gecko":"","webkit":"-webkit-touch-callout","presto":"","trident":"","status":"P"},{"gecko":"-moz-transform","webkit":"-webkit-transform","presto":"-o-transform","trident":"-ms-transform","status":"WD"},{"gecko":"-moz-transform-origin","webkit":"-webkit-transform-origin","presto":"-o-transform-origin","trident":"-ms-transform-origin","status":"WD"},{"gecko":"","webkit":"-webkit-transform-origin-x","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-webkit-transform-origin-y","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-webkit-transform-origin-z","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"-webkit-transform-style","presto":"","trident":"","status":"WD"},{"gecko":"-moz-transition","webkit":"-webkit-transition","presto":"-o-transition","trident":"","status":"WD"},{"gecko":"-moz-transition-delay","webkit":"-webkit-transition-delay","presto":"-o-transition-delay","trident":"","status":"WD"},{"gecko":"-moz-transition-duration","webkit":"-webkit-transition-duration","presto":"-o-transition-duration","trident":"","status":"WD"},{"gecko":"-moz-transition-property","webkit":"-webkit-transition-property","presto":"-o-transition-property","trident":"","status":"WD"},{"gecko":"-moz-transition-timing-function","webkit":"-webkit-transition-timing-function","presto":"-o-transition-timing-function","trident":"","status":"WD"},{"gecko":"","webkit":"-webkit-user-drag","presto":"","trident":"","status":"P"},{"gecko":"-moz-user-focus","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"-moz-user-input","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"-moz-user-modify","webkit":"-webkit-user-modify","presto":"","trident":"","status":"P"},{"gecko":"-moz-user-select","webkit":"-webkit-user-select","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"","presto":"-xv-voice-balance","trident":"","status":""},{"gecko":"","webkit":"","presto":"-xv-voice-duration","trident":"","status":""},{"gecko":"","webkit":"","presto":"-xv-voice-pitch","trident":"","status":""},{"gecko":"","webkit":"","presto":"-xv-voice-pitch-range","trident":"","status":""},{"gecko":"","webkit":"","presto":"-xv-voice-rate","trident":"","status":""},{"gecko":"","webkit":"","presto":"-xv-voice-stress","trident":"","status":""},{"gecko":"","webkit":"","presto":"-xv-voice-volume","trident":"","status":""},{"gecko":"-moz-window-shadow","webkit":"","presto":"","trident":"","status":"P"},{"gecko":"","webkit":"word-break","presto":"","trident":"-ms-word-break","status":"WD"},{"gecko":"","webkit":"-epub-word-break = word-break","presto":"","trident":"","status":""},{"gecko":"word-wrap","webkit":"word-wrap","presto":"word-wrap","trident":"-ms-word-wrap","status":"WD"},{"gecko":"","webkit":"-webkit-writing-mode","presto":"writing-mode","trident":"-ms-writing-mode","status":"ED"},{"gecko":"","webkit":"-epub-writing-mode = -webkit-writing-mode","presto":"","trident":"","status":""},{"gecko":"","webkit":"zoom","presto":"","trident":"-ms-zoom","status":""}]};var kCSS_PREFIXED_VALUE=[{"gecko":"-moz-box","webkit":"-moz-box","presto":"","trident":"","generic":"box"}];var CssInspector={mVENDOR_PREFIXES:null,kEXPORTS_FOR_GECKO:true,kEXPORTS_FOR_WEBKIT:true,kEXPORTS_FOR_PRESTO:true,kEXPORTS_FOR_TRIDENT:true,cleanPrefixes:function()
{this.mVENDOR_PREFIXES=null;},prefixesForProperty:function(aProperty)
{if(!this.mVENDOR_PREFIXES){this.mVENDOR_PREFIXES={};for(var i=0;i<kCSS_VENDOR_PREFIXES.properties.length;i++){var p=kCSS_VENDOR_PREFIXES.properties[i];if(p.gecko&&(p.webkit||p.presto||p.trident)){var o={};if(this.kEXPORTS_FOR_GECKO)o[p.gecko]=true;if(this.kEXPORTS_FOR_WEBKIT&&p.webkit)o[p.webkit]=true;if(this.kEXPORTS_FOR_PRESTO&&p.presto)o[p.presto]=true;if(this.kEXPORTS_FOR_TRIDENT&&p.trident)o[p.trident]=true;this.mVENDOR_PREFIXES[p.gecko]=[];for(var j in o)
this.mVENDOR_PREFIXES[p.gecko].push(j)}}}
if(aProperty in this.mVENDOR_PREFIXES)
return this.mVENDOR_PREFIXES[aProperty].sort();return null;},parseColorStop:function(parser,token)
{var color=parser.parseColor(token);var position="";if(!color)
return null;token=parser.getToken(true,true);if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){position=token.value;token=parser.getToken(true,true);}
return{color:color,position:position}},parseGradient:function(parser,token)
{var isRadial=false;var gradient={isRepeating:false};if(token.isNotNull()){if(token.isFunction("-moz-linear-gradient(")||token.isFunction("-moz-radial-gradient(")||token.isFunction("-moz-repeating-linear-gradient(")||token.isFunction("-moz-repeating-radial-gradient(")){if(token.isFunction("-moz-radial-gradient(")||token.isFunction("-moz-repeating-radial-gradient(")){gradient.isRadial=true;}
if(token.isFunction("-moz-repeating-linear-gradient(")||token.isFunction("-moz-repeating-radial-gradient(")){gradient.isRepeating=true;}
token=parser.getToken(true,true);var haveGradientLine=false;var foundHorizPosition=false;var haveAngle=false;if(token.isAngle()){gradient.angle=token.value;haveGradientLine=true;haveAngle=true;token=parser.getToken(true,true);}
if(token.isLength()||token.isIdent("top")||token.isIdent("center")||token.isIdent("bottom")||token.isIdent("left")||token.isIdent("right")){haveGradientLine=true;if(token.isLength()||token.isIdent("left")||token.isIdent("right")){foundHorizPosition=true;}
gradient.position=token.value;token=parser.getToken(true,true);}
if(haveGradientLine){if(!haveAngle&&token.isAngle()){gradient.angle=token.value;haveAngle=true;token=parser.getToken(true,true);}
else if(token.isLength()||(foundHorizPosition&&(token.isIdent("top")||token.isIdent("center")||token.isIdent("bottom")))||(!foundHorizPosition&&(token.isLength()||token.isIdent("top")||token.isIdent("center")||token.isIdent("bottom")||token.isIdent("left")||token.isIdent("right")))){gradient.position=("position"in gradient)?gradient.position+" ":"";gradient.position+=token.value;token=parser.getToken(true,true);}
if(!haveAngle&&token.isAngle()){gradient.angle=token.value;haveAngle=true;token=parser.getToken(true,true);}
if(!token.isSymbol(","))
return null;token=parser.getToken(true,true);}
if(gradient.isRadial){if(token.isIdent("circle")||token.isIdent("ellipse")){gradient.shape=token.value;token=parser.getToken(true,true);}
if(token.isIdent("closest-side")||token.isIdent("closest-corner")||token.isIdent("farthest-side")||token.isIdent("farthest-corner")||token.isIdent("contain")||token.isIdent("cover")){gradient.size=token.value;token=parser.getToken(true,true);}
if(!("shape"in gradient)&&(token.isIdent("circle")||token.isIdent("ellipse"))){gradient.shape=token.value;token=parser.getToken(true,true);}
if((("shape"in gradient)||("size"in gradient))&&!token.isSymbol(","))
return null;else if(("shape"in gradient)||("size"in gradient))
token=parser.getToken(true,true);}
var stop1=this.parseColorStop(parser,token);if(!stop1)
return null;token=parser.currentToken();if(!token.isSymbol(","))
return null;token=parser.getToken(true,true);var stop2=this.parseColorStop(parser,token);if(!stop2)
return null;token=parser.currentToken();if(token.isSymbol(",")){token=parser.getToken(true,true);}
gradient.stops=[stop1,stop2];while(!token.isSymbol(")")){var colorstop=this.parseColorStop(parser,token);if(!colorstop)
return null;token=parser.currentToken();if(!token.isSymbol(")")&&!token.isSymbol(","))
return null;if(token.isSymbol(","))
token=parser.getToken(true,true);gradient.stops.push(colorstop);}
return gradient;}}
return null;},parseBoxShadows:function(aString)
{var parser=new CSSParser();parser._init();parser.mPreserveWS=false;parser.mPreserveComments=false;parser.mPreservedTokens=[];parser.mScanner.init(aString);var shadows=[];var token=parser.getToken(true,true);var color="",blurRadius="0px",offsetX="0px",offsetY="0px",spreadRadius="0px";var inset=false;while(token.isNotNull()){if(token.isIdent("none")){shadows.push({none:true});token=parser.getToken(true,true);}
else{if(token.isIdent('inset')){inset=true;token=parser.getToken(true,true);}
if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){var offsetX=token.value;token=parser.getToken(true,true);}
else
return[];if(!inset&&token.isIdent('inset')){inset=true;token=parser.getToken(true,true);}
if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){var offsetX=token.value;token=parser.getToken(true,true);}
else
return[];if(!inset&&token.isIdent('inset')){inset=true;token=parser.getToken(true,true);}
if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){var blurRadius=token.value;token=parser.getToken(true,true);}
if(!inset&&token.isIdent('inset')){inset=true;token=parser.getToken(true,true);}
if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){var spreadRadius=token.value;token=parser.getToken(true,true);}
if(!inset&&token.isIdent('inset')){inset=true;token=parser.getToken(true,true);}
if(token.isFunction("rgb(")||token.isFunction("rgba(")||token.isFunction("hsl(")||token.isFunction("hsla(")||token.isSymbol("#")||token.isIdent()){var color=parser.parseColor(token);token=parser.getToken(true,true);}
if(!inset&&token.isIdent('inset')){inset=true;token=parser.getToken(true,true);}
shadows.push({none:false,color:color,offsetX:offsetX,offsetY:offsetY,blurRadius:blurRadius,spreadRadius:spreadRadius});if(token.isSymbol(",")){inset=false;color="";blurRadius="0px";spreadRadius="0px"
offsetX="0px";offsetY="0px";token=parser.getToken(true,true);}
else if(!token.isNotNull())
return shadows;else
return[];}}
return shadows;},parseTextShadows:function(aString)
{var parser=new CSSParser();parser._init();parser.mPreserveWS=false;parser.mPreserveComments=false;parser.mPreservedTokens=[];parser.mScanner.init(aString);var shadows=[];var token=parser.getToken(true,true);var color="",blurRadius="0px",offsetX="0px",offsetY="0px";while(token.isNotNull()){if(token.isIdent("none")){shadows.push({none:true});token=parser.getToken(true,true);}
else{if(token.isFunction("rgb(")||token.isFunction("rgba(")||token.isFunction("hsl(")||token.isFunction("hsla(")||token.isSymbol("#")||token.isIdent()){var color=parser.parseColor(token);token=parser.getToken(true,true);}
if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){var offsetX=token.value;token=parser.getToken(true,true);}
else
return[];if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){var offsetY=token.value;token=parser.getToken(true,true);}
else
return[];if(token.isPercentage()||token.isDimensionOfUnit("cm")||token.isDimensionOfUnit("mm")||token.isDimensionOfUnit("in")||token.isDimensionOfUnit("pc")||token.isDimensionOfUnit("px")||token.isDimensionOfUnit("em")||token.isDimensionOfUnit("ex")||token.isDimensionOfUnit("pt")){var blurRadius=token.value;token=parser.getToken(true,true);}
if(!color&&(token.isFunction("rgb(")||token.isFunction("rgba(")||token.isFunction("hsl(")||token.isFunction("hsla(")||token.isSymbol("#")||token.isIdent())){var color=parser.parseColor(token);token=parser.getToken(true,true);}
shadows.push({none:false,color:color,offsetX:offsetX,offsetY:offsetY,blurRadius:blurRadius});if(token.isSymbol(",")){color="";blurRadius="0px";offsetX="0px";offsetY="0px";token=parser.getToken(true,true);}
else if(!token.isNotNull())
return shadows;else
return[];}}
return shadows;},parseBackgroundImages:function(aString)
{var parser=new CSSParser();parser._init();parser.mPreserveWS=false;parser.mPreserveComments=false;parser.mPreservedTokens=[];parser.mScanner.init(aString);var backgrounds=[];var token=parser.getToken(true,true);while(token.isNotNull()){if(token.isFunction("url(")){token=parser.getToken(true,true);var urlContent=parser.parseURL(token);backgrounds.push({type:"image",value:"url("+urlContent});token=parser.getToken(true,true);}
else if(token.isFunction("-moz-linear-gradient(")||token.isFunction("-moz-radial-gradient(")||token.isFunction("-moz-repeating-linear-gradient(")||token.isFunction("-moz-repeating-radial-gradient(")){var gradient=this.parseGradient(parser,token);backgrounds.push({type:gradient.isRadial?"radial-gradient":"linear-gradient",value:gradient});token=parser.getToken(true,true);}
else
return null;if(token.isSymbol(",")){token=parser.getToken(true,true);if(!token.isNotNull())
return null;}}
return backgrounds;},serializeGradient:function(gradient)
{var s=gradient.isRadial?(gradient.isRepeating?"-moz-repeating-radial-gradient(":"-moz-radial-gradient("):(gradient.isRepeating?"-moz-repeating-linear-gradient(":"-moz-linear-gradient(");if(gradient.angle||gradient.position)
s+=(gradient.angle?gradient.angle+" ":"")+
(gradient.position?gradient.position:"")+", ";if(gradient.isRadial&&(gradient.shape||gradient.size))
s+=(gradient.shape?gradient.shape:"")+" "+
(gradient.size?gradient.size:"")+", ";for(var i=0;i<gradient.stops.length;i++){var colorstop=gradient.stops[i];s+=colorstop.color+(colorstop.position?" "+colorstop.position:"");if(i!=gradient.stops.length-1)
s+=", ";}
s+=")";return s;},parseBorderImage:function(aString)
{var parser=new CSSParser();parser._init();parser.mPreserveWS=false;parser.mPreserveComments=false;parser.mPreservedTokens=[];parser.mScanner.init(aString);var borderImage={url:"",offsets:[],widths:[],sizes:[]};var token=parser.getToken(true,true);if(token.isFunction("url(")){token=parser.getToken(true,true);var urlContent=parser.parseURL(token);if(urlContent){borderImage.url=urlContent.substr(0,urlContent.length-1).trim();if((borderImage.url[0]=='"'&&borderImage.url[borderImage.url.length-1]=='"')||(borderImage.url[0]=="'"&&borderImage.url[borderImage.url.length-1]=="'"))
borderImage.url=borderImage.url.substr(1,borderImage.url.length-2);}
else
return null;}
else
return null;token=parser.getToken(true,true);if(token.isNumber()||token.isPercentage())
borderImage.offsets.push(token.value);else
return null;var i;for(i=0;i<3;i++){token=parser.getToken(true,true);if(token.isNumber()||token.isPercentage())
borderImage.offsets.push(token.value);else
break;}
if(i==3)
token=parser.getToken(true,true);if(token.isSymbol("/")){token=parser.getToken(true,true);if(token.isDimension()||token.isNumber("0")||(token.isIdent()&&token.value in parser.kBORDER_WIDTH_NAMES))
borderImage.widths.push(token.value);else
return null;for(var i=0;i<3;i++){token=parser.getToken(true,true);if(token.isDimension()||token.isNumber("0")||(token.isIdent()&&token.value in parser.kBORDER_WIDTH_NAMES))
borderImage.widths.push(token.value);else
break;}
if(i==3)
token=parser.getToken(true,true);}
for(var i=0;i<2;i++){if(token.isIdent("stretch")||token.isIdent("repeat")||token.isIdent("round"))
borderImage.sizes.push(token.value);else if(!token.isNotNull())
return borderImage;else
return null;token=parser.getToken(true,true);}
if(!token.isNotNull())
return borderImage;return null;},parseMediaQuery:function(aString)
{var kCONSTRAINTS={"width":true,"min-width":true,"max-width":true,"height":true,"min-height":true,"max-height":true,"device-width":true,"min-device-width":true,"max-device-width":true,"device-height":true,"min-device-height":true,"max-device-height":true,"orientation":true,"aspect-ratio":true,"min-aspect-ratio":true,"max-aspect-ratio":true,"device-aspect-ratio":true,"min-device-aspect-ratio":true,"max-device-aspect-ratio":true,"color":true,"min-color":true,"max-color":true,"color-index":true,"min-color-index":true,"max-color-index":true,"monochrome":true,"min-monochrome":true,"max-monochrome":true,"resolution":true,"min-resolution":true,"max-resolution":true,"scan":true,"grid":true};var parser=new CSSParser();parser._init();parser.mPreserveWS=false;parser.mPreserveComments=false;parser.mPreservedTokens=[];parser.mScanner.init(aString);var m={amplifier:"",medium:"",constraints:[]};var token=parser.getToken(true,true);if(token.isIdent("all")||token.isIdent("aural")||token.isIdent("braille")||token.isIdent("handheld")||token.isIdent("print")||token.isIdent("projection")||token.isIdent("screen")||token.isIdent("tty")||token.isIdent("tv")){m.medium=token.value;token=parser.getToken(true,true);}
else if(token.isIdent("not")||token.isIdent("only")){m.amplifier=token.value;token=parser.getToken(true,true);if(token.isIdent("all")||token.isIdent("aural")||token.isIdent("braille")||token.isIdent("handheld")||token.isIdent("print")||token.isIdent("projection")||token.isIdent("screen")||token.isIdent("tty")||token.isIdent("tv")){m.medium=token.value;token=parser.getToken(true,true);}
else
return null;}
if(m.medium){if(!token.isNotNull())
return m;if(token.isIdent("and")){token=parser.getToken(true,true);}
else
return null;}
while(token.isSymbol("(")){token=parser.getToken(true,true);if(token.isIdent()&&(token.value in kCONSTRAINTS)){var constraint=token.value;token=parser.getToken(true,true);if(token.isSymbol(":")){token=parser.getToken(true,true);var values=[];while(!token.isSymbol(")")){values.push(token.value);token=parser.getToken(true,true);}
if(token.isSymbol(")")){m.constraints.push({constraint:constraint,value:values});token=parser.getToken(true,true);if(token.isNotNull()){if(token.isIdent("and")){token=parser.getToken(true,true);}
else
return null;}
else
return m;}
else
return null;}
else if(token.isSymbol(")")){m.constraints.push({constraint:constraint,value:null});token=parser.getToken(true,true);if(token.isNotNull()){if(token.isIdent("and")){token=parser.getToken(true,true);}
else
return null;}
else
return m;}
else
return null;}
else
return null;}
return m;}};var CSS_ESCAPE='\\';var IS_HEX_DIGIT=1;var START_IDENT=2;var IS_IDENT=4;var IS_WHITESPACE=8;var W=IS_WHITESPACE;var I=IS_IDENT;var S=START_IDENT;var SI=IS_IDENT|START_IDENT;var XI=IS_IDENT|IS_HEX_DIGIT;var XSI=IS_IDENT|START_IDENT|IS_HEX_DIGIT;function CSSScanner(aString)
{this.init(aString);}
CSSScanner.prototype={kLexTable:[0,0,0,0,0,0,0,0,0,W,W,0,W,W,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,W,0,0,0,0,0,0,0,0,0,0,0,0,I,0,0,XI,XI,XI,XI,XI,XI,XI,XI,XI,XI,0,0,0,0,0,0,0,XSI,XSI,XSI,XSI,XSI,XSI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,0,S,0,0,SI,0,XSI,XSI,XSI,XSI,XSI,XSI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI],kHexValues:{"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"a":10,"b":11,"c":12,"d":13,"e":14,"f":15},mString:"",mPos:0,mPreservedPos:[],init:function(aString){this.mString=aString;this.mPos=0;this.mPreservedPos=[];},getCurrentPos:function(){return this.mPos;},getAlreadyScanned:function()
{return this.mString.substr(0,this.mPos);},preserveState:function(){this.mPreservedPos.push(this.mPos);},restoreState:function(){if(this.mPreservedPos.length){this.mPos=this.mPreservedPos.pop();}},forgetState:function(){if(this.mPreservedPos.length){this.mPreservedPos.pop();}},read:function(){if(this.mPos<this.mString.length)
return this.mString.charAt(this.mPos++);return-1;},peek:function(){if(this.mPos<this.mString.length)
return this.mString.charAt(this.mPos);return-1;},isHexDigit:function(c){var code=c.charCodeAt(0);return(code<256&&(this.kLexTable[code]&IS_HEX_DIGIT)!=0);},isIdentStart:function(c){var code=c.charCodeAt(0);return(code>=256||(this.kLexTable[code]&START_IDENT)!=0);},startsWithIdent:function(aFirstChar,aSecondChar){var code=aFirstChar.charCodeAt(0);return this.isIdentStart(aFirstChar)||(aFirstChar=="-"&&this.isIdentStart(aSecondChar));},isIdent:function(c){var code=c.charCodeAt(0);return(code>=256||(this.kLexTable[code]&IS_IDENT)!=0);},isSymbol:function(c){var code=c.charCodeAt(0);return(this.kLexTable[code]&IS_IDENT)!=1;},pushback:function(){this.mPos--;},nextHexValue:function(){var c=this.read();if(c==-1||!this.isHexDigit(c))
return new jscsspToken(jscsspToken.NULL_TYPE,null);var s=c;c=this.read();while(c!=-1&&this.isHexDigit(c)){s+=c;c=this.read();}
if(c!=-1)
this.pushback();return new jscsspToken(jscsspToken.HEX_TYPE,s);},gatherEscape:function(){var c=this.peek();if(c==-1)
return"";if(this.isHexDigit(c)){var code=0;for(var i=0;i<6;i++){c=this.read();if(this.isHexDigit(c))
code=code*16+this.kHexValues[c.toLowerCase()];else if(!this.isHexDigit(c)&&!this.isWhiteSpace(c)){this.pushback();break;}
else
break;}
if(i==6){c=this.peek();if(this.isWhiteSpace(c))
this.read();}
return String.fromCharCode(code);}
c=this.read();if(c!="\n")
return c;return"";},gatherIdent:function(c){var s="";if(c==CSS_ESCAPE)
s+=this.gatherEscape();else
s+=c;c=this.read();if(!this.mMediaQueryMode){while(c!=-1&&(this.isIdent(c)||c==CSS_ESCAPE)){if(c==CSS_ESCAPE)
s+=this.gatherEscape();else
s+=c;c=this.read();}}
else{while(c!=-1&&c!='{'&&c!=','){s+=c;c=this.read();}}
if(c!=-1)
this.pushback();this.mMediaQueryMode=false;return s;},parseIdent:function(c){var value=this.gatherIdent(c);var nextChar=this.peek();if(nextChar=="("){value+=this.read();return new jscsspToken(jscsspToken.FUNCTION_TYPE,value);}
return new jscsspToken(jscsspToken.IDENT_TYPE,value);},isDigit:function(c){return(c>='0')&&(c<='9');},parseComment:function(c){var s=c;while((c=this.read())!=-1){s+=c;if(c=="*"){c=this.read();if(c==-1)
break;if(c=="/"){s+=c;break;}
this.pushback();}}
return new jscsspToken(jscsspToken.COMMENT_TYPE,s);},parseNumber:function(c){var s=c;var foundDot=false;while((c=this.read())!=-1){if(c=="."){if(foundDot)
break;else{s+=c;foundDot=true;}}else if(this.isDigit(c))
s+=c;else
break;}
if(c!=-1&&this.startsWithIdent(c,this.peek())){var unit=this.gatherIdent(c);s+=unit;return new jscsspToken(jscsspToken.DIMENSION_TYPE,s,unit);}
else if(c=="%"){s+="%";return new jscsspToken(jscsspToken.PERCENTAGE_TYPE,s);}
else if(c!=-1)
this.pushback();return new jscsspToken(jscsspToken.NUMBER_TYPE,s);},parseString:function(aStop){var s=aStop;var previousChar=aStop;var c;while((c=this.read())!=-1){if(c==aStop&&previousChar!=CSS_ESCAPE){s+=c;break;}
else if(c==CSS_ESCAPE){c=this.peek();if(c==-1)
break;else if(c=="\n"||c=="\r"||c=="\f"){d=c;c=this.read();if(d=="\r"){c=this.peek();if(c=="\n")
c=this.read();}}
else{s+=this.gatherEscape();c=this.peek();}}
else if(c=="\n"||c=="\r"||c=="\f"){break;}
else
s+=c;previousChar=c;}
return new jscsspToken(jscsspToken.STRING_TYPE,s);},isWhiteSpace:function(c){var code=c.charCodeAt(0);return code<256&&(this.kLexTable[code]&IS_WHITESPACE)!=0;},eatWhiteSpace:function(c){var s=c;while((c=this.read())!=-1){if(!this.isWhiteSpace(c))
break;s+=c;}
if(c!=-1)
this.pushback();return s;},parseAtKeyword:function(c){return new jscsspToken(jscsspToken.ATRULE_TYPE,this.gatherIdent(c));},nextToken:function(){var c=this.read();if(c==-1)
return new jscsspToken(jscsspToken.NULL_TYPE,null);if(this.startsWithIdent(c,this.peek()))
return this.parseIdent(c);if(c=='@'){var nextChar=this.read();if(nextChar!=-1){var followingChar=this.peek();this.pushback();if(this.startsWithIdent(nextChar,followingChar))
return this.parseAtKeyword(c);}}
if(c=="."||c=="+"||c=="-"){var nextChar=this.peek();if(this.isDigit(nextChar))
return this.parseNumber(c);else if(nextChar=="."&&c!="."){firstChar=this.read();var secondChar=this.peek();this.pushback();if(this.isDigit(secondChar))
return this.parseNumber(c);}}
if(this.isDigit(c)){return this.parseNumber(c);}
if(c=="'"||c=='"')
return this.parseString(c);if(this.isWhiteSpace(c)){var s=this.eatWhiteSpace(c);return new jscsspToken(jscsspToken.WHITESPACE_TYPE,s);}
if(c=="|"||c=="~"||c=="^"||c=="$"||c=="*"){var nextChar=this.read();if(nextChar=="="){switch(c){case"~":return new jscsspToken(jscsspToken.INCLUDES_TYPE,"~=");case"|":return new jscsspToken(jscsspToken.DASHMATCH_TYPE,"|=");case"^":return new jscsspToken(jscsspToken.BEGINSMATCH_TYPE,"^=");case"$":return new jscsspToken(jscsspToken.ENDSMATCH_TYPE,"$=");case"*":return new jscsspToken(jscsspToken.CONTAINSMATCH_TYPE,"*=");default:break;}}else if(nextChar!=-1)
this.pushback();}
if(c=="/"&&this.peek()=="*")
return this.parseComment(c);return new jscsspToken(jscsspToken.SYMBOL_TYPE,c);}};function CSSParser(aString)
{this.mToken=null;this.mLookAhead=null;this.mScanner=new CSSScanner(aString);this.mPreserveWS=true;this.mPreserveComments=true;this.mPreservedTokens=[];this.mError=null;}
CSSParser.prototype={_init:function(){this.mToken=null;this.mLookAhead=null;this.mMediaQueryMode=false;},kINHERIT:"inherit",kBORDER_WIDTH_NAMES:{"thin":true,"medium":true,"thick":true},kBORDER_STYLE_NAMES:{"none":true,"hidden":true,"dotted":true,"dashed":true,"solid":true,"double":true,"groove":true,"ridge":true,"inset":true,"outset":true},kCOLOR_NAMES:{"transparent":true,"black":true,"silver":true,"gray":true,"white":true,"maroon":true,"red":true,"purple":true,"fuchsia":true,"green":true,"lime":true,"olive":true,"yellow":true,"navy":true,"blue":true,"teal":true,"aqua":true,"aliceblue":true,"antiquewhite":true,"aqua":true,"aquamarine":true,"azure":true,"beige":true,"bisque":true,"black":true,"blanchedalmond":true,"blue":true,"blueviolet":true,"brown":true,"burlywood":true,"cadetblue":true,"chartreuse":true,"chocolate":true,"coral":true,"cornflowerblue":true,"cornsilk":true,"crimson":true,"cyan":true,"darkblue":true,"darkcyan":true,"darkgoldenrod":true,"darkgray":true,"darkgreen":true,"darkgrey":true,"darkkhaki":true,"darkmagenta":true,"darkolivegreen":true,"darkorange":true,"darkorchid":true,"darkred":true,"darksalmon":true,"darkseagreen":true,"darkslateblue":true,"darkslategray":true,"darkslategrey":true,"darkturquoise":true,"darkviolet":true,"deeppink":true,"deepskyblue":true,"dimgray":true,"dimgrey":true,"dodgerblue":true,"firebrick":true,"floralwhite":true,"forestgreen":true,"fuchsia":true,"gainsboro":true,"ghostwhite":true,"gold":true,"goldenrod":true,"gray":true,"green":true,"greenyellow":true,"grey":true,"honeydew":true,"hotpink":true,"indianred":true,"indigo":true,"ivory":true,"khaki":true,"lavender":true,"lavenderblush":true,"lawngreen":true,"lemonchiffon":true,"lightblue":true,"lightcoral":true,"lightcyan":true,"lightgoldenrodyellow":true,"lightgray":true,"lightgreen":true,"lightgrey":true,"lightpink":true,"lightsalmon":true,"lightseagreen":true,"lightskyblue":true,"lightslategray":true,"lightslategrey":true,"lightsteelblue":true,"lightyellow":true,"lime":true,"limegreen":true,"linen":true,"magenta":true,"maroon":true,"mediumaquamarine":true,"mediumblue":true,"mediumorchid":true,"mediumpurple":true,"mediumseagreen":true,"mediumslateblue":true,"mediumspringgreen":true,"mediumturquoise":true,"mediumvioletred":true,"midnightblue":true,"mintcream":true,"mistyrose":true,"moccasin":true,"navajowhite":true,"navy":true,"oldlace":true,"olive":true,"olivedrab":true,"orange":true,"orangered":true,"orchid":true,"palegoldenrod":true,"palegreen":true,"paleturquoise":true,"palevioletred":true,"papayawhip":true,"peachpuff":true,"peru":true,"pink":true,"plum":true,"powderblue":true,"purple":true,"red":true,"rosybrown":true,"royalblue":true,"saddlebrown":true,"salmon":true,"sandybrown":true,"seagreen":true,"seashell":true,"sienna":true,"silver":true,"skyblue":true,"slateblue":true,"slategray":true,"slategrey":true,"snow":true,"springgreen":true,"steelblue":true,"tan":true,"teal":true,"thistle":true,"tomato":true,"turquoise":true,"violet":true,"wheat":true,"white":true,"whitesmoke":true,"yellow":true,"yellowgreen":true,"activeborder":true,"activecaption":true,"appworkspace":true,"background":true,"buttonface":true,"buttonhighlight":true,"buttonshadow":true,"buttontext":true,"captiontext":true,"graytext":true,"highlight":true,"highlighttext":true,"inactiveborder":true,"inactivecaption":true,"inactivecaptiontext":true,"infobackground":true,"infotext":true,"menu":true,"menutext":true,"scrollbar":true,"threeddarkshadow":true,"threedface":true,"threedhighlight":true,"threedlightshadow":true,"threedshadow":true,"window":true,"windowframe":true,"windowtext":true},kLIST_STYLE_TYPE_NAMES:{"decimal":true,"decimal-leading-zero":true,"lower-roman":true,"upper-roman":true,"georgian":true,"armenian":true,"lower-latin":true,"lower-alpha":true,"upper-latin":true,"upper-alpha":true,"lower-greek":true,"disc":true,"circle":true,"square":true,"none":true,"box":true,"check":true,"diamond":true,"hyphen":true,"lower-armenian":true,"cjk-ideographic":true,"ethiopic-numeric":true,"hebrew":true,"japanese-formal":true,"japanese-informal":true,"simp-chinese-formal":true,"simp-chinese-informal":true,"syriac":true,"tamil":true,"trad-chinese-formal":true,"trad-chinese-informal":true,"upper-armenian":true,"arabic-indic":true,"binary":true,"bengali":true,"cambodian":true,"khmer":true,"devanagari":true,"gujarati":true,"gurmukhi":true,"kannada":true,"lower-hexadecimal":true,"lao":true,"malayalam":true,"mongolian":true,"myanmar":true,"octal":true,"oriya":true,"persian":true,"urdu":true,"telugu":true,"tibetan":true,"upper-hexadecimal":true,"afar":true,"ethiopic-halehame-aa-et":true,"ethiopic-halehame-am-et":true,"amharic-abegede":true,"ehiopic-abegede-am-et":true,"cjk-earthly-branch":true,"cjk-heavenly-stem":true,"ethiopic":true,"ethiopic-abegede":true,"ethiopic-abegede-gez":true,"hangul-consonant":true,"hangul":true,"hiragana-iroha":true,"hiragana":true,"katakana-iroha":true,"katakana":true,"lower-norwegian":true,"oromo":true,"ethiopic-halehame-om-et":true,"sidama":true,"ethiopic-halehame-sid-et":true,"somali":true,"ethiopic-halehame-so-et":true,"tigre":true,"ethiopic-halehame-tig":true,"tigrinya-er-abegede":true,"ethiopic-abegede-ti-er":true,"tigrinya-et":true,"ethiopic-halehame-ti-et":true,"upper-greek":true,"asterisks":true,"footnotes":true,"circled-decimal":true,"circled-lower-latin":true,"circled-upper-latin":true,"dotted-decimal":true,"double-circled-decimal":true,"filled-circled-decimal":true,"parenthesised-decimal":true,"parenthesised-lower-latin":true},reportError:function(aMsg){this.mError=aMsg;},consumeError:function(){var e=this.mError;this.mError=null;return e;},currentToken:function(){return this.mToken;},getHexValue:function(){this.mToken=this.mScanner.nextHexValue();return this.mToken;},getToken:function(aSkipWS,aSkipComment){if(this.mLookAhead){this.mToken=this.mLookAhead;this.mLookAhead=null;return this.mToken;}
this.mToken=this.mScanner.nextToken();while(this.mToken&&((aSkipWS&&this.mToken.isWhiteSpace())||(aSkipComment&&this.mToken.isComment())))
this.mToken=this.mScanner.nextToken();return this.mToken;},lookAhead:function(aSkipWS,aSkipComment){var preservedToken=this.mToken;this.mScanner.preserveState();var token=this.getToken(aSkipWS,aSkipComment);this.mScanner.restoreState();this.mToken=preservedToken;return token;},ungetToken:function(){this.mLookAhead=this.mToken;},addUnknownAtRule:function(aSheet,aString){var currentLine=CountLF(this.mScanner.getAlreadyScanned());var blocks=[];var token=this.getToken(false,false);while(token.isNotNull()){aString+=token.value;if(token.isSymbol(";")&&!blocks.length)
break;else if(token.isSymbol("{")||token.isSymbol("(")||token.isSymbol("[")||token.type=="function"){blocks.push(token.isFunction()?"(":token.value);}else if(token.isSymbol("}")||token.isSymbol(")")||token.isSymbol("]")){if(blocks.length){var ontop=blocks[blocks.length-1];if((token.isSymbol("}")&&ontop=="{")||(token.isSymbol(")")&&ontop=="(")||(token.isSymbol("]")&&ontop=="[")){blocks.pop();if(!blocks.length&&token.isSymbol("}"))
break;}}}
token=this.getToken(false,false);}
this.addUnknownRule(aSheet,aString,currentLine);},addUnknownRule:function(aSheet,aString,aCurrentLine){var errorMsg=this.consumeError();var rule=new jscsspErrorRule(errorMsg);rule.currentLine=aCurrentLine;rule.parsedCssText=aString;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule);},addWhitespace:function(aSheet,aString){var rule=new jscsspWhitespace();rule.parsedCssText=aString;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule);},addComment:function(aSheet,aString){var rule=new jscsspComment();rule.parsedCssText=aString;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule);},parseCharsetRule:function(aToken,aSheet){var s=aToken.value;var token=this.getToken(false,false);s+=token.value;if(token.isWhiteSpace(" ")){token=this.getToken(false,false);s+=token.value;if(token.isString()){var encoding=token.value;token=this.getToken(false,false);s+=token.value;if(token.isSymbol(";")){var rule=new jscsspCharsetRule();rule.encoding=encoding;rule.parsedCssText=s;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule);return true;}
else
this.reportError(kCHARSET_RULE_MISSING_SEMICOLON);}
else
this.reportError(kCHARSET_RULE_CHARSET_IS_STRING);}
else
this.reportError(kCHARSET_RULE_MISSING_WS);this.addUnknownAtRule(aSheet,s);return false;},parseImportRule:function(aToken,aSheet){var currentLine=CountLF(this.mScanner.getAlreadyScanned());var s=aToken.value;this.preserveState();var token=this.getToken(true,true);var media=[];var href="";if(token.isString()){href=token.value;s+=" "+href;}
else if(token.isFunction("url(")){token=this.getToken(true,true);var urlContent=this.parseURL(token);if(urlContent){href="url("+urlContent;s+=" "+href;}}
else
this.reportError(kIMPORT_RULE_MISSING_URL);if(href){token=this.getToken(true,true);while(token.isIdent()){s+=" "+token.value;media.push(token.value);token=this.getToken(true,true);if(!token)
break;if(token.isSymbol(",")){s+=",";}else if(token.isSymbol(";")){break;}else
break;token=this.getToken(true,true);}
if(!media.length){media.push("all");}
if(token.isSymbol(";")){s+=";"
this.forgetState();var rule=new jscsspImportRule();rule.currentLine=currentLine;rule.parsedCssText=s;rule.href=href;rule.media=media;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule);return true;}}
this.restoreState();this.addUnknownAtRule(aSheet,"@import");return false;},parseVariablesRule:function(token,aSheet){var currentLine=CountLF(this.mScanner.getAlreadyScanned());var s=token.value;var declarations=[];var valid=false;this.preserveState();token=this.getToken(true,true);var media=[];var foundMedia=false;while(token.isNotNull()){if(token.isIdent()){foundMedia=true;s+=" "+token.value;media.push(token.value);token=this.getToken(true,true);if(token.isSymbol(",")){s+=",";}else{if(token.isSymbol("{"))
this.ungetToken();else{token.type=jscsspToken.NULL_TYPE;break;}}}else if(token.isSymbol("{"))
break;else if(foundMedia){token.type=jscsspToken.NULL_TYPE;break;}
token=this.getToken(true,true);}
if(token.isSymbol("{")){s+=" {";token=this.getToken(true,true);while(true){if(!token.isNotNull()){valid=true;break;}
if(token.isSymbol("}")){s+="}";valid=true;break;}else{var d=this.parseDeclaration(token,declarations,true,false,aSheet);s+=((d&&declarations.length)?" ":"")+d;}
token=this.getToken(true,false);}}
if(valid){this.forgetState();var rule=new jscsspVariablesRule();rule.currentLine=currentLine;rule.parsedCssText=s;rule.declarations=declarations;rule.media=media;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule)
return true;}
this.restoreState();return false;},parseNamespaceRule:function(aToken,aSheet){var currentLine=CountLF(this.mScanner.getAlreadyScanned());var s=aToken.value;var valid=false;this.preserveState();var token=this.getToken(true,true);if(token.isNotNull()){var prefix="";var url="";if(token.isIdent()){prefix=token.value;s+=" "+prefix;token=this.getToken(true,true);}
if(token){var foundURL=false;if(token.isString()){foundURL=true;url=token.value;s+=" "+url;}else if(token.isFunction("url(")){token=this.getToken(true,true);var urlContent=this.parseURL(token);if(urlContent){url+="url("+urlContent;foundURL=true;s+=" "+urlContent;}}}
if(foundURL){token=this.getToken(true,true);if(token.isSymbol(";")){s+=";";this.forgetState();var rule=new jscsspNamespaceRule();rule.currentLine=currentLine;rule.parsedCssText=s;rule.prefix=prefix;rule.url=url;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule);return true;}}}
this.restoreState();this.addUnknownAtRule(aSheet,"@namespace");return false;},parseFontFaceRule:function(aToken,aSheet){var currentLine=CountLF(this.mScanner.getAlreadyScanned());var s=aToken.value;var valid=false;var descriptors=[];this.preserveState();var token=this.getToken(true,true);if(token.isNotNull()){if(token.isSymbol("{")){s+=" "+token.value;var token=this.getToken(true,false);while(true){if(token.isSymbol("}")){s+="}";valid=true;break;}else{var d=this.parseDeclaration(token,descriptors,false,false,aSheet);s+=((d&&descriptors.length)?" ":"")+d;}
token=this.getToken(true,false);}}}
if(valid){this.forgetState();var rule=new jscsspFontFaceRule();rule.currentLine=currentLine;rule.parsedCssText=s;rule.descriptors=descriptors;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule)
return true;}
this.restoreState();return false;},parsePageRule:function(aToken,aSheet){var currentLine=CountLF(this.mScanner.getAlreadyScanned());var s=aToken.value;var valid=false;var declarations=[];this.preserveState();var token=this.getToken(true,true);var pageSelector="";if(token.isSymbol(":")||token.isIdent()){if(token.isSymbol(":")){pageSelector=":";token=this.getToken(false,false);}
if(token.isIdent()){pageSelector+=token.value;s+=" "+pageSelector;token=this.getToken(true,true);}}
if(token.isNotNull()){if(token.isSymbol("{")){s+=" "+token.value;var token=this.getToken(true,false);while(true){if(token.isSymbol("}")){s+="}";valid=true;break;}else{var d=this.parseDeclaration(token,declarations,true,true,aSheet);s+=((d&&declarations.length)?" ":"")+d;}
token=this.getToken(true,false);}}}
if(valid){this.forgetState();var rule=new jscsspPageRule();rule.currentLine=currentLine;rule.parsedCssText=s;rule.pageSelector=pageSelector;rule.declarations=declarations;rule.parentStyleSheet=aSheet;aSheet.cssRules.push(rule)
return true;}
this.restoreState();return false;},parseDefaultPropertyValue:function(token,aDecl,aAcceptPriority,descriptor,aSheet){var valueText="";var blocks=[];var foundPriority=false;var values=[];while(token.isNotNull()){if((token.isSymbol(";")||token.isSymbol("}")||token.isSymbol("!"))&&!blocks.length){if(token.isSymbol("}"))
this.ungetToken();break;}
if(token.isIdent(this.kINHERIT)){if(values.length){return"";}
else{valueText=this.kINHERIT;var value=new jscsspVariable(kJscsspINHERIT_VALUE,aSheet);values.push(value);token=this.getToken(true,true);break;}}
else if(token.isSymbol("{")||token.isSymbol("(")||token.isSymbol("[")){blocks.push(token.value);}
else if(token.isSymbol("}")||token.isSymbol("]")){if(blocks.length){var ontop=blocks[blocks.length-1];if((token.isSymbol("}")&&ontop=="{")||(token.isSymbol(")")&&ontop=="(")||(token.isSymbol("]")&&ontop=="[")){blocks.pop();}}}
if(token.isFunction()){if(token.isFunction("var(")){token=this.getToken(true,true);if(token.isIdent()){var name=token.value;token=this.getToken(true,true);if(token.isSymbol(")")){var value=new jscsspVariable(kJscsspVARIABLE_VALUE,aSheet);valueText+="var("+name+")";value.name=name;values.push(value);}
else
return"";}
else
return"";}
else{var fn=token.value;token=this.getToken(false,true);var arg=this.parseFunctionArgument(token);if(arg){valueText+=fn+arg;var value=new jscsspVariable(kJscsspPRIMITIVE_VALUE,aSheet);value.value=fn+arg;values.push(value);}
else
return"";}}
else if(token.isSymbol("#")){var color=this.parseColor(token);if(color){valueText+=color;var value=new jscsspVariable(kJscsspPRIMITIVE_VALUE,aSheet);value.value=color;values.push(value);}
else
return"";}
else if(!token.isWhiteSpace()&&!token.isSymbol(",")){var value=new jscsspVariable(kJscsspPRIMITIVE_VALUE,aSheet);value.value=token.value;values.push(value);valueText+=token.value;}
else
valueText+=token.value;token=this.getToken(false,true);}
if(values.length&&valueText){this.forgetState();aDecl.push(this._createJscsspDeclarationFromValuesArray(descriptor,values,valueText));return valueText;}
return"";},parseMarginOrPaddingShorthand:function(token,aDecl,aAcceptPriority,aProperty)
{var top=null;var bottom=null;var left=null;var right=null;var values=[];while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!values.length&&token.isIdent(this.kINHERIT)){values.push(token.value);token=this.getToken(true,true);break;}
else if(token.isDimension()||token.isNumber("0")||token.isPercentage()||token.isIdent("auto")){values.push(token.value);}
else
return"";token=this.getToken(true,true);}
var count=values.length;switch(count){case 1:top=values[0];bottom=top;left=top;right=top;break;case 2:top=values[0];bottom=top;left=values[1];right=left;break;case 3:top=values[0];left=values[1];right=left;bottom=values[2];break;case 4:top=values[0];right=values[1];bottom=values[2];left=values[3];break;default:return"";}
this.forgetState();aDecl.push(this._createJscsspDeclarationFromValue(aProperty+"-top",top));aDecl.push(this._createJscsspDeclarationFromValue(aProperty+"-right",right));aDecl.push(this._createJscsspDeclarationFromValue(aProperty+"-bottom",bottom));aDecl.push(this._createJscsspDeclarationFromValue(aProperty+"-left",left));return top+" "+right+" "+bottom+" "+left;},parseBorderColorShorthand:function(token,aDecl,aAcceptPriority)
{var top=null;var bottom=null;var left=null;var right=null;var values=[];while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!values.length&&token.isIdent(this.kINHERIT)){values.push(token.value);token=this.getToken(true,true);break;}
else{var color=this.parseColor(token);if(color)
values.push(color);else
return"";}
token=this.getToken(true,true);}
var count=values.length;switch(count){case 1:top=values[0];bottom=top;left=top;right=top;break;case 2:top=values[0];bottom=top;left=values[1];right=left;break;case 3:top=values[0];left=values[1];right=left;bottom=values[2];break;case 4:top=values[0];right=values[1];bottom=values[2];left=values[3];break;default:return"";}
this.forgetState();aDecl.push(this._createJscsspDeclarationFromValue("border-top-color",top));aDecl.push(this._createJscsspDeclarationFromValue("border-right-color",right));aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-color",bottom));aDecl.push(this._createJscsspDeclarationFromValue("border-left-color",left));return top+" "+right+" "+bottom+" "+left;},parseCueShorthand:function(token,declarations,aAcceptPriority)
{var before="";var after="";var values=[];var values=[];while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!values.length&&token.isIdent(this.kINHERIT)){values.push(token.value);}
else if(token.isIdent("none"))
values.push(token.value);else if(token.isFunction("url(")){var token=this.getToken(true,true);var urlContent=this.parseURL(token);if(urlContent)
values.push("url("+urlContent);else
return"";}
else
return"";token=this.getToken(true,true);}
var count=values.length;switch(count){case 1:before=values[0];after=before;break;case 2:before=values[0];after=values[1];break;default:return"";}
this.forgetState();aDecl.push(this._createJscsspDeclarationFromValue("cue-before",before));aDecl.push(this._createJscsspDeclarationFromValue("cue-after",after));return before+" "+after;},parsePauseShorthand:function(token,declarations,aAcceptPriority)
{var before="";var after="";var values=[];var values=[];while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!values.length&&token.isIdent(this.kINHERIT)){values.push(token.value);}
else if(token.isDimensionOfUnit("ms")||token.isDimensionOfUnit("s")||token.isPercentage()||token.isNumber("0"))
values.push(token.value);else
return"";token=this.getToken(true,true);}
var count=values.length;switch(count){case 1:before=values[0];after=before;break;case 2:before=values[0];after=values[1];break;default:return"";}
this.forgetState();aDecl.push(this._createJscsspDeclarationFromValue("pause-before",before));aDecl.push(this._createJscsspDeclarationFromValue("pause-after",after));return before+" "+after;},parseBorderWidthShorthand:function(token,aDecl,aAcceptPriority)
{var top=null;var bottom=null;var left=null;var right=null;var values=[];while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!values.length&&token.isIdent(this.kINHERIT)){values.push(token.value);}
else if(token.isDimension()||token.isNumber("0")||(token.isIdent()&&token.value in this.kBORDER_WIDTH_NAMES)){values.push(token.value);}
else
return"";token=this.getToken(true,true);}
var count=values.length;switch(count){case 1:top=values[0];bottom=top;left=top;right=top;break;case 2:top=values[0];bottom=top;left=values[1];right=left;break;case 3:top=values[0];left=values[1];right=left;bottom=values[2];break;case 4:top=values[0];right=values[1];bottom=values[2];left=values[3];break;default:return"";}
this.forgetState();aDecl.push(this._createJscsspDeclarationFromValue("border-top-width",top));aDecl.push(this._createJscsspDeclarationFromValue("border-right-width",right));aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-width",bottom));aDecl.push(this._createJscsspDeclarationFromValue("border-left-width",left));return top+" "+right+" "+bottom+" "+left;},parseBorderStyleShorthand:function(token,aDecl,aAcceptPriority)
{var top=null;var bottom=null;var left=null;var right=null;var values=[];while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!values.length&&token.isIdent(this.kINHERIT)){values.push(token.value);}
else if(token.isIdent()&&token.value in this.kBORDER_STYLE_NAMES){values.push(token.value);}
else
return"";token=this.getToken(true,true);}
var count=values.length;switch(count){case 1:top=values[0];bottom=top;left=top;right=top;break;case 2:top=values[0];bottom=top;left=values[1];right=left;break;case 3:top=values[0];left=values[1];right=left;bottom=values[2];break;case 4:top=values[0];right=values[1];bottom=values[2];left=values[3];break;default:return"";}
this.forgetState();aDecl.push(this._createJscsspDeclarationFromValue("border-top-style",top));aDecl.push(this._createJscsspDeclarationFromValue("border-right-style",right));aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-style",bottom));aDecl.push(this._createJscsspDeclarationFromValue("border-left-style",left));return top+" "+right+" "+bottom+" "+left;},parseBorderEdgeOrOutlineShorthand:function(token,aDecl,aAcceptPriority,aProperty)
{var bWidth=null;var bStyle=null;var bColor=null;while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!bWidth&&!bStyle&&!bColor&&token.isIdent(this.kINHERIT)){bWidth=this.kINHERIT;bStyle=this.kINHERIT;bColor=this.kINHERIT;}
else if(!bWidth&&(token.isDimension()||(token.isIdent()&&token.value in this.kBORDER_WIDTH_NAMES)||token.isNumber("0"))){bWidth=token.value;}
else if(!bStyle&&(token.isIdent()&&token.value in this.kBORDER_STYLE_NAMES)){bStyle=token.value;}
else{var color=(aProperty=="outline"&&token.isIdent("invert"))?"invert":this.parseColor(token);if(!bColor&&color)
bColor=color;else
return"";}
token=this.getToken(true,true);}
this.forgetState();bWidth=bWidth?bWidth:"medium";bStyle=bStyle?bStyle:"none";bColor=bColor?bColor:"-moz-initial";function addPropertyToDecl(aSelf,aDecl,property,w,s,c){aDecl.push(aSelf._createJscsspDeclarationFromValue(property+"-width",w));aDecl.push(aSelf._createJscsspDeclarationFromValue(property+"-style",s));aDecl.push(aSelf._createJscsspDeclarationFromValue(property+"-color",c));}
if(aProperty=="border"){addPropertyToDecl(this,aDecl,"border-top",bWidth,bStyle,bColor);addPropertyToDecl(this,aDecl,"border-right",bWidth,bStyle,bColor);addPropertyToDecl(this,aDecl,"border-bottom",bWidth,bStyle,bColor);addPropertyToDecl(this,aDecl,"border-left",bWidth,bStyle,bColor);}
else
addPropertyToDecl(this,aDecl,aProperty,bWidth,bStyle,bColor);return bWidth+" "+bStyle+" "+bColor;},parseBackgroundShorthand:function(token,aDecl,aAcceptPriority)
{var kHPos={"left":true,"right":true};var kVPos={"top":true,"bottom":true};var kPos={"left":true,"right":true,"top":true,"bottom":true,"center":true};var bgColor=null;var bgRepeat=null;var bgAttachment=null;var bgImage=null;var bgPosition=null;while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!bgColor&&!bgRepeat&&!bgAttachment&&!bgImage&&!bgPosition&&token.isIdent(this.kINHERIT)){bgColor=this.kINHERIT;bgRepeat=this.kINHERIT;bgAttachment=this.kINHERIT;bgImage=this.kINHERIT;bgPosition=this.kINHERIT;}
else{if(!bgAttachment&&(token.isIdent("scroll")||token.isIdent("fixed"))){bgAttachment=token.value;}
else if(!bgPosition&&((token.isIdent()&&token.value in kPos)||token.isDimension()||token.isNumber("0")||token.isPercentage())){bgPosition=token.value;token=this.getToken(true,true);if(token.isDimension()||token.isNumber("0")||token.isPercentage()){bgPosition+=" "+token.value;}
else if(token.isIdent()&&token.value in kPos){if((bgPosition in kHPos&&token.value in kHPos)||(bgPosition in kVPos&&token.value in kVPos))
return"";bgPosition+=" "+token.value;}
else{this.ungetToken();bgPosition+=" center";}}
else if(!bgRepeat&&(token.isIdent("repeat")||token.isIdent("repeat-x")||token.isIdent("repeat-y")||token.isIdent("no-repeat"))){bgRepeat=token.value;}
else if(!bgImage&&(token.isFunction("url(")||token.isIdent("none"))){bgImage=token.value;if(token.isFunction("url(")){token=this.getToken(true,true);var url=this.parseURL(token);if(url)
bgImage+=url;else
return"";}}
else if(!bgImage&&(token.isFunction("-moz-linear-gradient(")||token.isFunction("-moz-radial-gradient(")||token.isFunction("-moz-repeating-linear-gradient(")||token.isFunction("-moz-repeating-radial-gradient("))){var gradient=CssInspector.parseGradient(this,token);if(gradient)
bgImage=CssInspector.serializeGradient(gradient);else
return"";}
else{var color=this.parseColor(token);if(!bgColor&&color)
bgColor=color;else
return"";}}
token=this.getToken(true,true);}
this.forgetState();bgColor=bgColor?bgColor:"transparent";bgImage=bgImage?bgImage:"none";bgRepeat=bgRepeat?bgRepeat:"repeat";bgAttachment=bgAttachment?bgAttachment:"scroll";bgPosition=bgPosition?bgPosition:"top left";aDecl.push(this._createJscsspDeclarationFromValue("background-color",bgColor));aDecl.push(this._createJscsspDeclarationFromValue("background-image",bgImage));aDecl.push(this._createJscsspDeclarationFromValue("background-repeat",bgRepeat));aDecl.push(this._createJscsspDeclarationFromValue("background-attachment",bgAttachment));aDecl.push(this._createJscsspDeclarationFromValue("background-position",bgPosition));return bgColor+" "+bgImage+" "+bgRepeat+" "+bgAttachment+" "+bgPosition;},parseListStyleShorthand:function(token,aDecl,aAcceptPriority)
{var kPosition={"inside":true,"outside":true};var lType=null;var lPosition=null;var lImage=null;while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!lType&&!lPosition&&!lImage&&token.isIdent(this.kINHERIT)){lType=this.kINHERIT;lPosition=this.kINHERIT;lImage=this.kINHERIT;}
else if(!lType&&(token.isIdent()&&token.value in this.kLIST_STYLE_TYPE_NAMES)){lType=token.value;}
else if(!lPosition&&(token.isIdent()&&token.value in kPosition)){lPosition=token.value;}
else if(!lImage&&token.isFunction("url")){token=this.getToken(true,true);var urlContent=this.parseURL(token);if(urlContent){lImage="url("+urlContent;}
else
return"";}
else if(!token.isIdent("none"))
return"";token=this.getToken(true,true);}
this.forgetState();lType=lType?lType:"none";lImage=lImage?lImage:"none";lPosition=lPosition?lPosition:"outside";aDecl.push(this._createJscsspDeclarationFromValue("list-style-type",lType));aDecl.push(this._createJscsspDeclarationFromValue("list-style-position",lPosition));aDecl.push(this._createJscsspDeclarationFromValue("list-style-image",lImage));return lType+" "+lPosition+" "+lImage;},parseFontShorthand:function(token,aDecl,aAcceptPriority)
{var kStyle={"italic":true,"oblique":true};var kVariant={"small-caps":true};var kWeight={"bold":true,"bolder":true,"lighter":true,"100":true,"200":true,"300":true,"400":true,"500":true,"600":true,"700":true,"800":true,"900":true};var kSize={"xx-small":true,"x-small":true,"small":true,"medium":true,"large":true,"x-large":true,"xx-large":true,"larger":true,"smaller":true};var kValues={"caption":true,"icon":true,"menu":true,"message-box":true,"small-caption":true,"status-bar":true};var kFamily={"serif":true,"sans-serif":true,"cursive":true,"fantasy":true,"monospace":true};var fStyle=null;var fVariant=null;var fWeight=null;var fSize=null;var fLineHeight=null;var fFamily="";var fSystem=null;var fFamilyValues=[];var normalCount=0;while(true){if(!token.isNotNull())
break;if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();break;}
else if(!fStyle&&!fVariant&&!fWeight&&!fSize&&!fLineHeight&&!fFamily&&!fSystem&&token.isIdent(this.kINHERIT)){fStyle=this.kINHERIT;fVariant=this.kINHERIT;fWeight=this.kINHERIT;fSize=this.kINHERIT;fLineHeight=this.kINHERIT;fFamily=this.kINHERIT;fSystem=this.kINHERIT;}
else{if(!fSystem&&(token.isIdent()&&token.value in kValues)){fSystem=token.value;break;}
else{if(!fStyle&&token.isIdent()&&(token.value in kStyle)){fStyle=token.value;}
else if(!fVariant&&token.isIdent()&&(token.value in kVariant)){fVariant=token.value;}
else if(!fWeight&&(token.isIdent()||token.isNumber())&&(token.value in kWeight)){fWeight=token.value;}
else if(!fSize&&((token.isIdent()&&(token.value in kSize))||token.isDimension()||token.isPercentage())){fSize=token.value;var token=this.getToken(false,false);if(token.isSymbol("/")){token=this.getToken(false,false);if(!fLineHeight&&(token.isDimension()||token.isNumber()||token.isPercentage())){fLineHeight=token.value;}
else
return"";}
else
this.ungetToken();}
else if(token.isIdent("normal")){normalCount++;if(normalCount>3)
return"";}
else if(!fFamily&&(token.isString()||token.isIdent())){var lastWasComma=false;while(true){if(!token.isNotNull())
break;else if(token.isSymbol(";")||(aAcceptPriority&&token.isSymbol("!"))||token.isSymbol("}")){this.ungetToken();break;}
else if(token.isIdent()&&token.value in kFamily){var value=new jscsspVariable(kJscsspPRIMITIVE_VALUE,null);value.value=token.value;fFamilyValues.push(value);fFamily+=token.value;break;}
else if(token.isString()||token.isIdent()){var value=new jscsspVariable(kJscsspPRIMITIVE_VALUE,null);value.value=token.value;fFamilyValues.push(value);fFamily+=token.value;lastWasComma=false;}
else if(!lastWasComma&&token.isSymbol(",")){fFamily+=", ";lastWasComma=true;}
else
return"";token=this.getToken(true,true);}}
else{return"";}}}
token=this.getToken(true,true);}
this.forgetState();if(fSystem){aDecl.push(this._createJscsspDeclarationFromValue("font",fSystem));return fSystem;}
fStyle=fStyle?fStyle:"normal";fVariant=fVariant?fVariant:"normal";fWeight=fWeight?fWeight:"normal";fSize=fSize?fSize:"medium";fLineHeight=fLineHeight?fLineHeight:"normal";fFamily=fFamily?fFamily:"-moz-initial";aDecl.push(this._createJscsspDeclarationFromValue("font-style",fStyle));aDecl.push(this._createJscsspDeclarationFromValue("font-variant",fVariant));aDecl.push(this._createJscsspDeclarationFromValue("font-weight",fWeight));aDecl.push(this._createJscsspDeclarationFromValue("font-size",fSize));aDecl.push(this._createJscsspDeclarationFromValue("line-height",fLineHeight));aDecl.push(this._createJscsspDeclarationFromValuesArray("font-family",fFamilyValues,fFamily));return fStyle+" "+fVariant+" "+fWeight+" "+fSize+"/"+fLineHeight+" "+fFamily;},_createJscsspDeclaration:function(property,value)
{var decl=new jscsspDeclaration();decl.property=property;decl.value=this.trim11(value);decl.parsedCssText=property+": "+value+";";return decl;},_createJscsspDeclarationFromValue:function(property,valueText)
{var decl=new jscsspDeclaration();decl.property=property;var value=new jscsspVariable(kJscsspPRIMITIVE_VALUE,null);value.value=valueText;decl.values=[value];decl.valueText=valueText;decl.parsedCssText=property+": "+valueText+";";return decl;},_createJscsspDeclarationFromValuesArray:function(property,values,valueText)
{var decl=new jscsspDeclaration();decl.property=property;decl.values=values;decl.valueText=valueText;decl.parsedCssText=property+": "+valueText+";";return decl;},parseURL:function(token)
{var value="";if(token.isString())
{value+=token.value;token=this.getToken(true,true);}
else
while(true)
{if(!token.isNotNull()){this.reportError(kURL_EOF);return"";}
if(token.isWhiteSpace()){nextToken=this.lookAhead(true,true);if(!nextToken.isSymbol(")")){this.reportError(kURL_WS_INSIDE);token=this.currentToken();break;}}
if(token.isSymbol(")")){break;}
value+=token.value;token=this.getToken(false,false);}
if(token.isSymbol(")")){return value+")";}
return"";},parseFunctionArgument:function(token)
{var value="";if(token.isString())
{value+=token.value;token=this.getToken(true,true);}
else{var parenthesis=1;while(true)
{if(!token.isNotNull())
return"";if(token.isFunction()||token.isSymbol("("))
parenthesis++;if(token.isSymbol(")")){parenthesis--;if(!parenthesis)
break;}
value+=token.value;token=this.getToken(false,false);}}
if(token.isSymbol(")"))
return value+")";return"";},parseColor:function(token)
{var color="";if(token.isFunction("rgb(")||token.isFunction("rgba(")){color=token.value;var isRgba=token.isFunction("rgba(")
token=this.getToken(true,true);if(!token.isNumber()&&!token.isPercentage())
return"";color+=token.value;token=this.getToken(true,true);if(!token.isSymbol(","))
return"";color+=", ";token=this.getToken(true,true);if(!token.isNumber()&&!token.isPercentage())
return"";color+=token.value;token=this.getToken(true,true);if(!token.isSymbol(","))
return"";color+=", ";token=this.getToken(true,true);if(!token.isNumber()&&!token.isPercentage())
return"";color+=token.value;if(isRgba){token=this.getToken(true,true);if(!token.isSymbol(","))
return"";color+=", ";token=this.getToken(true,true);if(!token.isNumber())
return"";color+=token.value;}
token=this.getToken(true,true);if(!token.isSymbol(")"))
return"";color+=token.value;}
else if(token.isFunction("hsl(")||token.isFunction("hsla(")){color=token.value;var isHsla=token.isFunction("hsla(")
token=this.getToken(true,true);if(!token.isNumber())
return"";color+=token.value;token=this.getToken(true,true);if(!token.isSymbol(","))
return"";color+=", ";token=this.getToken(true,true);if(!token.isPercentage())
return"";color+=token.value;token=this.getToken(true,true);if(!token.isSymbol(","))
return"";color+=", ";token=this.getToken(true,true);if(!token.isPercentage())
return"";color+=token.value;if(isHsla){token=this.getToken(true,true);if(!token.isSymbol(","))
return"";color+=", ";token=this.getToken(true,true);if(!token.isNumber())
return"";color+=token.value;}
token=this.getToken(true,true);if(!token.isSymbol(")"))
return"";color+=token.value;}
else if(token.isIdent()&&(token.value in this.kCOLOR_NAMES))
color=token.value;else if(token.isSymbol("#")){token=this.getHexValue();if(!token.isHex())
return"";var length=token.value.length;if(length!=3&&length!=6)
return"";if(token.value.match(/[a-fA-F0-9]/g).length!=length)
return"";color="#"+token.value;}
return color;},parseDeclaration:function(aToken,aDecl,aAcceptPriority,aExpandShorthands,aSheet){this.preserveState();var blocks=[];if(aToken.isIdent()){var descriptor=aToken.value.toLowerCase();var token=this.getToken(true,true);if(token.isSymbol(":")){var token=this.getToken(true,true);var value="";var declarations=[];if(aExpandShorthands)
switch(descriptor){case"background":value=this.parseBackgroundShorthand(token,declarations,aAcceptPriority);break;case"margin":case"padding":value=this.parseMarginOrPaddingShorthand(token,declarations,aAcceptPriority,descriptor);break;case"border-color":value=this.parseBorderColorShorthand(token,declarations,aAcceptPriority);break;case"border-style":value=this.parseBorderStyleShorthand(token,declarations,aAcceptPriority);break;case"border-width":value=this.parseBorderWidthShorthand(token,declarations,aAcceptPriority);break;case"border-top":case"border-right":case"border-bottom":case"border-left":case"border":case"outline":value=this.parseBorderEdgeOrOutlineShorthand(token,declarations,aAcceptPriority,descriptor);break;case"cue":value=this.parseCueShorthand(token,declarations,aAcceptPriority);break;case"pause":value=this.parsePauseShorthand(token,declarations,aAcceptPriority);break;case"font":value=this.parseFontShorthand(token,declarations,aAcceptPriority);break;case"list-style":value=this.parseListStyleShorthand(token,declarations,aAcceptPriority);break;default:value=this.parseDefaultPropertyValue(token,declarations,aAcceptPriority,descriptor,aSheet);break;}
else
value=this.parseDefaultPropertyValue(token,declarations,aAcceptPriority,descriptor,aSheet);token=this.currentToken();if(value)
{var priority=false;if(token.isSymbol("!")){token=this.getToken(true,true);if(token.isIdent("important")){priority=true;token=this.getToken(true,true);if(token.isSymbol(";")||token.isSymbol("}")){if(token.isSymbol("}"))
this.ungetToken();}
else return"";}
else return"";}
else if(token.isNotNull()&&!token.isSymbol(";")&&!token.isSymbol("}"))
return"";for(var i=0;i<declarations.length;i++){declarations[i].priority=priority;aDecl.push(declarations[i]);}
return descriptor+": "+value+";";}}}
else if(aToken.isComment()){if(this.mPreserveComments){this.forgetState();var comment=new jscsspComment();comment.parsedCssText=aToken.value;aDecl.push(comment);}
return aToken.value;}
this.restoreState();var s=aToken.value;blocks=[];var token=this.getToken(false,false);while(token.isNotNull()){s+=token.value;if((token.isSymbol(";")||token.isSymbol("}"))&&!blocks.length){if(token.isSymbol("}"))
this.ungetToken();break;}else if(token.isSymbol("{")||token.isSymbol("(")||token.isSymbol("[")||token.isFunction()){blocks.push(token.isFunction()?"(":token.value);}else if(token.isSymbol("}")||token.isSymbol(")")||token.isSymbol("]")){if(blocks.length){var ontop=blocks[blocks.length-1];if((token.isSymbol("}")&&ontop=="{")||(token.isSymbol(")")&&ontop=="(")||(token.isSymbol("]")&&ontop=="[")){blocks.pop();}}}
token=this.getToken(false,false);}
return"";},parseKeyframesRule:function(aToken,aSheet){var currentLine=CountLF(this.mScanner.getAlreadyScanned());var s=aToken.value;var valid=false;var keyframesRule=new jscsspKeyframesRule();keyframesRule.currentLine=currentLine;this.preserveState();var token=this.getToken(true,true);var foundName=false;while(token.isNotNull()){if(token.isIdent()){foundName=true;s+=" "+token.value;keyframesRule.name=token.value;token=this.getToken(true,true);if(token.isSymbol("{"))
this.ungetToken();else{token.type=jscsspToken.NULL_TYPE;break;}}
else if(token.isSymbol("{")){if(!foundName){token.type=jscsspToken.NULL_TYPE;}
break;}
else{token.type=jscsspToken.NULL_TYPE;break;}
token=this.getToken(true,true);}
if(token.isSymbol("{")&&keyframesRule.name){s+=" { ";token=this.getToken(true,false);while(token.isNotNull()){if(token.isComment()&&this.mPreserveComments){s+=" "+token.value;var comment=new jscsspComment();comment.parsedCssText=token.value;keyframesRule.cssRules.push(comment);}else if(token.isSymbol("}")){valid=true;break;}else{var r=this.parseKeyframeRule(token,keyframesRule,true);if(r)
s+=r;}
token=this.getToken(true,false);}}
if(valid){this.forgetState();keyframesRule.currentLine=currentLine;keyframesRule.parsedCssText=s;aSheet.cssRules.push(keyframesRule);return true;}
this.restoreState();return false;},parseKeyframeRule:function(aToken,aOwner){var currentLine=CountLF(this.mScanner.getAlreadyScanned());this.preserveState();var token=aToken;var key="";while(token.isNotNull()){if(token.isIdent()||token.isPercentage()){if(token.isIdent()&&!token.isIdent("from")&&!token.isIdent("to")){key="";break;}
key+=token.value;token=this.getToken(true,true);if(token.isSymbol("{")){this.ungetToken();break;}
else
if(token.isSymbol(",")){key+=", ";}
else{key="";break;}}
else{key="";break;}
token=this.getToken(true,true);}
var valid=false;var declarations=[];if(key){var s=key;token=this.getToken(true,true);if(token.isSymbol("{")){s+=" { ";token=this.getToken(true,false);while(true){if(!token.isNotNull()){valid=true;break;}
if(token.isSymbol("}")){s+="}";valid=true;break;}else{var d=this.parseDeclaration(token,declarations,true,true,aOwner);s+=((d&&declarations.length)?" ":"")+d;}
token=this.getToken(true,false);}}}
else{}
if(valid){var rule=new jscsspKeyframeRule();rule.currentLine=currentLine;rule.parsedCssText=s;rule.declarations=declarations;rule.keyText=key;rule.parentRule=aOwner;aOwner.cssRules.push(rule);return s;}
this.restoreState();s=this.currentToken().value;this.addUnknownAtRule(aOwner,s);return"";},parseMediaRule:function(aToken,aSheet){this.mScanner.mMediaQueryMode=true;var currentLine=CountLF(this.mScanner.getAlreadyScanned());var s=aToken.value;var valid=false;var mediaRule=new jscsspMediaRule();mediaRule.currentLine=currentLine;this.preserveState();var token=this.getToken(true,true);var foundMedia=false;while(token.isNotNull()){if(token.isIdent()){foundMedia=true;s+=" "+token.value;mediaRule.media.push(token.value);token=this.getToken(true,true);if(token.isSymbol(",")){s+=",";}else{if(token.isSymbol("{"))
this.ungetToken();else{token.type=jscsspToken.NULL_TYPE;break;}}}
else if(token.isSymbol("{"))
break;else if(foundMedia){token.type=jscsspToken.NULL_TYPE;break;}
token=this.getToken(true,true);}
if(token.isSymbol("{")&&mediaRule.media.length){s+=" { ";token=this.getToken(true,false);while(token.isNotNull()){if(token.isComment()&&this.mPreserveComments){s+=" "+token.value;var comment=new jscsspComment();comment.parsedCssText=token.value;mediaRule.cssRules.push(comment);}else if(token.isSymbol("}")){valid=true;break;}else{var r=this.parseStyleRule(token,mediaRule,true);if(r)
s+=r;}
token=this.getToken(true,false);}}
if(valid){this.forgetState();mediaRule.parsedCssText=s;aSheet.cssRules.push(mediaRule);return true;}
this.restoreState();return false;},trim11:function(str){str=str.replace(/^\s+/,'');for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}
return str;},parseStyleRule:function(aToken,aOwner,aIsInsideMediaRule)
{var currentLine=CountLF(this.mScanner.getAlreadyScanned());this.preserveState();var selector=this.parseSelector(aToken,false);var valid=false;var declarations=[];if(selector){selector=this.trim11(selector.selector);var s=selector;var token=this.getToken(true,true);if(token.isSymbol("{")){s+=" { ";var token=this.getToken(true,false);while(true){if(!token.isNotNull()){valid=true;break;}
if(token.isSymbol("}")){s+="}";valid=true;break;}else{var d=this.parseDeclaration(token,declarations,true,true,aOwner);s+=((d&&declarations.length)?" ":"")+d;}
token=this.getToken(true,false);}}}
else{}
if(valid){var rule=new jscsspStyleRule();rule.currentLine=currentLine;rule.parsedCssText=s;rule.declarations=declarations;rule.mSelectorText=selector;if(aIsInsideMediaRule)
rule.parentRule=aOwner;else
rule.parentStyleSheet=aOwner;aOwner.cssRules.push(rule);return s;}
this.restoreState();s=this.currentToken().value;this.addUnknownAtRule(aOwner,s);return"";},parseSelector:function(aToken,aParseSelectorOnly){var s="";var specificity={a:0,b:0,c:0,d:0};var isFirstInChain=true;var token=aToken;var valid=false;var combinatorFound=false;while(true){if(!token.isNotNull()){if(aParseSelectorOnly)
return{selector:s,specificity:specificity};return"";}
if(!aParseSelectorOnly&&token.isSymbol("{")){valid=!combinatorFound;if(valid)this.ungetToken();break;}
if(token.isSymbol(",")){s+=token.value;isFirstInChain=true;combinatorFound=false;token=this.getToken(false,true);continue;}
else if(!combinatorFound&&(token.isWhiteSpace()||token.isSymbol(">")||token.isSymbol("+")||token.isSymbol("~"))){if(token.isWhiteSpace()){s+=" ";var nextToken=this.lookAhead(true,true);if(!nextToken.isNotNull()){if(aParseSelectorOnly)
return{selector:s,specificity:specificity};return"";}
if(nextToken.isSymbol(">")||nextToken.isSymbol("+")||nextToken.isSymbol("~")){token=this.getToken(true,true);s+=token.value+" ";combinatorFound=true;}}
else{s+=token.value;combinatorFound=true;}
isFirstInChain=true;token=this.getToken(true,true);continue;}
else{var simpleSelector=this.parseSimpleSelector(token,isFirstInChain,true);if(!simpleSelector)
break;s+=simpleSelector.selector;specificity.b+=simpleSelector.specificity.b;specificity.c+=simpleSelector.specificity.c;specificity.d+=simpleSelector.specificity.d;isFirstInChain=false;combinatorFound=false;}
token=this.getToken(false,true);}
if(valid){return{selector:s,specificity:specificity};}
return"";},isPseudoElement:function(aIdent)
{switch(aIdent){case"first-letter":case"first-line":case"before":case"after":case"marker":return true;break;default:return false;break;}},parseSimpleSelector:function(token,isFirstInChain,canNegate)
{var s="";var specificity={a:0,b:0,c:0,d:0};if(isFirstInChain&&(token.isSymbol("*")||token.isSymbol("|")||token.isIdent())){if(token.isSymbol("*")||token.isIdent()){s+=token.value;var isIdent=token.isIdent();token=this.getToken(false,true);if(token.isSymbol("|")){s+=token.value;token=this.getToken(false,true);if(token.isIdent()||token.isSymbol("*")){s+=token.value;if(token.isIdent())
specificity.d++;}else
return null;}else{this.ungetToken();if(isIdent)
specificity.d++;}}else if(token.isSymbol("|")){s+=token.value;token=this.getToken(false,true);if(token.isIdent()||token.isSymbol("*")){s+=token.value;if(token.isIdent())
specificity.d++;}else
return null;}}
else if(token.isSymbol(".")||token.isSymbol("#")){var isClass=token.isSymbol(".");s+=token.value;token=this.getToken(false,true);if(token.isIdent()){s+=token.value;if(isClass)
specificity.c++;else
specificity.b++;}
else
return null;}
else if(token.isSymbol(":")){s+=token.value;token=this.getToken(false,true);if(token.isSymbol(":")){s+=token.value;token=this.getToken(false,true);}
if(token.isIdent()){s+=token.value;if(this.isPseudoElement(token.value))
specificity.d++;else
specificity.c++;}
else if(token.isFunction()){s+=token.value;if(token.isFunction(":not(")){if(!canNegate)
return null;token=this.getToken(true,true);var simpleSelector=this.parseSimpleSelector(token,isFirstInChain,false);if(!simpleSelector)
return null;else{s+=simpleSelector.selector;token=this.getToken(true,true);if(token.isSymbol(")"))
s+=")";else
return null;}
specificity.c++;}
else{while(true){token=this.getToken(false,true);if(token.isSymbol(")")){s+=")";break;}else
s+=token.value;}
specificity.c++;}}else
return null;}else if(token.isSymbol("[")){s+="[";token=this.getToken(true,true);if(token.isIdent()||token.isSymbol("*")){s+=token.value;var nextToken=this.getToken(true,true);if(token.isSymbol("|")){s+="|";token=this.getToken(true,true);if(token.isIdent())
s+=token.value;else
return null;}else
this.ungetToken();}else if(token.isSymbol("|")){s+="|";token=this.getToken(true,true);if(token.isIdent())
s+=token.value;else
return null;}
else
return null;token=this.getToken(true,true);if(token.isIncludes()||token.isDashmatch()||token.isBeginsmatch()||token.isEndsmatch()||token.isContainsmatch()||token.isSymbol("=")){s+=token.value;token=this.getToken(true,true);if(token.isString()||token.isIdent()){s+=token.value;token=this.getToken(true,true);}
else
return null;if(token.isSymbol("]")){s+=token.value;specificity.c++;}
else
return null;}
else if(token.isSymbol("]")){s+=token.value;specificity.c++;}
else
return null;}
else if(token.isWhiteSpace()){var t=this.lookAhead(true,true);if(t.isSymbol('{'))
return""}
if(s)
return{selector:s,specificity:specificity};return null;},preserveState:function(){this.mPreservedTokens.push(this.currentToken());this.mScanner.preserveState();},restoreState:function(){if(this.mPreservedTokens.length){this.mScanner.restoreState();this.mToken=this.mPreservedTokens.pop();}},forgetState:function(){if(this.mPreservedTokens.length){this.mScanner.forgetState();this.mPreservedTokens.pop();}},parse:function(aString,aTryToPreserveWhitespaces,aTryToPreserveComments){if(!aString)
return null;this.mPreserveWS=aTryToPreserveWhitespaces;this.mPreserveComments=aTryToPreserveComments;this.mPreservedTokens=[];this.mScanner.init(aString);var sheet=new jscsspStylesheet();var token=this.getToken(false,false);if(!token.isNotNull())
return;if(token.isAtRule("@charset")){this.parseCharsetRule(token,sheet);token=this.getToken(false,false);}
var foundStyleRules=false;var foundImportRules=false;var foundNameSpaceRules=false;while(true){if(!token.isNotNull())
break;if(token.isWhiteSpace())
{if(aTryToPreserveWhitespaces)
this.addWhitespace(sheet,token.value);}
else if(token.isComment())
{if(this.mPreserveComments)
this.addComment(sheet,token.value);}
else if(token.isAtRule()){if(token.isAtRule("@variables")){if(!foundImportRules&&!foundStyleRules)
this.parseVariablesRule(token,sheet);else{this.reportError(kVARIABLES_RULE_POSITION);this.addUnknownAtRule(sheet,token.value);}}
else if(token.isAtRule("@import")){if(!foundStyleRules&&!foundNameSpaceRules)
foundImportRules=this.parseImportRule(token,sheet);else{this.reportError(kIMPORT_RULE_POSITION);this.addUnknownAtRule(sheet,token.value);}}
else if(token.isAtRule("@namespace")){if(!foundStyleRules)
foundNameSpaceRules=this.parseNamespaceRule(token,sheet);else{this.reportError(kNAMESPACE_RULE_POSITION);this.addUnknownAtRule(sheet,token.value);}}
else if(token.isAtRule("@font-face")){if(this.parseFontFaceRule(token,sheet))
foundStyleRules=true;else
this.addUnknownAtRule(sheet,token.value);}
else if(token.isAtRule("@page")){if(this.parsePageRule(token,sheet))
foundStyleRules=true;else
this.addUnknownAtRule(sheet,token.value);}
else if(token.isAtRule("@media")){if(this.parseMediaRule(token,sheet))
foundStyleRules=true;else
this.addUnknownAtRule(sheet,token.value);}
else if(token.isAtRule("@keyframes")){if(!this.parseKeyframesRule(token,sheet))
this.addUnknownAtRule(sheet,token.value);}
else if(token.isAtRule("@charset")){this.reportError(kCHARSET_RULE_CHARSET_SOF);this.addUnknownAtRule(sheet,token.value);}
else{this.reportError(kUNKNOWN_AT_RULE);this.addUnknownAtRule(sheet,token.value);}}
else
{var ruleText=this.parseStyleRule(token,sheet,false);if(ruleText)
foundStyleRules=true;}
token=this.getToken(false);}
return sheet;}};function jscsspToken(aType,aValue,aUnit)
{this.type=aType;this.value=aValue;this.unit=aUnit;}
jscsspToken.NULL_TYPE=0;jscsspToken.WHITESPACE_TYPE=1;jscsspToken.STRING_TYPE=2;jscsspToken.COMMENT_TYPE=3;jscsspToken.NUMBER_TYPE=4;jscsspToken.IDENT_TYPE=5;jscsspToken.FUNCTION_TYPE=6;jscsspToken.ATRULE_TYPE=7;jscsspToken.INCLUDES_TYPE=8;jscsspToken.DASHMATCH_TYPE=9;jscsspToken.BEGINSMATCH_TYPE=10;jscsspToken.ENDSMATCH_TYPE=11;jscsspToken.CONTAINSMATCH_TYPE=12;jscsspToken.SYMBOL_TYPE=13;jscsspToken.DIMENSION_TYPE=14;jscsspToken.PERCENTAGE_TYPE=15;jscsspToken.HEX_TYPE=16;jscsspToken.prototype={isNotNull:function()
{return this.type;},_isOfType:function(aType,aValue)
{return(this.type==aType&&(!aValue||this.value.toLowerCase()==aValue));},isWhiteSpace:function(w)
{return this._isOfType(jscsspToken.WHITESPACE_TYPE,w);},isString:function()
{return this._isOfType(jscsspToken.STRING_TYPE);},isComment:function()
{return this._isOfType(jscsspToken.COMMENT_TYPE);},isNumber:function(n)
{return this._isOfType(jscsspToken.NUMBER_TYPE,n);},isSymbol:function(c)
{return this._isOfType(jscsspToken.SYMBOL_TYPE,c);},isIdent:function(i)
{return this._isOfType(jscsspToken.IDENT_TYPE,i);},isFunction:function(f)
{return this._isOfType(jscsspToken.FUNCTION_TYPE,f);},isAtRule:function(a)
{return this._isOfType(jscsspToken.ATRULE_TYPE,a);},isIncludes:function()
{return this._isOfType(jscsspToken.INCLUDES_TYPE);},isDashmatch:function()
{return this._isOfType(jscsspToken.DASHMATCH_TYPE);},isBeginsmatch:function()
{return this._isOfType(jscsspToken.BEGINSMATCH_TYPE);},isEndsmatch:function()
{return this._isOfType(jscsspToken.ENDSMATCH_TYPE);},isContainsmatch:function()
{return this._isOfType(jscsspToken.CONTAINSMATCH_TYPE);},isSymbol:function(c)
{return this._isOfType(jscsspToken.SYMBOL_TYPE,c);},isDimension:function()
{return this._isOfType(jscsspToken.DIMENSION_TYPE);},isPercentage:function()
{return this._isOfType(jscsspToken.PERCENTAGE_TYPE);},isHex:function()
{return this._isOfType(jscsspToken.HEX_TYPE);},isDimensionOfUnit:function(aUnit)
{return(this.isDimension()&&this.unit==aUnit);},isLength:function()
{return(this.isPercentage()||this.isDimensionOfUnit("cm")||this.isDimensionOfUnit("mm")||this.isDimensionOfUnit("in")||this.isDimensionOfUnit("pc")||this.isDimensionOfUnit("px")||this.isDimensionOfUnit("em")||this.isDimensionOfUnit("ex")||this.isDimensionOfUnit("pt"));},isAngle:function()
{return(this.isDimensionOfUnit("deg")||this.isDimensionOfUnit("rad")||this.isDimensionOfUnit("grad"));}}
var kJscsspUNKNOWN_RULE=0;var kJscsspSTYLE_RULE=1
var kJscsspCHARSET_RULE=2;var kJscsspIMPORT_RULE=3;var kJscsspMEDIA_RULE=4;var kJscsspFONT_FACE_RULE=5;var kJscsspPAGE_RULE=6;var kJscsspKEYFRAMES_RULE=7;var kJscsspKEYFRAME_RULE=8;var kJscsspNAMESPACE_RULE=100;var kJscsspCOMMENT=101;var kJscsspWHITE_SPACE=102;var kJscsspVARIABLES_RULE=200;var kJscsspSTYLE_DECLARATION=1000;var gTABS="";function jscsspStylesheet()
{this.cssRules=[];this.variables={};}
jscsspStylesheet.prototype={insertRule:function(aRule,aIndex){try{this.cssRules.splice(aIndex,1,aRule);}
catch(e){}},deleteRule:function(aIndex){try{this.cssRules.splice(aIndex);}
catch(e){}},cssText:function(){var rv="";for(var i=0;i<this.cssRules.length;i++)
rv+=this.cssRules[i].cssText()+"\n";return rv;},resolveVariables:function(aMedium){function ItemFoundInArray(aArray,aItem){for(var i=0;i<aArray.length;i++)
if(aItem==aArray[i])
return true;return false;}
for(var i=0;i<this.cssRules.length;i++)
{var rule=this.cssRules[i];if(rule.type==kJscsspSTYLE_RULE||rule.type==kJscsspIMPORT_RULE)
break;else if(rule.type==kJscsspVARIABLES_RULE&&(!rule.media.length||ItemFoundInArray(rule.media,aMedium))){for(var j=0;j<rule.declarations.length;j++){var valueText="";for(var k=0;k<rule.declarations[j].values.length;k++)
valueText+=(k?" ":"")+rule.declarations[j].values[k].value;this.variables[rule.declarations[j].property]=valueText;}}}}};function jscsspCharsetRule()
{this.type=kJscsspCHARSET_RULE;this.encoding=null;this.parsedCssText=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspCharsetRule.prototype={cssText:function(){return"@charset "+this.encoding+";";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(false,false);if(token.isAtRule("@charset")){if(parser.parseCharsetRule(token,sheet)){var newRule=sheet.cssRules[0];this.encoding=newRule.encoding;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspErrorRule(aErrorMsg)
{this.error=aErrorMsg?aErrorMsg:"INVALID";this.type=kJscsspUNKNOWN_RULE;this.parsedCssText=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspErrorRule.prototype={cssText:function(){return this.parsedCssText;}};function jscsspComment()
{this.type=kJscsspCOMMENT;this.parsedCssText=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspComment.prototype={cssText:function(){return this.parsedCssText;},setCssText:function(val){var parser=new CSSParser(val);var token=parser.getToken(true,false);if(token.isComment())
this.parsedCssText=token.value;else
throw DOMException.SYNTAX_ERR;}};function jscsspWhitespace()
{this.type=kJscsspWHITE_SPACE;this.parsedCssText=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspWhitespace.prototype={cssText:function(){return this.parsedCssText;}};function jscsspImportRule()
{this.type=kJscsspIMPORT_RULE;this.parsedCssText=null;this.href=null;this.media=[];this.parentStyleSheet=null;this.parentRule=null;}
jscsspImportRule.prototype={cssText:function(){var mediaString=this.media.join(", ");return"@import "+this.href
+((mediaString&&mediaString!="all")?mediaString+" ":"")
+";";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(token.isAtRule("@import")){if(parser.parseImportRule(token,sheet)){var newRule=sheet.cssRules[0];this.href=newRule.href;this.media=newRule.media;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspNamespaceRule()
{this.type=kJscsspNAMESPACE_RULE;this.parsedCssText=null;this.prefix=null;this.url=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspNamespaceRule.prototype={cssText:function(){return"@namespace "+(this.prefix?this.prefix+" ":"")
+this.url
+";";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(token.isAtRule("@namespace")){if(parser.parseNamespaceRule(token,sheet)){var newRule=sheet.cssRules[0];this.url=newRule.url;this.prefix=newRule.prefix;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspDeclaration()
{this.type=kJscsspSTYLE_DECLARATION;this.property=null;this.values=[];this.valueText=null;this.priority=null;this.parsedCssText=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspDeclaration.prototype={kCOMMA_SEPARATED:{"cursor":true,"font-family":true,"voice-family":true,"background-image":true},kUNMODIFIED_COMMA_SEPARATED_PROPERTIES:{"text-shadow":true,"box-shadow":true,"-moz-transition":true,"-moz-transition-property":true,"-moz-transition-duration":true,"-moz-transition-timing-function":true,"-moz-transition-delay":true},cssText:function(){var prefixes=CssInspector.prefixesForProperty(this.property);if(this.property in this.kUNMODIFIED_COMMA_SEPARATED_PROPERTIES){if(prefixes){var rv="";for(var propertyIndex=0;propertyIndex<prefixes.length;propertyIndex++){var property=prefixes[propertyIndex];rv+=(propertyIndex?gTABS:"")+property+": ";rv+=this.valueText+(this.priority?" !important":"")+";";rv+=((prefixes.length>1&&propertyIndex!=prefixes.length-1)?"\n":"");}
return rv;}
return this.property+": "+this.valueText+
(this.priority?" !important":"")+";"}
if(prefixes){var rv="";for(var propertyIndex=0;propertyIndex<prefixes.length;propertyIndex++){var property=prefixes[propertyIndex];rv+=(propertyIndex?gTABS:"")+property+": ";var separator=(property in this.kCOMMA_SEPARATED)?", ":" ";for(var i=0;i<this.values.length;i++)
if(this.values[i].cssText()!=null)
rv+=(i?separator:"")+this.values[i].cssText();else
return null;rv+=(this.priority?" !important":"")+";"+
((prefixes.length>1&&propertyIndex!=prefixes.length-1)?"\n":"");}
return rv;}
var rv=this.property+": ";var separator=(this.property in this.kCOMMA_SEPARATED)?", ":" ";var extras={"webkit":false,"presto":false,"trident":false,"generic":false}
for(var i=0;i<this.values.length;i++){var v=this.values[i].cssText();if(v!=null){var paren=v.indexOf("(");var kwd=v;if(paren!=-1)
kwd=v.substr(0,paren);if(kwd in kCSS_VENDOR_VALUES){for(var j in kCSS_VENDOR_VALUES[kwd]){extras[j]=extras[j]||(kCSS_VENDOR_VALUES[kwd][j]!="");}}
rv+=(i?separator:"")+v;}
else
return null;}
rv+=(this.priority?" !important":"")+";";for(var j in extras){if(extras[j]){var str="\n"+gTABS+this.property+": ";for(var i=0;i<this.values.length;i++){var v=this.values[i].cssText();if(v!=null){var paren=v.indexOf("(");var kwd=v;if(paren!=-1)
kwd=v.substr(0,paren);if(kwd in kCSS_VENDOR_VALUES){functor=kCSS_VENDOR_VALUES[kwd][j];if(functor){v=(typeof functor=="string")?functor:functor(v,j);if(!v){str=null;break;}}}
str+=(i?separator:"")+v;}
else
return null;}
if(str)
rv+=str+";"
else
rv+="\n"+gTABS+"/* Impossible to translate property "+this.property+" for "+j+" */";}}
return rv;},setCssText:function(val){var declarations=[];var parser=new CSSParser(val);var token=parser.getToken(true,true);if(parser.parseDeclaration(token,declarations,true,true,null)&&declarations.length&&declarations[0].type==kJscsspSTYLE_DECLARATION){var newDecl=declarations.cssRules[0];this.property=newDecl.property;this.value=newDecl.value;this.priority=newDecl.priority;this.parsedCssText=newRule.parsedCssText;return;}
throw DOMException.SYNTAX_ERR;}};function jscsspFontFaceRule()
{this.type=kJscsspFONT_FACE_RULE;this.parsedCssText=null;this.descriptors=[];this.parentStyleSheet=null;this.parentRule=null;}
jscsspFontFaceRule.prototype={cssText:function(){var rv=gTABS+"@font-face {\n";var preservedGTABS=gTABS;gTABS+="  ";for(var i=0;i<this.descriptors.length;i++)
rv+=gTABS+this.descriptors[i].cssText()+"\n";gTABS=preservedGTABS;return rv+gTABS+"}";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(token.isAtRule("@font-face")){if(parser.parseFontFaceRule(token,sheet)){var newRule=sheet.cssRules[0];this.descriptors=newRule.descriptors;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspKeyframesRule()
{this.type=kJscsspKEYFRAMES_RULE;this.parsedCssText=null;this.cssRules=[];this.name=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspKeyframesRule.prototype={cssText:function(){var rv=gTABS
+"@keyframes "
+this.name+" {\n";var preservedGTABS=gTABS;gTABS+="  ";for(var i=0;i<this.cssRules.length;i++)
rv+=gTABS+this.cssRules[i].cssText()+"\n";gTABS=preservedGTABS;rv+=gTABS+"}\n";return rv;},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(token.isAtRule("@keyframes")){if(parser.parseKeyframesRule(token,sheet)){var newRule=sheet.cssRules[0];this.cssRules=newRule.cssRules;this.name=newRule.name;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspKeyframeRule()
{this.type=kJscsspKEYFRAME_RULE;this.parsedCssText=null;this.declarations=[]
this.keyText=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspKeyframeRule.prototype={cssText:function(){var rv=this.keyText+" {\n";var preservedGTABS=gTABS;gTABS+="  ";for(var i=0;i<this.declarations.length;i++){var declText=this.declarations[i].cssText();if(declText)
rv+=gTABS+this.declarations[i].cssText()+"\n";}
gTABS=preservedGTABS;return rv+gTABS+"}";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(!token.isNotNull()){if(parser.parseKeyframeRule(token,sheet,false)){var newRule=sheet.cssRules[0];this.keyText=newRule.keyText;this.declarations=newRule.declarations;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspMediaRule()
{this.type=kJscsspMEDIA_RULE;this.parsedCssText=null;this.cssRules=[];this.media=[];this.parentStyleSheet=null;this.parentRule=null;}
jscsspMediaRule.prototype={cssText:function(){var rv=gTABS+"@media "+this.media.join(", ")+" {\n";var preservedGTABS=gTABS;gTABS+="  ";for(var i=0;i<this.cssRules.length;i++)
rv+=gTABS+this.cssRules[i].cssText()+"\n";gTABS=preservedGTABS;return rv+gTABS+"}";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(token.isAtRule("@media")){if(parser.parseMediaRule(token,sheet)){var newRule=sheet.cssRules[0];this.cssRules=newRule.cssRules;this.media=newRule.media;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspStyleRule()
{this.type=kJscsspSTYLE_RULE;this.parsedCssText=null;this.declarations=[]
this.mSelectorText=null;this.parentStyleSheet=null;this.parentRule=null;}
jscsspStyleRule.prototype={cssText:function(){var rv=this.mSelectorText+" {\n";var preservedGTABS=gTABS;gTABS+="  ";for(var i=0;i<this.declarations.length;i++){var declText=this.declarations[i].cssText();if(declText)
rv+=gTABS+this.declarations[i].cssText()+"\n";}
gTABS=preservedGTABS;return rv+gTABS+"}";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(!token.isNotNull()){if(parser.parseStyleRule(token,sheet,false)){var newRule=sheet.cssRules[0];this.mSelectorText=newRule.mSelectorText;this.declarations=newRule.declarations;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;},selectorText:function(){return this.mSelectorText;},setSelectorText:function(val){var parser=new CSSParser(val);var token=parser.getToken(true,true);if(!token.isNotNull()){var s=parser.parseSelector(token,true);if(s){this.mSelectorText=s.selector;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspPageRule()
{this.type=kJscsspPAGE_RULE;this.parsedCssText=null;this.pageSelector=null;this.declarations=[];this.parentStyleSheet=null;this.parentRule=null;}
jscsspPageRule.prototype={cssText:function(){var rv=gTABS+"@page "
+(this.pageSelector?this.pageSelector+" ":"")
+"{\n";var preservedGTABS=gTABS;gTABS+="  ";for(var i=0;i<this.declarations.length;i++)
rv+=gTABS+this.declarations[i].cssText()+"\n";gTABS=preservedGTABS;return rv+gTABS+"}";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(token.isAtRule("@page")){if(parser.parsePageRule(token,sheet)){var newRule=sheet.cssRules[0];this.pageSelector=newRule.pageSelector;this.declarations=newRule.declarations;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};function jscsspVariablesRule()
{this.type=kJscsspVARIABLES_RULE;this.parsedCssText=null;this.declarations=[];this.parentStyleSheet=null;this.parentRule=null;this.media=null;}
jscsspVariablesRule.prototype={cssText:function(){var rv=gTABS+"@variables "+
(this.media.length?this.media.join(", ")+" ":"")+"{\n";var preservedGTABS=gTABS;gTABS+="  ";for(var i=0;i<this.declarations.length;i++)
rv+=gTABS+this.declarations[i].cssText()+"\n";gTABS=preservedGTABS;return rv+gTABS+"}";},setCssText:function(val){var sheet={cssRules:[]};var parser=new CSSParser(val);var token=parser.getToken(true,true);if(token.isAtRule("@variables")){if(parser.parseVariablesRule(token,sheet)){var newRule=sheet.cssRules[0];this.declarations=newRule.declarations;this.parsedCssText=newRule.parsedCssText;return;}}
throw DOMException.SYNTAX_ERR;}};var kJscsspINHERIT_VALUE=0;var kJscsspPRIMITIVE_VALUE=1;var kJscsspVARIABLE_VALUE=4;function jscsspVariable(aType,aSheet)
{this.value="";this.type=aType;this.name=null;this.parentRule=null;this.parentStyleSheet=aSheet;}
jscsspVariable.prototype={cssText:function(){if(this.type==kJscsspVARIABLE_VALUE)
return this.resolveVariable(this.name,this.parentRule,this.parentStyleSheet);else
return this.value;},setCssText:function(val){if(this.type==kJscsspVARIABLE_VALUE)
throw DOMException.SYNTAX_ERR;else
this.value=val;},resolveVariable:function(aName,aRule,aSheet)
{if(aName.toLowerCase()in aSheet.variables)
return aSheet.variables[aName.toLowerCase()];return null;}};function ParseURL(buffer){var result={};result.protocol="";result.user="";result.password="";result.host="";result.port="";result.path="";result.query="";var section="PROTOCOL";var start=0;var wasSlash=false;while(start<buffer.length){if(section=="PROTOCOL"){if(buffer.charAt(start)==':'){section="AFTER_PROTOCOL";start++;}else if(buffer.charAt(start)=='/'&&result.protocol.length()==0){section=PATH;}else{result.protocol+=buffer.charAt(start++);}}else if(section=="AFTER_PROTOCOL"){if(buffer.charAt(start)=='/'){if(!wasSlash){wasSlash=true;}else{wasSlash=false;section="USER";}
start++;}else{throw new ParseException("Protocol shell be separated with 2 slashes");}}else if(section=="USER"){if(buffer.charAt(start)=='/'){result.host=result.user;result.user="";section="PATH";}else if(buffer.charAt(start)=='?'){result.host=result.user;result.user="";section="QUERY";start++;}else if(buffer.charAt(start)==':'){section="PASSWORD";start++;}else if(buffer.charAt(start)=='@'){section="HOST";start++;}else{result.user+=buffer.charAt(start++);}}else if(section=="PASSWORD"){if(buffer.charAt(start)=='/'){result.host=result.user;result.port=result.password;result.user="";result.password="";section="PATH";}else if(buffer.charAt(start)=='?'){result.host=result.user;result.port=result.password;result.user="";result.password="";section="QUERY";start++;}else if(buffer.charAt(start)=='@'){section="HOST";start++;}else{result.password+=buffer.charAt(start++);}}else if(section=="HOST"){if(buffer.charAt(start)=='/'){section="PATH";}else if(buffer.charAt(start)==':'){section="PORT";start++;}else if(buffer.charAt(start)=='?'){section="QUERY";start++;}else{result.host+=buffer.charAt(start++);}}else if(section=="PORT"){if(buffer.charAt(start)=='/'){section="PATH";}else if(buffer.charAt(start)=='?'){section="QUERY";start++;}else{result.port+=buffer.charAt(start++);}}else if(section=="PATH"){if(buffer.charAt(start)=='?'){section="QUERY";start++;}else{result.path+=buffer.charAt(start++);}}else if(section=="QUERY"){result.query+=buffer.charAt(start++);}}
if(section=="PROTOCOL"){result.host=result.protocol;result.protocol="http";}else if(section=="AFTER_PROTOCOL"){throw new ParseException("Invalid url");}else if(section=="USER"){result.host=result.user;result.user="";}else if(section=="PASSWORD"){result.host=result.user;result.port=result.password;result.user="";result.password="";}
return result;}
function ParseException(description){this.description=description;}
function CountLF(s)
{var nCR=s.match(/\n/g);return nCR?nCR.length+1:1;}
function FilterLinearGradientForOutput(aValue,aEngine)
{if(aEngine=="generic")
return aValue.substr(5);if(aEngine=="webkit")
return aValue.replace(/\-moz\-/g,"-webkit-")
if(aEngine!="webkit20110101")
return"";var g=CssInspector.parseBackgroundImages(aValue)[0];var cancelled=false;var str="-webkit-gradient(linear, ";var position=("position"in g.value)?g.value.position.toLowerCase():"";var angle=("angle"in g.value)?g.value.angle.toLowerCase():"";if(angle){var match=angle.match(/^([0-9\-\.\\+]+)([a-z]*)/);var angle=parseFloat(match[1]);var unit=match[2];switch(unit){case"grad":angle=angle*90/100;break;case"rad":angle=angle*180/Math.PI;break;default:break;}
while(angle<0)
angle+=360;while(angle>=360)
angle-=360;}
var startpoint=[];var endpoint=[];if(position!=""){if(position=="center")
position="center center";startpoint=position.split(" ");if(angle==""&&angle!=0){switch(startpoint[0]){case"left":endpoint.push("right");break;case"center":endpoint.push("center");break;case"right":endpoint.push("left");break;default:{var match=startpoint[0].match(/^([0-9\-\.\\+]+)([a-z]*)/);var v=parseFloat(match[0]);var unit=match[1];if(unit=="%"){endpoint.push((100-v)+"%");}
else
cancelled=true;}
break;}
if(!cancelled)
switch(startpoint[1]){case"top":endpoint.push("bottom");break;case"center":endpoint.push("center");break;case"bottom":endpoint.push("top");break;default:{var match=startpoint[1].match(/^([0-9\-\.\\+]+)([a-z]*)/);var v=parseFloat(match[0]);var unit=match[1];if(unit=="%"){endpoint.push((100-v)+"%");}
else
cancelled=true;}
break;}}
else{switch(angle){case 0:endpoint.push("right");endpoint.push(startpoint[1]);break;case 90:endpoint.push(startpoint[0]);endpoint.push("top");break;case 180:endpoint.push("left");endpoint.push(startpoint[1]);break;case 270:endpoint.push(startpoint[0]);endpoint.push("bottom");break;default:cancelled=true;break;}}}
else{if(angle=="")
angle=270;switch(angle){case 0:startpoint=["left","center"];endpoint=["right","center"];break;case 90:startpoint=["center","bottom"];endpoint=["center","top"];break;case 180:startpoint=["right","center"];endpoint=["left","center"];break;case 270:startpoint=["center","top"];endpoint=["center","bottom"];break;default:cancelled=true;break;}}
if(cancelled)
return"";str+=startpoint.join(" ")+", "+endpoint.join(" ");if(!g.value.stops[0].position)
g.value.stops[0].position="0%";if(!g.value.stops[g.value.stops.length-1].position)
g.value.stops[g.value.stops.length-1].position="100%";var current=0;for(var i=0;i<g.value.stops.length&&!cancelled;i++){var s=g.value.stops[i];if(s.position){if(s.position.indexOf("%")==-1){cancelled=true;break;}}
else{var j=i+1;while(j<g.value.stops.length&&!g.value.stops[j].position)
j++;var inc=parseFloat(g.value.stops[j].position)-current;for(var k=i;k<j;k++){g.value.stops[k].position=(current+inc*(k-i+1)/(j-i+1))+"%";}}
current=parseFloat(s.position);str+=", color-stop("+(parseFloat(current)/100)+", "+s.color+")";}
if(cancelled)
return"";return str+")";}
function FilterRadialGradientForOutput(aValue,aEngine)
{if(aEngine=="generic")
return aValue.substr(5);else if(aEngine=="webkit")
return aValue.replace(/\-moz\-/g,"-webkit-")
else if(aEngine!="webkit20110101")
return"";var g=CssInspector.parseBackgroundImages(aValue)[0];var shape=("shape"in g.value)?g.value.shape:"";var size=("size"in g.value)?g.value.size:"";if(shape!="circle"||(size!="farthest-corner"&&size!="cover"))
return"";if(g.value.stops.length<2||!("position"in g.value.stops[0])||!g.value.stops[g.value.stops.length-1].position||!("position"in g.value.stops[0])||!g.value.stops[g.value.stops.length-1].position)
return"";for(var i=0;i<g.value.stops.length;i++){var s=g.value.stops[i];if(("position"in s)&&s.position&&s.position.indexOf("px")==-1)
return"";}
var str="-webkit-gradient(radial, ";var position=("position"in g.value)?g.value.position:"center center";str+=position+", "+parseFloat(g.value.stops[0].position)+", ";str+=position+", "+parseFloat(g.value.stops[g.value.stops.length-1].position);var current=parseFloat(g.value.stops[0].position);for(var i=0;i<g.value.stops.length;i++){var s=g.value.stops[i];if(!("position"in s)||!s.position){var j=i+1;while(j<g.value.stops.length&&!g.value.stops[j].position)
j++;var inc=parseFloat(g.value.stops[j].position)-current;for(var k=i;k<j;k++){g.value.stops[k].position=(current+inc*(k-i+1)/(j-i+1))+"px";}}
current=parseFloat(s.position);var c=(current-parseFloat(g.value.stops[0].position))/(parseFloat(g.value.stops[g.value.stops.length-1].position)-parseFloat(g.value.stops[0].position));str+=", color-stop("+c+", "+s.color+")";}
str+=")"
return str;}
function FilterRepeatingGradientForOutput(aValue,aEngine)
{if(aEngine=="generic")
return aValue.substr(5);else if(aEngine=="webkit")
return aValue.replace(/\-moz\-/g,"-webkit-")
return"";}
;"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);