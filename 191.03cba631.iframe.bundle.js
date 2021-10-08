"use strict";(self.webpackChunk_qvant_qui_max=self.webpackChunk_qvant_qui_max||[]).push([[191],{65191:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>DialogFormTest});var vue_esm_bundler=__webpack_require__(5166);const _hoisted_1=(0,vue_esm_bundler.createTextVNode)("Morbi massa libero, vehicula nec consequat sed, porta a sem."),_hoisted_2=(0,vue_esm_bundler.createTextVNode)("Confirm"),_hoisted_3=(0,vue_esm_bundler.createTextVNode)("Cancel");__webpack_require__(88674),__webpack_require__(41539),__webpack_require__(32564);var qComponents=__webpack_require__(95571),__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const DialogFormTestvue_type_script_lang_ts=(0,vue_esm_bundler.defineComponent)({name:"DialogFormTest",components:{QDialogContent:qComponents.Bk},props:{someExternalProp:{type:String,default:"Default external prop"}},emits:["name-input"],setup:function setup(_,ctx){var _this=this,qDialogContainer=(0,vue_esm_bundler.inject)("qDialogContainer"),isLoading=(0,vue_esm_bundler.ref)(!1),formModel=(0,vue_esm_bundler.reactive)({name:"Testname"}),commitBeforeClose=function commitBeforeClose(){return new Promise((function(resolve){return setTimeout((function(){return resolve(!0)}),1e3)}))};return{isLoading,formModel,handleNameInput:function handleNameInput(e){ctx.emit("name-input",e.target.value)},handleConfirmClick:function handleConfirmClick(){return __awaiter(_this,void 0,void 0,regeneratorRuntime.mark((function _callee(){var action;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return isLoading.value=!0,action=qComponents.$v.confirm,_context.next=4,commitBeforeClose();case 4:_context.sent&&(null==qDialogContainer||qDialogContainer.emitDoneEvent({action})),isLoading.value=!1;case 7:case"end":return _context.stop()}}),_callee)})))},handleCancelClick:function handleCancelClick(){return __awaiter(_this,void 0,void 0,regeneratorRuntime.mark((function _callee2(){var action;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:action=qComponents.$v.cancel,null==qDialogContainer||qDialogContainer.emitDoneEvent({action});case 2:case"end":return _context2.stop()}}),_callee2)})))}}}});const __exports__=(0,__webpack_require__(44027).Z)(DialogFormTestvue_type_script_lang_ts,[["render",function render(_ctx,_cache,$props,$setup,$data,$options){const _component_q_input=(0,vue_esm_bundler.resolveComponent)("q-input"),_component_q_form_item=(0,vue_esm_bundler.resolveComponent)("q-form-item"),_component_q_form=(0,vue_esm_bundler.resolveComponent)("q-form"),_component_q_button=(0,vue_esm_bundler.resolveComponent)("q-button"),_component_q_dialog_content=(0,vue_esm_bundler.resolveComponent)("q-dialog-content");return(0,vue_esm_bundler.openBlock)(),(0,vue_esm_bundler.createBlock)(_component_q_dialog_content,null,{title:(0,vue_esm_bundler.withCtx)((()=>[_hoisted_1])),default:(0,vue_esm_bundler.withCtx)((()=>[(0,vue_esm_bundler.createTextVNode)(" "+(0,vue_esm_bundler.toDisplayString)(_ctx.someExternalProp)+" ",1),(0,vue_esm_bundler.createVNode)(_component_q_form,{model:_ctx.formModel},{default:(0,vue_esm_bundler.withCtx)((()=>[(0,vue_esm_bundler.createVNode)(_component_q_form_item,{prop:"name",label:"Name",required:""},{default:(0,vue_esm_bundler.withCtx)((()=>[(0,vue_esm_bundler.createVNode)(_component_q_input,{modelValue:_ctx.formModel.name,"onUpdate:modelValue":_cache[0]||(_cache[0]=$event=>_ctx.formModel.name=$event),onInput:_ctx.handleNameInput},null,8,["modelValue","onInput"])])),_:1})])),_:1},8,["model"]),(0,vue_esm_bundler.createVNode)(_component_q_button,{loading:_ctx.isLoading,onClick:_ctx.handleConfirmClick},{default:(0,vue_esm_bundler.withCtx)((()=>[_hoisted_2])),_:1},8,["loading","onClick"]),(0,vue_esm_bundler.createVNode)(_component_q_button,{theme:"secondary",onClick:_ctx.handleCancelClick},{default:(0,vue_esm_bundler.withCtx)((()=>[_hoisted_3])),_:1},8,["onClick"])])),_:1})}]]),DialogFormTest=__exports__;__exports__.__docgenInfo={displayName:"DialogFormTest",exportName:"default",description:"",tags:{},props:[{name:"someExternalProp",type:{name:"string"},defaultValue:{func:!1,value:"'Default external prop'"}}],events:[{name:"name-input"}]}}}]);