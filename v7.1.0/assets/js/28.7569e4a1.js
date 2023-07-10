(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{573:function(e,t,o){e.exports=o.p+"assets/img/auth-module-decision-tree.b2c6303f.png"},711:function(e,t,o){"use strict";o.r(t);var a=o(1),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migrating-from-ibc-go-v5-to-v6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-ibc-go-v5-to-v6"}},[e._v("#")]),e._v(" Migrating from ibc-go v5 to v6")]),e._v(" "),a("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),a("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),a("ul",[a("li",[e._v("Chains")]),e._v(" "),a("li",[e._v("IBC Apps")]),e._v(" "),a("li",[e._v("Relayers")]),e._v(" "),a("li",[e._v("IBC Light Clients")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),a("h2",{attrs:{id:"chains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ibc-go/v6")]),e._v(" release introduces a new set of migrations for "),a("code",[e._v("27-interchain-accounts")]),e._v(". Ownership of ICS27 channel capabilities is transferred from ICS27 authentication modules and will now reside with the ICS27 controller submodule moving forward.")]),e._v(" "),a("p",[e._v("For chains which contain a custom authentication module using the ICS27 controller submodule this requires a migration function to be included in the chain upgrade handler. A subsequent migration handler is run automatically, asserting the ownership of ICS27 channel capabilities has been transferred successfully.")]),e._v(" "),a("p",[e._v("This migration is not required for chains which "),a("em",[e._v("do not")]),e._v(" contain a custom authentication module using the ICS27 controller submodule.")]),e._v(" "),a("p",[e._v("This migration facilitates the addition of the ICS27 controller submodule "),a("code",[e._v("MsgServer")]),e._v(" which provides a standardised approach to integrating existing forms of authentication such as "),a("code",[e._v("x/gov")]),e._v(" and "),a("code",[e._v("x/group")]),e._v(" provided by the Cosmos SDK.")]),e._v(" "),a("p",[e._v("For more information please refer to "),a("RouterLink",{attrs:{to:"/architecture/adr-009-v6-ics27-msgserver.html"}},[e._v("ADR 009")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"upgrade-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposal"}},[e._v("#")]),e._v(" Upgrade proposal")]),e._v(" "),a("p",[e._v("Please refer to "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/2383",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #2383"),a("OutboundLink")],1),e._v(" for integrating the ICS27 channel capability migration logic or follow the steps outlined below:")]),e._v(" "),a("ol",[a("li",[e._v("Add the upgrade migration logic to chain distribution. This may be, for example, maintained under a package "),a("code",[e._v("app/upgrades/v6")]),e._v(".")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB2NgoKaW1wb3J0ICgKICAgICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKICAgIHN0b3JldHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9zdG9yZS90eXBlcyZxdW90OwogICAgc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKICAgICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvbW9kdWxlJnF1b3Q7CiAgICBjYXBhYmlsaXR5a2VlcGVyICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9jYXBhYmlsaXR5L2tlZXBlciZxdW90OwogICAgdXBncmFkZXR5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC91cGdyYWRlL3R5cGVzJnF1b3Q7CgogICAgdjYgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3Y2L21vZHVsZXMvYXBwcy8yNy1pbnRlcmNoYWluLWFjY291bnRzL2NvbnRyb2xsZXIvbWlncmF0aW9ucy92NiZxdW90OwopCgpjb25zdCAoCiAgICBVcGdyYWRlTmFtZSA9ICZxdW90O3Y2JnF1b3Q7CikKCmZ1bmMgQ3JlYXRlVXBncmFkZUhhbmRsZXIoCiAgICBtbSAqbW9kdWxlLk1hbmFnZXIsCiAgICBjb25maWd1cmF0b3IgbW9kdWxlLkNvbmZpZ3VyYXRvciwKICAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKICAgIGNhcGFiaWxpdHlTdG9yZUtleSAqc3RvcmV0eXBlcy5LVlN0b3JlS2V5LAogICAgY2FwYWJpbGl0eUtlZXBlciAqY2FwYWJpbGl0eWtlZXBlci5LZWVwZXIsCiAgICBtb2R1bGVOYW1lIHN0cmluZywKKSB1cGdyYWRldHlwZXMuVXBncmFkZUhhbmRsZXIgewogICAgcmV0dXJuIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBfIHVwZ3JhZGV0eXBlcy5QbGFuLCB2bSBtb2R1bGUuVmVyc2lvbk1hcCkgKG1vZHVsZS5WZXJzaW9uTWFwLCBlcnJvcikgewogICAgICAgIGlmIGVyciA6PSB2Ni5NaWdyYXRlSUNTMjdDaGFubmVsQ2FwYWJpbGl0eShjdHgsIGNkYywgY2FwYWJpbGl0eVN0b3JlS2V5LCBjYXBhYmlsaXR5S2VlcGVyLCBtb2R1bGVOYW1lKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIHJldHVybiBuaWwsIGVycgogICAgCX0KCiAgICAgICAgcmV0dXJuIG1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBjb25maWd1cmF0b3IsIHZtKQogICAgfQp9Cg=="}}),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Set the upgrade handler in "),a("code",[e._v("app.go")]),e._v(". The "),a("code",[e._v("moduleName")]),e._v(" parameter refers to the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" name. This is the name provided upon instantiation in "),a("code",[e._v("app.go")]),e._v(" via the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.1/x/capability/keeper/keeper.go#L70",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("x/capability")]),e._v(" keeper "),a("code",[e._v("ScopeToModule(moduleName string)")]),a("OutboundLink")],1),e._v(" method. "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.0.0/testing/simapp/app.go#L304",target:"_blank",rel:"noopener noreferrer"}},[e._v("See here for an example in "),a("code",[e._v("simapp")]),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoCiAgICB2Ni5VcGdyYWRlTmFtZSwKICAgIHY2LkNyZWF0ZVVwZ3JhZGVIYW5kbGVyKAogICAgICAgIGFwcC5tbSwgCiAgICAgICAgYXBwLmNvbmZpZ3VyYXRvciwgCiAgICAgICAgYXBwLmFwcENvZGVjLCAKICAgICAgICBhcHAua2V5c1tjYXBhYmlsaXR5dHlwZXMuTW9kdWxlTmFtZV0sIAogICAgICAgIGFwcC5DYXBhYmlsaXR5S2VlcGVyLCAKICAgICAgICAmZ3Q7Jmd0OyZndDsmZ3Q7IG1vZHVsZU5hbWUgJmx0OyZsdDsmbHQ7Jmx0OywKICAgICksCikK"}}),e._v(" "),a("h2",{attrs:{id:"ibc-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),a("h3",{attrs:{id:"ics27-interchain-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics27-interchain-accounts"}},[e._v("#")]),e._v(" ICS27 - Interchain Accounts")]),e._v(" "),a("h4",{attrs:{id:"controller-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller-apis"}},[e._v("#")]),e._v(" Controller APIs")]),e._v(" "),a("p",[e._v("In previous releases of ibc-go, chain developers integrating the ICS27 interchain accounts controller functionality were expected to create a custom "),a("code",[e._v("Base Application")]),e._v(" referred to as an authentication module, see the section "),a("RouterLink",{attrs:{to:"/apps/interchain-accounts/auth-modules.html"}},[e._v("Building an authentication module")]),e._v(" from the documentation.")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Base Application")]),e._v(" was intended to be composed with the ICS27 controller submodule "),a("code",[e._v("Keeper")]),e._v(" and faciliate many forms of message authentication depending on a chain's particular use case.")]),e._v(" "),a("p",[e._v("Prior to ibc-go v6 the controller submodule exposed only these two functions (to which we will refer as the legacy APIs):")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.0.0/modules/apps/27-interchain-accounts/controller/keeper/account.go#L19",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("RegisterInterchainAccount")]),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.0.0/modules/apps/27-interchain-accounts/controller/keeper/relay.go#L18",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("SendTx")]),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("However, these functions have now been deprecated in favour of the new controller submodule "),a("code",[e._v("MsgServer")]),e._v(" and will be removed in later releases.")]),e._v(" "),a("p",[e._v("Both APIs remain functional and maintain backwards compatibility in ibc-go v6, however consumers of these APIs are now recommended to follow the message passing paradigm outlined in Cosmos SDK "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-031-msg-service.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 031"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-033-protobuf-inter-module-comm.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 033"),a("OutboundLink")],1),e._v(". This is facilitated by the Cosmos SDK "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/baseapp/msg_service_router.go#L17",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("MsgServiceRouter")]),a("OutboundLink")],1),e._v(" and chain developers creating custom application logic can now omit the ICS27 controller submodule "),a("code",[e._v("Keeper")]),e._v(" from their module and instead depend on message routing.")]),e._v(" "),a("p",[e._v("Depending on the use case, developers of custom authentication modules face one of three scenarios:")]),e._v(" "),a("p",[a("img",{attrs:{src:o(573),alt:"AuthModuleDecisionTree"}})]),e._v(" "),a("p",[a("strong",[e._v("My authentication module needs to access IBC packet callbacks")])]),e._v(" "),a("p",[e._v("Application developers that wish to consume IBC packet callbacks and react upon packet acknowledgements "),a("strong",[e._v("must")]),e._v(" continue using the controller submodule's legacy APIs. The authentication modules will not need a "),a("code",[e._v("ScopedKeeper")]),e._v(" anymore, though, because the channel capability will be claimed by the controller submodule. For example, given an Interchain Accounts authentication module keeper "),a("code",[e._v("ICAAuthKeeper")]),e._v(", the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" ("),a("code",[e._v("scopedICAAuthKeeper")]),e._v(") is not needed anymore and can be removed for the argument list of the keeper constructor function, as shown here:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"YXBwLklDQUF1dGhLZWVwZXIgPSBpY2FhdXRoa2VlcGVyLk5ld0tlZXBlcigKICAgIGFwcENvZGVjLCAKICAgIGtleXNbaWNhYXV0aHR5cGVzLlN0b3JlS2V5XSwgCiAgICBhcHAuSUNBQ29udHJvbGxlcktlZXBlciwgCi0gICBzY29wZWRJQ0FBdXRoS2VlcGVyLAopCg=="}}),e._v(" "),a("p",[e._v("Please note that the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" name is still needed as part of the channel capability migration described in section "),a("a",{attrs:{href:"#upgrade-proposal"}},[e._v("Upgrade proposal")]),e._v(" above. Therefore the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" cannot be completely removed from the chain code until the migration has run.")]),e._v(" "),a("p",[e._v("In the future, the use of the legacy APIs for accessing packet callbacks will be replaced by IBC Actor Callbacks (see "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1976",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 008"),a("OutboundLink")],1),e._v(" for more details) and it will also be possible to access them with the "),a("code",[e._v("MsgServiceRouter")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("My authentication module does not need access to IBC packet callbacks")])]),e._v(" "),a("p",[e._v("The authentication module can migrate from using the legacy APIs and it can be composed instead with the "),a("code",[e._v("MsgServiceRouter")]),e._v(", so that the authentication module is able to pass messages to the controller submodule's "),a("code",[e._v("MsgServer")]),e._v(" to register interchain accounts and send packets to the interchain account. For example, given an Interchain Accounts authentication module keeper "),a("code",[e._v("ICAAuthKeeper")]),e._v(", the ICS27 controller submodule keeper ("),a("code",[e._v("ICAControllerKeeper")]),e._v(") and authentication module scoped keeper ("),a("code",[e._v("scopedICAAuthKeeper")]),e._v(") are not needed anymore and can be replaced with the "),a("code",[e._v("MsgServiceRouter")]),e._v(", as shown here:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"YXBwLklDQUF1dGhLZWVwZXIgPSBpY2FhdXRoa2VlcGVyLk5ld0tlZXBlcigKICAgIGFwcENvZGVjLCAKICAgIGtleXNbaWNhYXV0aHR5cGVzLlN0b3JlS2V5XSwgCi0gICBhcHAuSUNBQ29udHJvbGxlcktlZXBlciwgCi0gICBzY29wZWRJQ0FBdXRoS2VlcGVyLAorICAgYXBwLk1zZ1NlcnZpY2VSb3V0ZXIoKSwKKQo="}}),e._v(" "),a("p",[e._v("In your authentication module you can route messages to the controller submodule's "),a("code",[e._v("MsgServer")]),e._v(" instead of using the legacy APIs. For example, for registering an interchain account:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSBpZiBlcnIgOj0ga2VlcGVyLmljYUNvbnRyb2xsZXJLZWVwZXIuUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCgKLSAgICBjdHgsIAotICAgIGNvbm5lY3Rpb25JRCwgCi0gICAgb3duZXIuU3RyaW5nKCksIAotICAgIHZlcnNpb24sCi0gKTsgZXJyICE9IG5pbCB7Ci0gICAgcmV0dXJuIGVycgotIH0KKyBtc2cgOj0gY29udHJvbGxlcnR5cGVzLk5ld01zZ1JlZ2lzdGVySW50ZXJjaGFpbkFjY291bnQoCisgICAgY29ubmVjdGlvbklELCAKKyAgICBvd25lci5TdHJpbmcoKSwgCisgICAgdmVyc2lvbiwKKyApCisgaGFuZGxlciA6PSBrZWVwZXIubXNnUm91dGVyLkhhbmRsZXIobXNnKQorIHJlcywgZXJyIDo9IGhhbmRsZXIoY3R4LCBtc2cpCisgaWYgZXJyICE9IG5pbCB7CisgICAgcmV0dXJuIGVycgorIH0K"}}),e._v(" "),a("p",[e._v("where "),a("code",[e._v("controllertypes")]),e._v(" is an import alias for "),a("code",[e._v('"github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/controller/types"')]),e._v(".")]),e._v(" "),a("p",[e._v("In addition, in this use case the authentication module does not need to implement the "),a("code",[e._v("IBCModule")]),e._v(" interface anymore.")]),e._v(" "),a("p",[a("strong",[e._v("I do not need a custom authentication module anymore")])]),e._v(" "),a("p",[e._v("If your authentication module does not have any extra functionality compared to the default authentication module added in ibc-go v6 (the "),a("code",[e._v("MsgServer")]),e._v("), or if you can use a generic authentication module, such as the "),a("code",[e._v("x/auth")]),e._v(", "),a("code",[e._v("x/gov")]),e._v(" or "),a("code",[e._v("x/group")]),e._v(" modules from the Cosmos SDK (v0.46 and later), then you can remove your authentication module completely and use instead the gRPC endpoints of the "),a("code",[e._v("MsgServer")]),e._v(" or the CLI added in ibc-go v6.")]),e._v(" "),a("p",[e._v("Please remember that the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" name is still needed as part of the channel capability migration described in section "),a("a",{attrs:{href:"#upgrade-proposal"}},[e._v("Upgrade proposal")]),e._v(" above.")]),e._v(" "),a("h4",{attrs:{id:"host-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-params"}},[e._v("#")]),e._v(" Host params")]),e._v(" "),a("p",[e._v("The ICS27 host submodule default params have been updated to include the "),a("code",[e._v("AllowAllHostMsgs")]),e._v(" wildcard "),a("code",[e._v("*")]),e._v(".\nThis enables execution of any "),a("code",[e._v("sdk.Msg")]),e._v(" type for ICS27 registered on the host chain "),a("code",[e._v("InterfaceRegistry")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gQWxsb3dBbGxIb3N0TXNncyBob2xkcyB0aGUgc3RyaW5nIGtleSB0aGF0IGFsbG93cyBhbGwgbWVzc2FnZSB0eXBlcyBvbiBpbnRlcmNoYWluIGFjY291bnRzIGhvc3QgbW9kdWxlCmNvbnN0IEFsbG93QWxsSG9zdE1zZ3MgPSAmcXVvdDsqJnF1b3Q7CgouLi4KCi8vIERlZmF1bHRQYXJhbXMgaXMgdGhlIGRlZmF1bHQgcGFyYW1ldGVyIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBob3N0IHN1Ym1vZHVsZQpmdW5jIERlZmF1bHRQYXJhbXMoKSBQYXJhbXMgewotICAgcmV0dXJuIE5ld1BhcmFtcyhEZWZhdWx0SG9zdEVuYWJsZWQsIG5pbCkKKyAgIHJldHVybiBOZXdQYXJhbXMoRGVmYXVsdEhvc3RFbmFibGVkLCBbXXN0cmluZ3tBbGxvd0FsbEhvc3RNc2dzfSkKfQo="}}),e._v(" "),a("h4",{attrs:{id:"api-breaking-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-breaking-changes"}},[e._v("#")]),e._v(" API breaking changes")]),e._v(" "),a("p",[a("code",[e._v("SerializeCosmosTx")]),e._v(" takes in a "),a("code",[e._v("[]proto.Message")]),e._v(" instead of "),a("code",[e._v("[]sdk.Message")]),e._v(". This allows for the serialization of proto messages without requiring the fulfillment of the "),a("code",[e._v("sdk.Msg")]),e._v(" interface.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("27-interchain-accounts")]),e._v(" genesis types have been moved to their own package: "),a("code",[e._v("modules/apps/27-interchain-acccounts/genesis/types")]),e._v(".\nThis change facilitates the addition of the ICS27 controller submodule "),a("code",[e._v("MsgServer")]),e._v(" and avoids cyclic imports. This should have minimal disruption to chain developers integrating "),a("code",[e._v("27-interchain-accounts")]),e._v(".")]),e._v(" "),a("p",[e._v("The ICS27 host submodule "),a("code",[e._v("NewKeeper")]),e._v(" function in "),a("code",[e._v("modules/apps/27-interchain-acccounts/host/keeper")]),e._v(" now includes an additional parameter of type "),a("code",[e._v("ICS4Wrapper")]),e._v(".\nThis provides the host submodule with the ability to correctly unwrap channel versions in the event of a channel reopening handshake.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgICBjZGMgY29kZWMuQmluYXJ5Q29kZWMsIGtleSBzdG9yZXR5cGVzLlN0b3JlS2V5LCBwYXJhbVNwYWNlIHBhcmFtdHlwZXMuU3Vic3BhY2UsCi0gICBjaGFubmVsS2VlcGVyIGljYXR5cGVzLkNoYW5uZWxLZWVwZXIsIHBvcnRLZWVwZXIgaWNhdHlwZXMuUG9ydEtlZXBlciwKKyAgIGljczRXcmFwcGVyIGljYXR5cGVzLklDUzRXcmFwcGVyLCBjaGFubmVsS2VlcGVyIGljYXR5cGVzLkNoYW5uZWxLZWVwZXIsIHBvcnRLZWVwZXIgaWNhdHlwZXMuUG9ydEtlZXBlciwKICAgIGFjY291bnRLZWVwZXIgaWNhdHlwZXMuQWNjb3VudEtlZXBlciwgc2NvcGVkS2VlcGVyIGljYXR5cGVzLlNjb3BlZEtlZXBlciwgbXNnUm91dGVyIGljYXR5cGVzLk1lc3NhZ2VSb3V0ZXIsCikgS2VlcGVyCg=="}}),e._v(" "),a("h3",{attrs:{id:"ics29-newkeeper-api-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics29-newkeeper-api-change"}},[e._v("#")]),e._v(" ICS29 - "),a("code",[e._v("NewKeeper")]),e._v(" API change")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("NewKeeper")]),e._v(" function of ICS29 has been updated to remove the "),a("code",[e._v("paramSpace")]),e._v(" parameter as it was unused.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCi0gICBjZGMgY29kZWMuQmluYXJ5Q29kZWMsIGtleSBzdG9yZXR5cGVzLlN0b3JlS2V5LCBwYXJhbVNwYWNlIHBhcmFtdHlwZXMuU3Vic3BhY2UsCi0gICBpY3M0V3JhcHBlciB0eXBlcy5JQ1M0V3JhcHBlciwgY2hhbm5lbEtlZXBlciB0eXBlcy5DaGFubmVsS2VlcGVyLCBwb3J0S2VlcGVyIHR5cGVzLlBvcnRLZWVwZXIsIGF1dGhLZWVwZXIgdHlwZXMuQWNjb3VudEtlZXBlciwgYmFua0tlZXBlciB0eXBlcy5CYW5rS2VlcGVyLAorICAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLCBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwKKyAgIGljczRXcmFwcGVyIHR5cGVzLklDUzRXcmFwcGVyLCBjaGFubmVsS2VlcGVyIHR5cGVzLkNoYW5uZWxLZWVwZXIsCisgICBwb3J0S2VlcGVyIHR5cGVzLlBvcnRLZWVwZXIsIGF1dGhLZWVwZXIgdHlwZXMuQWNjb3VudEtlZXBlciwgYmFua0tlZXBlciB0eXBlcy5CYW5rS2VlcGVyLAopIEtlZXBlciB7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"ics20-sendtransfer-is-no-longer-exported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics20-sendtransfer-is-no-longer-exported"}},[e._v("#")]),e._v(" ICS20 - "),a("code",[e._v("SendTransfer")]),e._v(" is no longer exported.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SendTransfer")]),e._v(" function of ICS20 has been removed. IBC transfers should now be initiated with "),a("code",[e._v("MsgTransfer")]),e._v(" and routed to the ICS20 "),a("code",[e._v("MsgServer")]),e._v(".")]),e._v(" "),a("p",[e._v("See below for example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgaGFuZGxlciA6PSBtc2dSb3V0ZXIuSGFuZGxlcihtc2dUcmFuc2Zlcik7IGhhbmRsZXIgIT0gbmlsIHsKICAgIGlmIGVyciA6PSBtc2dUcmFuc2Zlci5WYWxpZGF0ZUJhc2ljKCk7IGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBuaWwsIGVycgogICAgfQoJCiAgICByZXMsIGVyciA6PSBoYW5kbGVyKGN0eCwgbXNnVHJhbnNmZXIpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gbmlsLCBlcnIKICAgIH0KfQo="}}),e._v(" "),a("h3",{attrs:{id:"ics04-sendpacket-api-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics04-sendpacket-api-change"}},[e._v("#")]),e._v(" ICS04 - "),a("code",[e._v("SendPacket")]),e._v(" API change")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SendPacket")]),e._v(" API has been simplified:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gU2VuZFBhY2tldCBpcyBjYWxsZWQgYnkgYSBtb2R1bGUgaW4gb3JkZXIgdG8gc2VuZCBhbiBJQkMgcGFja2V0IG9uIGEgY2hhbm5lbApmdW5jIChrIEtlZXBlcikgU2VuZFBhY2tldCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNoYW5uZWxDYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAotICAgcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCi0pIGVycm9yIHsKKyAgIHNvdXJjZVBvcnQgc3RyaW5nLAorICAgc291cmNlQ2hhbm5lbCBzdHJpbmcsCisgICB0aW1lb3V0SGVpZ2h0IGNsaWVudHR5cGVzLkhlaWdodCwKKyAgIHRpbWVvdXRUaW1lc3RhbXAgdWludDY0LAorICAgZGF0YSBbXWJ5dGUsCispICh1aW50NjQsIGVycm9yKSB7Cg=="}}),e._v(" "),a("p",[e._v("Callers no longer need to pass in a pre-constructed packet.\nThe destination port/channel identifiers and the packet sequence will be determined by core IBC.\n"),a("code",[e._v("SendPacket")]),e._v(" will return the packet sequence.")]),e._v(" "),a("h3",{attrs:{id:"ibc-testing-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-testing-package"}},[e._v("#")]),e._v(" IBC testing package")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SendPacket")]),e._v(" API has been simplified:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gU2VuZFBhY2tldCBpcyBjYWxsZWQgYnkgYSBtb2R1bGUgaW4gb3JkZXIgdG8gc2VuZCBhbiBJQkMgcGFja2V0IG9uIGEgY2hhbm5lbApmdW5jIChrIEtlZXBlcikgU2VuZFBhY2tldCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNoYW5uZWxDYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAotICAgcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCi0pIGVycm9yIHsKKyAgIHNvdXJjZVBvcnQgc3RyaW5nLAorICAgc291cmNlQ2hhbm5lbCBzdHJpbmcsCisgICB0aW1lb3V0SGVpZ2h0IGNsaWVudHR5cGVzLkhlaWdodCwKKyAgIHRpbWVvdXRUaW1lc3RhbXAgdWludDY0LAorICAgZGF0YSBbXWJ5dGUsCispICh1aW50NjQsIGVycm9yKSB7Cg=="}}),e._v(" "),a("p",[e._v("Callers no longer need to pass in a pre-constructed packet. "),a("code",[e._v("SendPacket")]),e._v(" will return the packet sequence.")]),e._v(" "),a("h2",{attrs:{id:"relayers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),a("h2",{attrs:{id:"ibc-light-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC Light Clients")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);