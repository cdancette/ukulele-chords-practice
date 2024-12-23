(function(){"use strict";var e={8244:function(e,t,n){var o=n(5130),r=n(6768);const a={id:"app"},i={class:"chord-display"};function l(e,t,n,o,l,u){const s=(0,r.g2)("ConfigPanel"),d=(0,r.g2)("Metronome"),c=(0,r.g2)("ChordDisplay");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(s,{onUpdateConfig:u.handleConfigUpdate},null,8,["onUpdateConfig"]),(0,r.bF)(d,{bpm:l.config.bpm,onTick:u.handleTick,ref:"metronome"},null,8,["bpm","onTick"]),(0,r.Lk)("div",i,[(0,r.bF)(c,{currentChord:l.currentChord,nextChord:l.nextChord,showTab:l.config.showTab,beatCounter:l.beatCounter,repeat:l.config.repeat},null,8,["currentChord","nextChord","showTab","beatCounter","repeat"])])])}n(4114);var u=n(4232);const s={class:"config-panel"};function d(e,t,n,a,i,l){return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.Lk)("div",null,[(0,r.Lk)("label",null,[t[23]||(t[23]=(0,r.eW)(" Instrument: ")),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.instrument=e),onChange:t[1]||(t[1]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},t[22]||(t[22]=[(0,r.Lk)("option",{value:"ukulele"},"Ukulele",-1),(0,r.Lk)("option",{value:"guitar"},"Guitar",-1)]),544),[[o.u1,i.instrument]])])]),(0,r.Lk)("div",null,[t[26]||(t[26]=(0,r.Lk)("h4",null,"Tones",-1)),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>i.tones.natural=e),onChange:t[3]||(t[3]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.tones.natural]]),t[24]||(t[24]=(0,r.eW)(" Natural"))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>i.tones.flat=e),onChange:t[5]||(t[5]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.tones.flat]]),t[25]||(t[25]=(0,r.eW)(" Flat (b)"))])]),t[34]||(t[34]=(0,r.Lk)("h4",null,"Include",-1)),(0,r.Lk)("div",null,[(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=e=>i.include.major=e),onChange:t[7]||(t[7]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.include.major]]),t[27]||(t[27]=(0,r.eW)(" Major"))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=e=>i.include.minor=e),onChange:t[9]||(t[9]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.include.minor]]),t[28]||(t[28]=(0,r.eW)(" Minor"))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[10]||(t[10]=e=>i.include.seventh=e),onChange:t[11]||(t[11]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.include.seventh]]),t[29]||(t[29]=(0,r.eW)(" 7"))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=e=>i.include.maj7=e),onChange:t[13]||(t[13]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.include.maj7]]),t[30]||(t[30]=(0,r.eW)(" maj7"))]),(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[14]||(t[14]=e=>i.include.m7=e),onChange:t[15]||(t[15]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.include.m7]]),t[31]||(t[31]=(0,r.eW)(" m7"))])]),t[35]||(t[35]=(0,r.Lk)("h4",null,"Metronome",-1)),(0,r.Lk)("div",null,[(0,r.Lk)("label",null,[(0,r.eW)((0,u.v_)(i.bpm)+" BPM ",1),(0,r.bo)((0,r.Lk)("input",{type:"range","onUpdate:modelValue":t[16]||(t[16]=e=>i.bpm=e),min:"40",max:"200",onInput:t[17]||(t[17]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.Jo,i.bpm]])])]),(0,r.Lk)("div",null,[t[32]||(t[32]=(0,r.Lk)("h4",null,"Repeat",-1)),(0,r.Lk)("label",null,[(0,r.eW)((0,u.v_)(i.repeat)+" ",1),(0,r.bo)((0,r.Lk)("input",{type:"range","onUpdate:modelValue":t[18]||(t[18]=e=>i.repeat=e),min:"1",max:"10",onInput:t[19]||(t[19]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.Jo,i.repeat]])])]),(0,r.Lk)("div",null,[(0,r.Lk)("label",null,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[20]||(t[20]=e=>i.showTab=e),onChange:t[21]||(t[21]=(...e)=>l.emitConfigUpdate&&l.emitConfigUpdate(...e))},null,544),[[o.lH,i.showTab]]),t[33]||(t[33]=(0,r.eW)(" Show Tab"))])])])}var c={data(){return{include:{major:!0,minor:!0,seventh:!1,maj7:!1,m7:!1},bpm:90,repeat:4,showTab:!0,instrument:"ukulele",tones:{natural:!0,flat:!1}}},methods:{emitConfigUpdate(){this.$emit("updateConfig",{include:this.include,bpm:this.bpm,repeat:this.repeat,showTab:this.showTab,instrument:this.instrument,tones:this.tones})}}},h=n(1241);const p=(0,h.A)(c,[["render",d]]);var m=p;const g={class:"chord-display"},f=["src"],b={class:"chord-box next-chord"},k=["src"];function C(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div",g,[t[2]||(t[2]=(0,r.Lk)("div",{class:"empty-chord"},null,-1)),(0,r.Lk)("div",{class:"chord-box current-chord",style:(0,u.Tr)({backgroundColor:i.currentChordBackgroundColor})},[t[0]||(t[0]=(0,r.Lk)("h2",null,"Current Chord",-1)),(0,r.Lk)("h3",null,(0,u.v_)(i.getChordsName(n.currentChord)),1),n.showTab?((0,r.uX)(),(0,r.CE)("img",{key:0,src:i.getChordImageUrl(n.currentChord),alt:"Current Chord"},null,8,f)):(0,r.Q3)("",!0)],4),(0,r.Lk)("div",b,[t[1]||(t[1]=(0,r.Lk)("h2",null,"Coming Next",-1)),(0,r.Lk)("h3",null,(0,u.v_)(i.getChordsName(n.nextChord)),1),n.showTab?((0,r.uX)(),(0,r.CE)("img",{key:0,src:i.getChordImageUrl(n.nextChord),alt:"Next Chord"},null,8,k)):(0,r.Q3)("",!0)])])}var v={props:{currentChord:{type:Object,required:!0},nextChord:{type:Object,required:!0},showTab:{type:Boolean,required:!0},beatCounter:{type:Number,required:!0},repeat:{type:Number,required:!0}},computed:{currentChordBackgroundColor(){return console.log(this.beatCounter,this.repeat),this.beatCounter===this.repeat-1?"#f5c182":"#D5ED9F"}},methods:{getChordImageUrl(e){const t=this.$parent.config.instrument;return`https://tombatossals.github.io/react-chords/media/${t}/chords/${e.main}/${e.variation}/1.svg`},getChordsName(e){const t={major:"",minor:"m"},n=t[e.variation]||e.variation;return"major"===e.variation?e.main:`${e.main}${n}`}}};const L=(0,h.A)(v,[["render",C]]);var y=L;const U={class:"metronome"};function w(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div",U,[t[1]||(t[1]=(0,r.Lk)("h3",null,"Metronome",-1)),(0,r.Lk)("p",null,"BPM: "+(0,u.v_)(n.bpm),1),(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.toggleMetronome&&i.toggleMetronome(...e))},(0,u.v_)(a.isPlaying?"Stop Metronome":"Start Metronome"),1)])}var x={props:{bpm:{type:Number,required:!0}},data(){return{isPlaying:!1,intervalId:null,tickAudio:null,upTickAudio:null,beatCounter:0}},methods:{toggleMetronome(){if(this.isPlaying)clearInterval(this.intervalId),this.isPlaying=!1;else{this.tickAudio=new Audio("https://cdn.freesound.org/previews/250/250552_4570971-lq.mp3"),this.upTickAudio=new Audio("https://cdn.freesound.org/previews/250/250551_4570971-lq.mp3");const e=60/this.bpm*1e3;this.intervalId=setInterval((()=>{this.playTick()}),e),this.isPlaying=!0}},playTick(){this.beatCounter===this.$parent.config.repeat-1?(this.upTickAudio.currentTime=0,this.upTickAudio.play()):(this.tickAudio.currentTime=0,this.tickAudio.play()),this.$emit("tick"),this.beatCounter=(this.beatCounter+1)%this.$parent.config.repeat}},watch:{bpm(e){if(this.isPlaying){clearInterval(this.intervalId);const t=60/e*1e3;this.intervalId=setInterval((()=>{this.playTick()}),t)}}},beforeUnmount(){clearInterval(this.intervalId)}};const T=(0,h.A)(x,[["render",w]]);var j=T,M={components:{ConfigPanel:m,ChordDisplay:y,Metronome:j},data(){return{config:{include:{major:!0,minor:!0,seventh:!1,maj7:!1,m7:!1,sharp:!1},bpm:90,repeat:4,showTab:!0,instrument:"ukulele",tones:{natural:!0,flat:!1}},chords:{natural:["A","B","C","D","E","F","G"],flat:["Ab","Bb","Db","Eb","Gb"],variations:["major","minor","7","maj7","m7"]},currentChord:{main:"A",variation:"major"},nextChord:{main:"A",variation:"minor"},beatCounter:0}},methods:{handleConfigUpdate(e){this.config=e},handleTick(){this.beatCounter+=1,this.beatCounter>=this.config.repeat&&(this.beatCounter=0,this.updateNextChord())},updateNextChord(){const{major:e,minor:t,seventh:n,maj7:o,m7:r}=this.config.include,a=[];e&&a.push("major"),t&&a.push("minor"),n&&a.push("7"),o&&a.push("maj7"),r&&a.push("m7");let i=[];this.config.tones.natural&&(i=i.concat(this.chords.natural)),this.config.tones.flat&&(i=i.concat(this.chords.flat));const l=i[Math.floor(Math.random()*i.length)],u=a[Math.floor(Math.random()*a.length)];this.currentChord=this.nextChord,this.nextChord={main:l,variation:u}},toggleMetronome(){this.$refs.metronome.toggleMetronome()},handleKeydown(e){"Space"===e.code&&this.toggleMetronome()},async releaseWakeLock(){this.wakeLock&&(await this.wakeLock.release(),this.wakeLock=null)}},mounted(){window.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){window.removeEventListener("keydown",this.handleKeydown),this.releaseWakeLock()}};const A=(0,h.A)(M,[["render",l]]);var I=A;async function W(){try{const e=await navigator.wakeLock.request("screen");e.addEventListener("release",(()=>{console.log("Screen Wake Lock released:",e.released)})),console.log("Screen Wake Lock acquired:",e.released)}catch(e){console.error(`${e.name}, ${e.message}`)}}(0,o.Ef)(I).mount("#app"),W()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],u=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var d=u(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkukulele_chords_practice"]=self["webpackChunkukulele_chords_practice"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(8244)}));o=n.O(o)})();
//# sourceMappingURL=app.4dde8ddc.js.map